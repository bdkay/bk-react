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
              Like many, my humble beginnings lie in the world of NotePad coding (WordPad introduced hidden characters!) and Geocities, Angelfire and Tripod in the mid-90s but have expanded into the modern landscape of robustly-featured internet applications.
            </p>
            <p>
              My current favorite language is <span className="highlight">JavaScript</span> and I love everything having to do with the open web.
            </p>
            <p>
              HTML5, CSS3, JavaScript (ES6, ECMA2015), JS frameworks (<span className="highlight">React</span>, Redux, Node, Angular, Ember), npm, <span className="highlight">MongoDB</span>, RESTful APIs, babel, jslint, webpack, version control (Git/SVN), AWS are just a few of the tools in my current toolbox.
            </p>
            <p>
              I also enjoy the CLI and digging deeper into its powers. Classically trained in OOP, however I'm getting more and more interested in functional programming as of late and thinking with more of a test-driven development mindset.
            </p>
            <p>
              Professionally, I've developed applications such as the <span className="highlight">NiKEiD Creator</span> as a consultant at R/GA, <span className="highlight">Groupon's web and email platforms</span>, the US Dept of Education with Accenture, as well as promotional and interactive websites/apps for Fortune 500 companies like HP, Motorola, Burger King, GE, GM, Walgreen's, Johnnie Walker, Land Rover, United and AARP while at DesignKitchen.
            </p>
            <p>
              In addition this plethroa of overwhelmingly diverse subjects, I also enjoy reading, listening to music, collecting sneakers, fishing, hiking, camping, playing hockey, <span className="highlight">taking pictures of my cat</span> and watching orange and brown ball sports.
            </p>
            <p>
              Not to mention <a href="https://twitter.com/JalenRose/status/277310949604601856" target="_blank">Jalen Rose once replied to me on Twitter</a>.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
          <div className="about-content" style={{ color: textPrimary }}>
            <img src="http://brendonkuleck.com/images/brendon_profile.png" />
          </div>
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
