import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';

const data = [
  {
    id: 1,
    name: 'Fast delivery with warehouse inventory for fabrication',
    image: image1,
  },
  {
    id: 2,
    name: 'Wide choice of products from industry-leading manufacturers',
    image: image2,
  },
  {
    id: 3,
    name: 'Expert advice, specification writing, design and compliance',
    image: image3,
  },
  {
    id: 4,
    name: 'Installation, maintenance and project services available',
    image: image4,
  },
] as const;

export default data;