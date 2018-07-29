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
              Like many, my humble beginnings lie in the worlds of Geocities, Angelfire and Tripod, coding for fun by hand in NotePad (WordPad introduced hidden characters!) and the mid-90s but have since grown and expanded into the modern landscape of robustly-featured internet applications, as the web did.
            </p>
            <p>
              My current favorite language is <span className="highlight">JavaScript</span> and I love everything having to do with open source.
            </p>
            <img src="http://brendonkuleck.com/images/brendon_profile.png" className="profile-img" style={{ display: "inline" }}/>
            <p>
              HTML5, CSS3, JavaScript (ES6 // ECMA2015), JS frameworks (<span className="highlight">React</span> (with or without Redux), Node, Angular), npm, yarn, meteor, MongoDB, REST, babel, jslint, webpack, AWS are just a few of the tools in my current toolbox.
            </p>
            <p>
              Professionally, I've developed applications such as the <span className="highlight">NiKEiD Creator</span> as a consultant at <span className="highlight">R/GA</span>, <span className="highlight">Groupon</span>'s web, email and internal tool platforms, the redesigned <span className="highlight">US Dept of Education FAFSA Portal</span> with Accenture and promotional and interactive websites/apps for Fortune 500 companies like HP, Motorola, Burger King, GE, GM, Walgreen's, Johnnie Walker, Land Rover, United and AARP while at <span className="highlight">DesignKitchen</span>.
            </p>
            <p>
              In addition this plethroa of overwhelmingly diverse subjects, I also enjoy reading, listening to music, collecting sneakers, comedy, fishing, hiking, camping, playing hockey and <span className="highlight">basketball</span>, taking pictures of my cat <a href="http://instagram.com/bdkay" className="about-link" rel="noreferrer noopener" target="_blank">Simon</a> and watching orange and brown ball sports. I also love Seinfeld, 90s action movies (especially Van Damme and Seagal) and anything having to do with time travel or personally incomprehensible scientific subjects.
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
