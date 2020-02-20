import sc from './assets/images/SoundCrowd-thumbnail.png';
import sc1 from './assets/images/SoundCrowd-gallery-1.png';
import sc2 from './assets/images/SoundCrowd-gallery-2.png';
import sc3 from './assets/images/SoundCrowd-gallery-3.png';

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
    blurb: `A clone of SoundCloud, developed as personal learning project.`,
    description: `I designed SoundCrowd to develop my ability to create full-stack, modern Rails web apps from scratch. 
          The core features of this app include cloud storage of image and audio files, the ability to upload and delete 
          new music, and the ability to play, browse, and share music with other users. The site uses asynchronous HTTP 
          requests to RESTful API routes to allow users to create and delete tracks and to update the site accordingly
          without having to refresh the page. To facilitate a satisfying song playback user experienced, I designed an 
          audio player component using React and the Redux cycle. The component persists and plays songs continuously 
          throughout site navigation, a feature enabled by the apps global Redux state.In addition to the logical RESTful 
          API routes, I designed custom frontend routes using React Router to display different pages. The discover page,
          user and song pages, upload page, and new music page all render custom UI components created with React.js.`,
    thumbnail: sc,
    gallery: [sc1, sc2, sc3],
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
    url: 'http://www.soundcrowd.net/',
    blurb: `A clone of SoundCloud, developed as personal learning project.`,
    description: `I designed SoundCrowd to develop my ability to create full-stack, modern Rails web apps from scratch. 
          The core features of this app include cloud storage of image and audio files, the ability to upload and delete 
          new music, and the ability to play, browse, and share music with other users. The site uses asynchronous HTTP 
          requests to RESTful API routes to allow users to create and delete tracks and to update the site accordingly
          without having to refresh the page. To facilitate a satisfying song playback user experienced, I designed an 
          audio player component using React and the Redux cycle. The component persists and plays songs continuously 
          throughout site navigation, a feature enabled by the apps global Redux state.In addition to the logical RESTful 
          API routes, I designed custom frontend routes using React Router to display different pages. The discover page,
          user and song pages, upload page, and new music page all render custom UI components created with React.js.`,
    thumbnail: sc,
    gallery: [sc1, sc2, sc3],
  },
  // MyPhotoJourney: {
  //   url: 'https://myphotojourney.herokuapp.com/#/',
  //   description: `This social/travel/photo sharing app was inspired by a D3 project that a team member made based
  //   on his European backpacking trip. We all felt that this would be a fun idea to expand into a social web app,
  //   so we formed a small team of App Academy students to expand the project into a application using React, Redux,
  //   JavaScript, and D3 on the frontend, and MongoDB, Node.js, and Express.js on the backend.

  //   As a member of a four-engineer team, I wrote custom API routes, data validations, and frontend components to
  //   dynamically and robustly handle user inputs. Our app allows users to upload vacation photos, and then places
  //   them on a map based on the user-described location. As such, I needed to use a geocoder to make API calls for
  //   location informatino and then dynamically render that information back to the user. I designed location searches
  //   specific enough to avoid ambiguous or conflicting locations, but general enough to handle mild input errors, typos,
  //   or inexact location names. I wrote informative errors and frontend components that update the user about the location
  //   of each photo, whether the backend has found the location, and other information dynamically as the user types.`,
  // },
};
