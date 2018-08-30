import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/bdkay" style={ { color: colorPrimary } }><i className="fab fa-github-alt"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/895668/brendon" style={ { color: colorPrimary } }><i className="fab fa-stack-overflow"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brendonkuleck" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/catrainbow" style={ { color: colorPrimary } }><i className="fab fa-twitter"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="http://instagram.com/bdkay" style={ { color: colorPrimary } }><i className="fab fa-instagram"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.last.fm/user/bdkay" style={ { color: colorPrimary } }><i className="fab fa-lastfm"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/profile/bdkay" style={ { color: colorPrimary } }><i className="fab fa-apple"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="#" style={ { color: colorPrimary } }><i className="fab fa-btc"></i></a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
