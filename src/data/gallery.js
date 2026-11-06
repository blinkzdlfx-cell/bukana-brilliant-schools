const image = (id, category, caption, photoId) => ({
  id, category, caption,
  alt: `Illustrative royalty-free photograph: ${caption.toLowerCase()}`,
  src: `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1100&q=78`,
  thumbnail: `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=640&q=72`,
});

export const galleryCategories = [
  { id: 'all', label: 'All photographs' },
  { id: 'learning', label: 'Learning & classrooms' },
  { id: 'reading', label: 'Reading & discovery' },
  { id: 'creative', label: 'Creative learning' },
  { id: 'play', label: 'Play & activity' },
  { id: 'environment', label: 'Learning environment' },
];

// Temporary royalty-free visual references. These are not photographs of BBS.
export const galleryItems = [
  image('gallery-01','learning','A bright classroom prepared for learning','photo-1509062522246-3755977927d7'),
  image('gallery-02','learning','A teacher guiding a classroom activity','photo-1503676260728-1c00da094a0b'),
  image('gallery-03','learning','Children learning together at a table','photo-1503454537195-1dcabb73ffb9'),
  image('gallery-04','learning','A welcoming classroom learning space','photo-1588072432836-e10032774350'),
  image('gallery-05','learning','A focused lesson in a modern classroom','photo-1427504494785-3a9ca7044f45'),
  image('gallery-06','learning','A group learning activity','photo-1523050854058-8df90110c9f1'),
  image('gallery-07','reading','A child exploring a picture book','photo-1512820790803-83ca734da794'),
  image('gallery-08','reading','Books arranged for young readers','photo-1495446815901-a7297e633e8d'),
  image('gallery-09','reading','A quiet space for reading and discovery','photo-1507842217343-583bb7270b66'),
  image('gallery-10','reading','A colourful collection of storybooks','photo-1516979187457-637abb4f9353'),
  image('gallery-11','reading','Reading materials ready for a lesson','photo-1519682337058-a94d519337bc'),
  image('gallery-12','reading','A child enjoying a book','photo-1544717305-2782549b5136'),
  image('gallery-13','creative','Colourful art materials for creative work','photo-1513364776144-60967b0f800f'),
  image('gallery-14','creative','A hands-on painting activity','photo-1461908550717-2e6c7a0c2c16'),
  image('gallery-15','creative','Creative materials arranged on a table','photo-1452860606245-08befc0ff44b'),
  image('gallery-16','creative','A colourful classroom art project','photo-1494438639946-1ebd1d20bf85'),
  image('gallery-17','creative','Learning through drawing and colour','photo-1506794778202-cad84cf45f1d'),
  image('gallery-18','creative','A practical creative learning session','photo-1497864149936-d3163f0c0f4b'),
  image('gallery-19','play','Children enjoying outdoor play','photo-1472162072942-cd5147eb3902'),
  image('gallery-20','play','A playground ready for activity','photo-1564429238817-393bd4286b2d'),
  image('gallery-21','play','Outdoor movement and play','photo-1502086223501-7ea6ecd79368'),
  image('gallery-22','play','A child exploring outdoors','photo-1476231682828-37e571bc172f'),
  image('gallery-23','play','A bright outdoor play area','photo-1471286174890-9c112ffca5b4'),
  image('gallery-24','play','Active play in an open space','photo-1503919005314-30d93d07d823'),
  image('gallery-25','environment','A calm and welcoming school space','photo-1580582932707-520aed937b7b'),
  image('gallery-26','environment','A bright learning environment','photo-1560785496-3c9d27877182'),
  image('gallery-27','environment','A well-organised learning space','photo-1497366811353-6870744d04b2'),
  image('gallery-28','environment','A school building and outdoor surroundings','photo-1562774053-701939374585'),
  image('gallery-29','environment','A welcoming shared learning area','photo-1497366754035-f200968a6e72'),
  image('gallery-30','environment','A bright space for group learning','photo-1497366216548-37526070297c'),
];

export const galleryPendingNotice =
  'These illustrative royalty-free photographs are temporary and will be replaced with approved school photography.';
