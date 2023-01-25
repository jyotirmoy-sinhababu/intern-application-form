import React from 'react';

import InputField from '../input/InputField';

import { useState } from 'react';

const Display = ({ data }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{data ? data[count]?.question_text : null}</p>
      <InputField data={data} count={count} />
    </>
  );
};

export default Display;
