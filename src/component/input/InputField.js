import React from 'react';

import { useState } from 'react';

const InputField = ({ data, count }) => {
  const [inputData, setInputData] = useState('');

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (data) {
    return (
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {data[count].question_type == 4 ? (
          <input
            type='text'
            name={data[count].question_type}
            className='input-field'
          />
        ) : data[count].question_type == 1 ||
          data[count].question_type == 2 ||
          data[count].question_type == 3 ? (
          <div>
            {data[count].choices.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    type='checkbox'
                    name={item.choice_text}
                    className='input-checkbox'
                  />
                  <label>{item.choice_text}</label>
                </div>
              );
            })}
          </div>
        ) : (data[count].question_type = 5) ? (
          <input type='file' name={data[count].question_type} />
        ) : (
          <p>Loading...</p>
        )}
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    );
  }
};

export default InputField;
