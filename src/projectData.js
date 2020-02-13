import sc from './assets/SoundCrowd-thumbnail.png';
import sc1 from './assets/SoundCrowd-gallery-1.png';
import sc2 from './assets/SoundCrowd-gallery-2.png';
import sc3 from './assets/SoundCrowd-gallery-3.png';

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
    ],
    url: 'http://www.soundcrowd.net/',
    blurb: `A full-stack clone of SoundCloud, developed as a learning project while studying at App Academy.`,
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
};
