/** Public-facing site copy sourced from the Acorn EiC proposal. */

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

export const vision = {
  paragraphs: [
    'Humanity is on the verge of a revolution in how we understand and treat the brain. Brain-Computer Interfaces—devices that directly read from and write to biological neurons—are transforming the treatment of brain disorders and expanding our understanding of cognition itself.',
    'As surgical techniques continue to improve, implantable BCIs will become viable treatment options for millions of Americans with neurological conditions that do not respond to medication. At the same time, computer systems have become a central bottleneck in neurotechnology: current systems cannot process high-resolution neural data with the ultra-low latency, adaptive intelligence, and power efficiency needed for safe and effective use.',
    'This Expeditions in Computing project will close this computing gap by inventing Very Large-Scale Brain Integration (VLBI). VLBI systems leverage the brain\u2019s natural computation to enable in situ BCI computers with breakthrough levels of efficiency and capability—combining the unique strengths of computation in the brain and in silicon across the full computing stack.',
    'Our research will culminate in the creation and physical fabrication of Acorn, an exemplar VLBI computer system validated by interfacing with a rodent\u2019s brain in real time. This effort lays the foundation for cognitive prosthetic BCIs—devices that not only treat brain disorders, but restore lost function from strokes, traumatic brain injury, and more.',
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

export const researchThrusts = [
  {
    id: 'thrust-1',
    number: 1,
    title: 'The Motif Abstract Machine',
    leaders: 'Pothukuchi (lead), Bhattacharjee, Buschman, Coifman, Lim, Liu, Manohar',
    summary:
      'Define the Motif Abstract Machine (MoMA)—a foundational hardware-software interface for flexible BCI workloads. Characterize the landscape of neural processing algorithms, identify common sub-kernels amenable to ASIC implementation, and express neural processing with a novel space-time algebra.',
  },
  {
    id: 'thrust-2',
    number: 2,
    title: 'Motif-Driven Accelerator-Rich Hardware',
    leaders: 'Bhattacharjee (lead), Lim, Liu, Manohar, Natarajan, Khandelwal, Pothukuchi',
    summary:
      'Design hundreds of power-efficient ASIC accelerators tailored to BCI workloads, using high-level synthesis and custom circuit techniques. Partition algorithms across ASICs to maximize system-level performance per watt while minimizing communication overhead between accelerators.',
  },
  {
    id: 'thrust-3',
    number: 3,
    title: 'Motif-Driven Accelerator-Rich Systems Software',
    leaders: 'Zhong (lead), Bhattacharjee, Khandelwal, Lim, Pothukuchi',
    summary:
      'Build a new software stack—compilers, runtimes, and operating system support—for motif-guided execution. Enable programming in MATLAB and Python while statically generating efficient accelerator schedules from motif transitions, dramatically simplifying the control plane.',
  },
  {
    id: 'thrust-4',
    number: 4,
    title: 'Integrated Wireless Communication & Power Delivery',
    leaders: 'Manohar (lead), Natarajan',
    summary:
      'Achieve breakthrough 10-meter untethered BCI operation at milliwatt-scale power through long-range RF powering and energy-proportional ultra-wideband wireless links. Enable patients to communicate with wearables and home devices without exceeding strict thermal limits.',
  },
  {
    id: 'thrust-5',
    number: 5,
    title: 'Cognitive Prosthetic BCI via Rodent Brain Interfacing',
    leaders: 'Buschman (lead), Bhattacharjee, Pothukuchi',
    summary:
      'Validate Acorn by interfacing with a rodent brain in real time—detecting neural motifs, dynamically allocating compute, and adaptively intervening to improve associative learning. Lays the groundwork for BCIs that restore cognitive functionality lost to disease or injury.',
  },
];

export const broaderImpacts = {
  paragraphs: [
    'VLBI systems will enable next-generation therapy for neurological disorders, and perhaps even enable future augmentation of human cognitive performance. The education efforts in this project will also nucleate a new workforce at the intersection of computing, neuroengineering, and bioethics. Technology transfer into startups will help translate research results into industry. Educational efforts will include best practices for organizational ethics so that ethical deliberation can be integrated within industry.',
    'This project will significantly advance both societal well-being and the broader computing research community. We will unlock a new generation of medical therapies for patients with medication-resistant neurological disorders—including epilepsy, ALS, Parkinson\u2019s, Alzheimer\u2019s, and paralysis—conditions that affect tens of millions globally.',
    'Investing in computer systems for implanted BCIs is a rigorous stress test for the entire field of computer systems. These systems must deliver real-time intelligence from massive data streams, with power constraints tighter than any edge device today. The breakthroughs needed to meet BCI demands—ultra-efficient computation, real-time response, and tight cross-layer co-design—will define the next generation of resource-constrained edge accelerators, wearables, and autonomous systems.',
  ],
};

export const outreachPrograms = [
  {
    title: 'VLBI Simulator',
    description:
      'An open-source educational platform—like WeensyOS or Simplescalar for BCIs—modeling key features of a full VLBI system. Includes modular tutorials, containerized tools, and power/performance modeling for hands-on learning across disciplines.',
  },
  {
    title: 'Bootcamps & Tutorials',
    description:
      'Two-day summer bootcamps from year 3 onwards, plus tutorials at top computing and neuroengineering venues (EMBC, NER, SIGARCH, SIGOPS). All workshops recorded and shared publicly.',
  },
  {
    title: 'Workforce Development',
    description:
      'New course modules across engineering, bioethics, and data science; a project-intensive course on computing for BCIs; and an annual REU program matching undergraduates with PIs across all institutions.',
  },
  {
    title: 'Broadening Participation',
    description:
      'Partnerships with Yale Pathways to Science and ISU Science Bound; virtual bootcamps for high-school students; synthetic neural data modules; and collaboration with Neuromatch Academy.',
  },
  {
    title: 'Public Exhibits',
    description:
      'Exhibits at Yale\u2019s Peabody Museum and UNC\u2019s Morehead Planetarium on BCI history and Acorn\u2019s contributions—reaching over 200,000 annual visitors.',
  },
  {
    title: 'Bioethics Integration',
    description:
      'Community Bioethics Forum, national survey of community views, policy briefs, and summer bioethics courses for neurotechnologies—led by PI Bruce and integrated across all project activities.',
  },
];

export const disciplines = [
  'Computer architecture',
  'Chip design & compilers',
  'Operating systems & algorithms',
  'Analog, digital & RF circuits',
  'Numerics & programming languages',
  'Neuroscience',
  'Bioethics',
];

export const designGoals = [
  'Operate at milliwatt-scale power while processing 1 Gbps of neural data within milliseconds',
  'Support programming in Python and MATLAB with a broad range of neural processing algorithms',
  'Use flexible, durable abstractions to support current and future BCI use cases',
  'Leverage neural motifs to orchestrate hundreds of hardware accelerators efficiently',
];
