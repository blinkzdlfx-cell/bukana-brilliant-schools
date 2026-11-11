import optimizedImageMap from '@/generated/optimized-image-map.js';

const imagePairs = [
  ["bukana-building.jpeg", "bukana-building.jpeg_05fd58fa.jpg", "School building"],
  ["bukana-classroom.jpg", "bukana-classroom.jpg_3ed75113.jpg", "Classroom"],
  ["bukana-classroon3.jpg", "bukana-classroon3.jpg_48b6cd67.jpg", "Classroom learning"],
  ["bukana-computer screen.jpg", "bukana-computer_screen.jpg_4e93285e.jpg", "Computer learning"],
  ["bukana-learning-evironment.jpg", "bukana-learning-evironment.jpg_7df2b20b.jpg", "Learning environment"],
  ["bukana-pavement.jpg", "bukana-pavement.jpg_97e390a0.jpg", "School grounds"],
  ["bukana-students-in-playground.jpeg", "bukana-students-in-playground.jpeg_6b0f65cf.jpg", "Outdoor play"],
  ["bukana-students1.jpeg", "bukana-students1.jpeg_ba4645dc.jpg", "Students"],
  ["bukana-students2.jpeg", "bukana-students2.jpeg_823d97f8.jpg", "Students"],
  ["bukana-students3.jpeg", "bukana-students3.jpeg_189e8f7e.jpg", "Students"],
  ["bukana-students4.jpeg", "bukana-students4.jpeg_ab7c1c1e.jpg", "Students"],
  ["bukana-students5.jpeg", "bukana-students5.jpeg_d455e394.jpg", "Students"],
  ["bukana-teachers with-student.jpeg", "bukana-teachers_with-student.jpeg_f35d20b6.jpg", "Teacher and student"],
  ["bukana-teachers-with-student.jpeg", "bukana-teachers-with-student.jpeg_978fbb34.jpg", "Teacher and student"],
  ["bukana-teachers-16x9.webp", "bukana-teachers-16x9.webp_0e556165.jpg", "Teachers"],
  ["bukana-teachers.jpeg", "bukana-teachers.jpeg_3c78e957.jpg", "Teachers"],
  ["insid-bukana-computer-1.jpg", "insid-bukana-computer-1.jpg_16bfef66.jpg", "Computer laboratory"],
  ["insid-bukana-computer-2.jpg", "insid-bukana-computer-2.jpg_e9e74e7a.jpg", "Computer laboratory"],
  ["insid-bukana-computer-3.jpg", "insid-bukana-computer-3.jpg_fcc5ccc6.jpg", "Computer laboratory"],
  ["insid-bukana-computer-lab.jpg", "insid-bukana-computer-lab.jpg_ef82f294.jpg", "Computer laboratory"],
  ["inside-bukana-brilliant-schools.jpg", "inside-bukana-brilliant-schools.jpg_4a418e80.jpg", "School interior"],
];

const imageAssets = import.meta.glob('../images/**/*.{jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });

export const schoolImages = imagePairs.map(([originalName, enhancedName, caption], index) => {
  const enhancedKey = 'enhanced-16x9-images/' + enhancedName;
  return {
    id: 'bbs-photo-' + (index + 1),
    original: imageAssets['../images/' + originalName],
    enhanced: imageAssets['../images/' + enhancedKey],
    optimized: {
      original: optimizedImageMap[originalName],
      enhanced: optimizedImageMap[enhancedKey],
    },
    alt: caption + ' at Bukana Brilliant Schools',
    caption,
  };
});

export const schoolImageAssets = optimizedImageMap;
