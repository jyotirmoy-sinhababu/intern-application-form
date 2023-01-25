import React from 'react';

import InputField from '../input/InputField';

import { useState } from 'react';

const Display = ({ data }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count >= 0) setCount(count + 1);
  };

  const decrementCount = () => {
    if (count != 0) setCount(count - 1);
  };

  return (
    <>
      <p>{data ? data[count]?.question_text : null}</p>
      <InputField data={data} count={count} />
      <div>
        <button onClick={decrementCount}>prev</button>
        <button onClick={incrementCount}>next</button>
      </div>
    </>
  );
};

export default Display;
