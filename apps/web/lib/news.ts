import { promises as fs } from 'fs';
import path from 'path';
import fallbackNews from '../data/news.json';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary?: string;
  peopleIds?: string[];
  status: 'draft' | 'published';
}

function normalizeItems(items: NewsItem[]): NewsItem[] {
  return items.map(item => ({ ...item, status: item.status || 'published' }));
}

function sortByDateDesc(items: NewsItem[]): NewsItem[] {
  return [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/* ── Local JSON storage ──────────────────────────────────────
 * News updates are stored in apps/web/data/news.json. This is read on every
 * request and rewritten when updates are created/edited/deleted via /admin.
 *
 * NOTE: Writes work in local development and on any persistent Node host.
 * On serverless/read-only deployments (e.g. Vercel), the filesystem is not
 * writable at runtime — there, edit data/news.json directly and redeploy.
 * ──────────────────────────────────────────────────────────── */

const LOCAL_PATH = path.join(process.cwd(), 'data', 'news.json');

async function getLocalNews(): Promise<NewsItem[]> {
  try {
    const raw = await fs.readFile(LOCAL_PATH, 'utf-8');
    return normalizeItems(JSON.parse(raw) as NewsItem[]);
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      'code' in err &&
      (err as NodeJS.ErrnoException).code === 'ENOENT'
    ) {
      return normalizeItems(fallbackNews as NewsItem[]);
    }
    console.warn('[news] Failed to read local news.json, using bundled fallback:', err);
    return normalizeItems(fallbackNews as NewsItem[]);
  }
}

async function localWrite(items: NewsItem[]): Promise<void> {
  await fs.writeFile(LOCAL_PATH, JSON.stringify(items, null, 2) + '\n', 'utf-8');
}

/* ── Public API ──────────────────────────────────────────── */

export async function getAllNews(): Promise<NewsItem[]> {
  return sortByDateDesc(await getLocalNews());
}

export async function getPublishedNews(): Promise<NewsItem[]> {
  const items = await getLocalNews();
  return sortByDateDesc(items.filter(item => item.status === 'published'));
}

export async function getNewsById(id: string): Promise<NewsItem | undefined> {
  const items = await getLocalNews();
  return items.find(item => item.id === id);
}

export async function createNewsItem(
  data: Omit<NewsItem, 'id'>,
): Promise<NewsItem> {
  const id = `news-${Date.now()}`;
  const items = await getLocalNews();
  const newItem: NewsItem = { ...data, id };
  items.push(newItem);
  await localWrite(items);
  return newItem;
}

export async function updateNewsItem(
  id: string,
  data: Partial<Omit<NewsItem, 'id'>>,
): Promise<NewsItem | null> {
  const items = await getLocalNews();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...data };
  await localWrite(items);
  return items[idx];
}

export async function deleteNewsItem(id: string): Promise<boolean> {
  const items = await getLocalNews();
  const idx = items.findIndex(item => item.id === id);
  if (idx === -1) return false;
  items.splice(idx, 1);
  await localWrite(items);
  return true;
}
