import React from 'react';

import { useState, useEffect } from 'react';

import Display from '../../component/display/Display';
import Nav from '../../component/nav/Nav';

const Home = () => {
  const [data, setData] = useState([]);

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
        setData(myJson);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data?.setting?.title);
  return (
    <>
      {data && <Nav data={data} />}
      <Display />
    </>
  );
};

export default Home;
