export const educationLevels = [
  {
    id: 'creche',
    name: 'Creche',
    summary: null,
    ageRange: null,
    learningFocus: null,
    dailyRoutine: null,
    facilities: null,
    image: null,
    imageAlt: null,
    detailsPending: true,
  },
  {
    id: 'nursery',
    name: 'Nursery',
    summary: null,
    ageRange: null,
    learningFocus: null,
    activities: null,
    transitionDetails: null,
    image: null,
    imageAlt: null,
    detailsPending: true,
  },
  {
    id: 'primary',
    name: 'Primary',
    summary: null,
    classStructure: null,
    curriculum: null,
    assessment: null,
    image: null,
    imageAlt: null,
    detailsPending: true,
  },
];

export const pendingNote =
  'Detailed information for each level is pending owner confirmation and will be published here once approved.';

export const earlyYears = {
  title: 'Early Years (Pre-School & Nursery)',
  ageRange: null,
  ageRangePending: true,
  pillars: [
    { title: 'Communication & language', detail: null },
    { title: 'Personal, social & emotional development', detail: null },
    { title: 'Physical development', detail: null },
    { title: 'Literacy', detail: null },
    { title: 'Numeracy', detail: null },
    { title: 'Understanding the world', detail: null },
    { title: 'Expressive arts & design', detail: null },
  ],
  dailyRoutine: null,
  detailsPending: true,
};

export const primarySchool = {
  title: 'Primary School',
  classStructure: null,
  classStructurePending: true,
  subjects: [],
  subjectsPending: true,
  assessment: null,
  assessmentPending: true,
  progression: null,
  detailsPending: true,
};

export const admissionsProcess = [
  { step: 1, title: 'Inquiry', detail: 'Contact the school by email or WhatsApp to express interest in a Creche, Nursery, or Primary place.' },
  { step: 2, title: 'Visit', detail: 'Arrange a visit to see the learning environment and ask questions about the school day.' },
  { step: 3, title: 'Application', detail: 'Complete the school&rsquo;s application form and provide the documents requested.' },
  { step: 4, title: 'Assessment', detail: 'The school may assess your child&rsquo;s readiness and appropriate class placement.' },
  { step: 5, title: 'Meeting', detail: 'Meet with the school to discuss your child&rsquo;s needs and the programme offered.' },
  { step: 6, title: 'Decision', detail: 'The school confirms whether a place is available and the next steps for enrolment.' },
  { step: 7, title: 'Enrollment', detail: 'Complete enrolment paperwork and confirm start date with the school.' },
];

export const placementPolicies = [
  'Class placement is based on age and the school&rsquo;s assessment of the child&rsquo;s readiness.',
  'Available places are confirmed by the school at the time of enquiry.',
  'Parents should confirm the school calendar, class availability, required documents and practical arrangements directly with the admissions team.',
];

export const requiredDocuments = [
  'Completed application form',
  'Child&rsquo;s birth certificate',
  'Immunisation / health records',
  'Previous school report or transfer letter (where applicable)',
  'Passport photographs of the child',
  'Parent or guardian identification',
];
