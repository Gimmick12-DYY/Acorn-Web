/** Public site images — paths under apps/web/public/images/ */

export const heroImage = '/images/hero-brain.jpg';

export const aboutBrainImage = '/images/about-brain.jpg';

export const rodentValidationImage = '/images/rodent-validation.png';

export const layersDiagram = '/images/layers-diagram.png';

export const overviewPanels = [
  {
    src: '/images/overview-panel-1.png',
    title: 'MoLib to implant stack',
    alt: 'Acorn software stack from MoLib through compiler and runtime to the implantable hardware system',
    caption:
      'From MoLib and user dataflows through compilation and runtime to the Acorn implant stack—probes, headstage, and on-device processing.',
  },
  {
    src: '/images/overview-panel-2.png',
    title: 'Wireless power & wearables',
    alt: 'Acorn wireless power delivery, runtime assist, and wearables integration at 10 meter range',
    caption:
      'Long-range wireless power, runtime assist, and data offload to wearables—enabling untethered BCI operation within strict thermal limits.',
  },
  {
    src: '/images/overview-panel-3.png',
    title: 'Rodent validation platform',
    alt: 'Acorn system architecture for rodent brain interfacing with digital, analog, radio, and power subsystems',
    caption:
      'Neural probes through the Acorn system board—digital processing, analog compute, radio, storage, and power.',
  },
] as const;

export type OverviewPanel = (typeof overviewPanels)[number];
