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
export default {
  SoundCrowd: {
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
    url: 'http://www.soundcrowd.net/',
    blurb: `Full-stack clone of SoundCloud, developed as learning project`,
    description: [
      `I built SoundCrowd to learn about designing a full-stack, modern Rails web app from scratch. 
          The core features include cloud storage of image and audio files, the ability to upload and delete 
          new music, and the ability to play, browse, and share music with other users. The site uses asynchronous 
          requests to my RESTful API to render updated data without refreshing the page.`,
      `To create a satisfying user experienced, I designed an 
          audio player component using React and the Redux cycle. The component persists and plays songs continuously 
          during site navigation, a feature enabled by the app's global Redux state.`,
      `In addition to the backend 
          API routes, I implemented frontned routing using React Router to display different pages. The discover page,
          user and song pages, upload page, and new music page all render custom UI components built with React.js.`,
    ],
    thumbnail: sc,
    gallery: [sc, sc1, sc2, sc3],
  },
  MyPhotoJourney: {
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
    blurb: `Social, travel-focused, photo sharing app built on the MERN stack`,
    description: [
      `MyPhotoJourney was built by a four-person team of App Academy students in just a few weeks to practice using the MERN stack.`,
      `The main feature is the ability to upload a collection of vacation photos to create a shareable "journey", 
        an interactive visualization of your vacation on a world map.`,
      `My personal contributions include writing API endpoints, data validation functions, and frontend components that respond dynamically 
      to user input. I used an open API to get location geodata for rendering photos the map, and designed the location search to find a 
      user photo's location quickly and efficiently.`,
    ],
    thumbnail: pj,
    gallery: [pj, pj1, pj2, pj3],
  },
  SympleSynth: {
    techList: [
      'HTML',
      'CSS',
      'JavaScript',
      'OOP Principles',
      'WebPack',
      'WebAudio',
      'HTML5 Canvas',
    ],
    url: 'https://symplesynth.net/',
    blurb: `JavaScript synthesizer built from scratch using Web Audio`,
    description: [
      `I designed SympleSynth to explore my interest in audio synthesis and to practice developing for the Web without a frontend framework. The instrument manages its own state and coordinates complex sound modulations using the JavaScript event loop.`,
      `I took advantage of OOP principles to make my code more modular and re-usable. Each component of the synthesizer is contained in its own object, with public methods exposed to allow users to control the sound. The different of oscillators, filters, and effects make it possible to create millions of different sounds!`,
    ],
    thumbnail: s1,
    gallery: [s, s1, s2],
  },
  'Riva Negotiations': {
    techList: [
      'HTML',
      'CSS',
      'JavaScript',
      'OOP Principles',
      'WebPack',
      'WebAudio',
      'HTML5 Canvas',
    ],
    url: 'https://symplesynth.net/',
    blurb: `JavaScript synthesizer built from scratch using Web Audio`,
    description: [
      `I designed SympleSynth to explore my interest in audio synthesis and to practice developing for the Web without a frontend framework. The instrument manages its own state and coordinates complex sound modulations using the JavaScript event loop.`,
      `I took advantage of OOP principles to make my code more modular and re-usable. Each component of the synthesizer is contained in its own object, with public methods exposed to allow users to control the sound. The different of oscillators, filters, and effects make it possible to create millions of different sounds!`,
    ],
    thumbnail: s1,
    gallery: [s, s1, s2],
  },
};
