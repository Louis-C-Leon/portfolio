import sc from './assets/images/SoundCrowd-gallery-1.png';
import sc1 from './assets/images/SoundCrowd-gallery-2.png';
import sc2 from './assets/images/SoundCrowd-gallery-3.png';
import sc3 from './assets/images/SoundCrowd-gallery-4.png';

import pj from './assets/images/MyPhotoJourney-gallery-1.png';
import pj1 from './assets/images/MyPhotoJourney-gallery-2.png';
import pj2 from './assets/images/MyPhotoJourney-gallery-3.png';
import pj3 from './assets/images/MyPhotoJourney-gallery-4.png';

import s from './assets/images/SympleSynth-gallery-1.png';
import s1 from './assets/images/SympleSynth-gallery-2.png';
import s2 from './assets/images/SympleSynth-gallery-3.png';

import rt from './assets/images/Riva-thumbnail.png';
import r from './assets/images/Riva-gallery-1.png';
import r1 from './assets/images/Riva-gallery-2.png';
import r2 from './assets/images/Riva-gallery-3.png';
import r3 from './assets/images/Riva-gallery-4.png';

export default {
  'Riva Negotiations': {
    date: 'In Active Development',
    techList: [
      'Node.js',
      'React.js',
      'AWS Lambda',
      'DynamoDB',
      'AWS AppSync',
      'Serverless.js',
      'HTML5 Canvas',
    ],
    url: 'https://app.rivahq.com/',
    blurb: `Customer portal for Riva's job negotiation service`,
    description: [
      `For my first professional project, I worked in a small team of developers to build <strong>Riva's</strong> customer-facing web app.
      Riva's negotiation service empowers our customers to earn their worth by putting them in contact with an expert coach
      and streamlining the negotiating process. I worked to enable our customers and coaching team by implementing 
      features including secure live chat, flexible payment plans, and integration with external CRM services.`,
    ],
    thumbnail: rt,
    gallery: [r, r3, r1, r2],
  },
  SympleSynth: {
    date: 'May 2019',
    techList: [
      'HTML',
      'CSS',
      'JavaScript',
      'OOP Design',
      'WebPack',
      'WebAudio',
      'HTML5 Canvas',
    ],
    url: 'https://louis-c-leon.github.io/SympleSynth/',
    github: 'https://github.com/Louis-C-Leon/SympleSynth',
    blurb: `JavaScript synthesizer built from scratch using Web Audio`,
    description: [
      `I designed <strong>SympleSynth</strong> to explore my interest in audio synthesis and to practice developing for the Web with no frontend frameworks. The instrument manages its own state and coordinates complex sound modulations using the JavaScript event loop.
      I took advantage of OOP principles to make my code more modular and re-usable. Each component of the synthesizer is contained in its own object, with public methods exposed to allow users to control the sound. The different oscillators, filters, and effects make it possible to create millions of different sounds!`,
    ],
    thumbnail: s1,
    gallery: [s, s1, s2],
  },
  MyPhotoJourney: {
    date: 'April 2019',
    techList: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'AWS S3',
      'HTML',
      'SCSS',
      'React.js (with Redux)',
      'Heroku',
    ],
    url: 'https://myphotojourney.herokuapp.com/#/profile',
    github: 'https://github.com/MasonChinkin/MyPhotoJourney',
    blurb: `Social, travel-focused, photo sharing app built on the MERN stack`,
    description: [
      `<strong>MyPhotoJourney</strong> was built by a small team of App Academy students in just a few weeks to practice using the MERN stack. The main feature is the ability to upload a collection of vacation photos to create a shareable "journey", 
        an interactive visualization of your vacation on a world map.`,
      `My personal contributions include writing API endpoints, data validation functions, and frontend components that respond dynamically 
      to user input. I used an open API to get location geodata for rendering photos the map, and designed the location search to find a 
      user photo's location quickly and efficiently.`,
    ],
    thumbnail: pj,
    gallery: [pj, pj1, pj2, pj3],
  },
  SoundCrowd: {
    date: 'March 2019',
    techList: [
      'Ruby on Rails',
      'ActiveStorage',
      'AWS S3',
      'HTML',
      'SCSS',
      'React.js (with Redux)',
      'PostgreSQL',
      'Heroku',
    ],
    github: 'https://github.com/Louis-C-Leon/Soundcloud-FSP',
    blurb: `Full-stack clone of SoundCloud, developed as learning project`,
    description: [
      `<div class="warn">Due to deprecated dependencies and lack of free time to maintain this project, I've taken the full site offline, but feel free to take a look around the public repo!</div>`,
      `I built <strong>SoundCrowd</strong> to learn about designing a full-stack, modern Rails web app from scratch. 
          The core features include cloud storage of image and audio files, the ability to upload and delete 
          music, and the ability to play, browse, and share music with other users. It was a single-page app that used AJAX requests to display updated data without reloading.`,
      `To create a satisfying user experienced, I designed an 
          audio player component using React and the Redux cycle, which persists and plays songs continuously 
          during site navigation. In addition to the backend 
          API routes, I implemented frontend routing using React Router to display different pages and custom UI components.`,
    ],
    thumbnail: sc,
    gallery: [sc, sc1, sc2, sc3],
  },
};
