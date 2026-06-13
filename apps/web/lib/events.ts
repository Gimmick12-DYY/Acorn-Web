import events from '../data/events.json';

export interface EventItem {
  id: string;
  title: string;
  date: string;
  type: string;
  location?: string;
  description?: string;
  url?: string;
}

function sortByDateDesc(items: EventItem[]): EventItem[] {
  return [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEvents(): EventItem[] {
  return sortByDateDesc(events as EventItem[]);
}
