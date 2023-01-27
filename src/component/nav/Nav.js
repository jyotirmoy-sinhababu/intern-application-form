import React from 'react';

import './nav.css';

const Nav = ({ data }) => {
  return (
    <div className='nav-cnt'>
      <p className='nav-heading'>{data?.setting?.title}</p>
    </div>
  );
};

export default Nav;
