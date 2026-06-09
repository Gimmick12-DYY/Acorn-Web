/** Public-facing site copy (approved for web publication). */

export const institutions = [
  'Yale University',
  'Princeton University',
  'UNC Chapel Hill',
  'Iowa State University',
  'UC Riverside',
] as const;

export const overview = {
  paragraphs: [
    'Brain-Computer Interfaces (BCIs) enable machines to directly read from and modulate biological neurons in the brain. Today, BCIs are being used to treat neurological disease and advance neuroscience research. In the future, BCIs are expected to help integrate artificial intelligence with natural intelligence, unleashing tremendous capacity to improve neural functioning.',
    'Delivering on the promise of BCIs requires a dramatic improvement in their ability to process and modulate high-fidelity brain signals within milliseconds. Importantly, BCIs offer superior disease treatment and derive richer insights about brain function the more the volume of processed neural data.',
    'Computers that process large volumes of data quickly while supporting many processing algorithms consume more power and dissipate more heat. This makes them challenging to integrate with surgically implanted sensors that read the highest quality brain data. The lack of computer systems with the necessary performance per watt and flexibility needed for safe implantation precludes realization of high-bandwidth real-time BCIs with integrated compute, and is impeding progress in the field.',
    'This NSF Expeditions in Computing project lays the foundation for Very Large-scale Brain Interfacing (VLBI) — a novel paradigm for milliwatt-scale programmable real-time BCIs that interface with large volumes of brain data. VLBI systems can potentially transform disease treatment and research.',
    'To demonstrate the possibilities unlocked by VLBI, we will actualize our research via chip tape-outs with progressively complete functionality, ultimately realizing a chip and associated software stack that we collectively dub Acorn. Our software stack will enable programming and deployment for interfacing experiments with the rodent brain. Our experiments will lay the groundwork of novel BCIs that restore cognitive functionality lost due to neurological disease and traumatic brain injury.',
  ],
};

export const intellectualMerit = {
  paragraphs: [
    'VLBI requires profound advances over existing state-of-the-art approaches to power-efficient computing. This project meets these needs by leveraging the brain\u2019s computation to ease the control and coordination overheads of accelerator-rich systems.',
    'Because BCI chips are power-limited, and not area-limited, VLBI systems should, in theory, achieve power-efficient flexibility by integrating many tens to hundreds of hardware accelerators catered to power-efficient execution of the many distinct computational kernels needed for neural processing. In practice, however, such accelerator-rich approaches have historically been infeasible because determining when and which accelerators should turn on/off and managing their dataflow suffers from intractably high overheads as the number of accelerators scales.',
    'To overcome this problem, we leverage recent results in neuroscience that show that brain activity is context-dependent and can be classified into multi-second motifs that determine the finer-grained millisecond-scale activity of the brain. Acorn leverages the concept of motifs to divide-and-conquer the many-accelerator orchestration complexity by only activating accelerators pertinent to the motif. This simplifies Acorn\u2019s control plane dramatically, enabling superior performance per watt.',
    'Acorn will be realized by experts across computer architecture, chip design, and compilers at Yale, Iowa State, and UNC Chapel Hill; operating systems and algorithms at Yale; analog, digital, and RF circuits at Yale and UNC Chapel Hill; numerics and programming languages at UC Riverside; neuroscientists at Princeton; and bioethics at Yale. The design of milliwatt/millisecond-scale systems will yield new lessons and insights into fundamental computing challenges. Finally, this project will also shed light on the ethical and regulatory implications of future BCI machines.',
  ],
};

export const broaderImpacts = {
  paragraphs: [
    'VLBI systems will enable next-generation therapy for neurological disorders, and perhaps even enable future augmentation of human cognitive performance. The education efforts in this project will also nucleate a new workforce at the intersection of computing, neuroengineering, and bioethics. Technology transfer into startups will help translate research results into industry. Educational efforts will include best practices for organizational ethics so that ethical deliberation can be integrated within industry.',
  ],
};

export const disciplines = [
  'Computer architecture',
  'Chip design & compilers',
  'Operating systems & algorithms',
  'Analog, digital & RF circuits',
  'Numerics & programming languages',
  'Neuroscience',
  'Bioethics',
];
