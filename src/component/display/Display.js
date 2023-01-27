import React from 'react';
import './display.css';

import InputField from '../input/InputField';

import { useState } from 'react';

const Display = ({ data }) => {
  const [count, setCount] = useState(0);
  const [isEnable, setIsEnable] = useState(false);

  const incrementCount = () => {
    if (count < 9) {
      setCount((prev) => prev + 1);
    }
    if ((count = 9)) {
      setIsEnable(true);
    }
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
          <InputField data={data} count={count} isEnable={isEnable} />
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
