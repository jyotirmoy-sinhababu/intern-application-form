import React from 'react';

const Nav = ({ data }) => {
  return (
    <div>
      <p>{data?.setting?.title}</p>
    </div>
  );
};

export default Nav;
