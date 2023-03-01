import photo1 from './assets/photo1.jpg';
import photo2 from './assets/photo2.jpg';
import photo3 from './assets/photo3.jpg';
import photo4 from './assets/photo4.jpg';

const data = [
  {
    id: 1,
    title: 'Surrey Pretrial Service Centre',
    image: photo1,
  },
  {
    id: 2,
    title: 'Surrey Pretrial Service Centre 2',
    image: photo2,
  },
  {
    id: 3,
    title: 'Surrey Pretrial Service Centre 3',
    image: photo3,
  },
  {
    id: 4,
    title: 'Surrey Pretrial Service Centre 4',
    image: photo4,
  },
] as const;

export default data;