import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: colorPrimary }}><a href="https://github.com/bdkay" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>https://github.com/bdkay</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  /ᐠ. ᴗ.ᐟ\ﾉ</div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;
