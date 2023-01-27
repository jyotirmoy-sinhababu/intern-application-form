import React from 'react';
import './display.css';

import InputField from '../input/InputField';

import { useState } from 'react';

const Display = ({ data }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    if (count != 0) setCount(count - 1);
  };

  return (
    <>
      <div className='dis-main-cnt'>
        <div className='dis-question-input-cnt'>
          <p className='dis-question'>
            {data ? data[count]?.question_text : null}
          </p>
          <InputField data={data} count={count} />
        </div>

        <div className='dis-btn-cnt'>
          <button className='dis-prev-btn' onClick={decrementCount}>
            prev
          </button>

          <button className='dis-nxt-btn' onClick={incrementCount}>
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default Display;
