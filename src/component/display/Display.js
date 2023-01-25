import React from 'react';

import InputField from '../input/InputField';

import { useState } from 'react';

const Display = ({ data }) => {
  const [count, setCount] = useState(0);
  const [inputData, setInputData] = useState({});

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    if (count != 0) setCount(count - 1);
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  console.log(inputData);

  return (
    <>
      <p>{data ? data[count]?.question_text : null}</p>
      <InputField data={data} count={count} handleChange={handleChange} />
      <div>
        <button onClick={decrementCount}>prev</button>
        {count > 9 ? (
          <button>Save</button>
        ) : (
          <button onClick={incrementCount}>next</button>
        )}
      </div>
    </>
  );
};

export default Display;
