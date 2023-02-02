import React from 'react';
import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';

const data = [
  {
    title: 'Hollow Metal Doors and Frames',
    image: photo1,
    text: 'Knock Down and Welded Frames, Glass Inserts and Sidelites, Transoms',
  },
  {
    title: 'Hollow Metal Doors and Frames',
    image: photo2,
    text: 'Wood Doors and Custom Orders Standard and Custom Veneers, Architectural Flush, Stile and Rail, Molded Panel',
  },
  {
    title: <>Wood Doors and&nbsp;Custom Orders</>,
    image: photo3,
    text: 'Locks and Locksets, Exit Devices, Door Closers, Kick Plates, Hinges, Thresholds and Weatherstrip, Trim and Auxiliary, Key Cabinets, Cylinders and Key Blank',
  },
] as const;

export default data;
