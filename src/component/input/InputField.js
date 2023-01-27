import React from 'react';

import { useState } from 'react';

const InputField = ({ data, count }) => {
  const [inputData, setInputData] = useState('');

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('inputData', JSON.stringify(inputData));
  };

  console.log(inputData);
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
            name={data[count].question_text}
            required
            className='input-field'
            onChange={(e) => {
              handleChange(e);
            }}
          />
        ) : data[count].question_type == 1 ||
          data[count].question_type == 2 ||
          data[count].question_type == 3 ? (
          <div>
            {data[count].choices.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    type='radio'
                    required
                    name={item.choice_text}
                    className='input-checkbox'
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label>{item.choice_text}</label>
                </div>
              );
            })}
          </div>
        ) : (data[count].question_type = 5) ? (
          <input
            type='file'
            required
            name={data[count].question_type}
            onChange={(e) => {
              handleChange(e);
            }}
          />
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
