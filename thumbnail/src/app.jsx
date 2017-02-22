var React = require('react');
var ThumbnailList = require('./thumbnailList');

var options = {
    thumbnailData:  [{
      title: 'Show Courses',
      number: 12,
      header: 'Learn React',
      description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
      imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png',
    },{
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png',
    },{
      title: 'Show Javascript',
      number: 200,
      header: 'Learn JS',
      description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
      imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png',
    }
    ],
    headerData: {
      nav: ['Main', 'Contacts', 'Home'],
      logo: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png',      
    },
    footerData: [{
      title: 'facebook',
      url: 'https://www.facebook.com/lidiyka?ref=bookmarks',
    },{
      title: 'GitHub',
      url: 'https://github.com/lidiyastepanenko',
    }],
  };
  var element = React.createElement(ThumbnailList, options);
  React.render(element, document.querySelector('.container'));

