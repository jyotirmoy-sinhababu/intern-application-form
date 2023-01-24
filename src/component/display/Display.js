import React from 'react';

import { useState, useEffect } from 'react';

const Display = () => {
  useEffect(() => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
  }, []);

  return <div>Display</div>;
};

export default Display;
