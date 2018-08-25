import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        <div className="text-emoji" style={{ color: colorPrimary }}>/ᐠ. ᴗ.ᐟ\ﾉ</div><br />
        <div style={{ color: textPrimary }}><a href="https://github.com/bdkay" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>https://github.com/bdkay</a></div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;
