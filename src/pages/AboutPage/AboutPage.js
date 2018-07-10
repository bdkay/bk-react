import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Like many, my humble beginnings lie in the worlds Geocities, Angelfire and Tripod, coding for fun by hand in NotePad (WordPad introduced hidden characters!) and in the mid-90s but have grown and expanded into the modern landscape of robustly-featured internet applications as the web has developed.
            </p>
            <p>
              My current favorite language is <span className="highlight">JavaScript</span> and I love everything having to do with the open web.
            </p>
            <img src="http://brendonkuleck.com/images/brendon_profile.png" className="profile-img" style={{ display: "inline" }}/>
            <p>
              HTML5, CSS3, JavaScript (ES6 // ECMA2015), JS frameworks (<span className="highlight">React</span> (with or without Redux), Node, Angular, Ember), npm, <span className="highlight">MongoDB</span>, RESTful APIs, babel, jslint, webpack, version control (Git/SVN), AWS are just a few of the tools in my current toolbox.
            </p>
            <p>
              When it comes to programming paradigms, I'm educated in classical OOP but have been more and more interested in functional programming: first-class functions, higher order functions, functions as arguments/value.
            </p>
            <p>
              Excellent article about thinking in a functional programming way: <a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd" className="about-link" rel="noreferrer noopener" target="_blank">The Dao of Immutability</a>
            </p>
            <p>
              Professionally, I've developed applications such as the <span className="highlight">NiKEiD Creator</span> as a consultant at R/GA, <span className="highlight">Groupon's web and email platforms as well as internal tools</span>, the US Dept of Education with Accenture and promotional and interactive websites/apps for Fortune 500 companies like HP, Motorola, Burger King, GE, GM, Walgreen's, Johnnie Walker, Land Rover, United and AARP while at DesignKitchen.
            </p>
            <p>
              In addition this plethroa of overwhelmingly diverse subjects, I also enjoy reading, listening to music, collecting sneakers, fishing, hiking, camping, playing hockey and basketball, <span className="highlight">taking pictures of my cat</span> and watching orange and brown ball sports. I also love 90s action movies (especially Van Damme and Seagal) and anything having to do with time travel or personally incomprehensible scientific subjects.
            </p>
            <p>
              Not to mention <a href="https://twitter.com/JalenRose/status/277310949604601856" className="about-link" rel="noreferrer noopener" target="_blank">Jalen Rose once replied to me on Twitter</a>.
            </p>
          </div>
          <div className="about-content" style={{ color: textPrimary }}>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
          <br /><br />
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
