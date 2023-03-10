import React from 'react';
import './input.css';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

const InputField = ({ data, count }) => {
  const [inputData, setInputData] = useState('');
  const [isEnable, setIsEnable] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('inputData', JSON.stringify(inputData));
    navigate('/msg');
  };

  useEffect(() => {
    const enableBtn = () => {
      if ((count = 9)) {
        setIsEnable(true);
      }
    };
  }, [count]);

  console.log(inputData);
  if (data) {
    return (
      <form
        className='input-form'
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
        ) : data[count].question_type == 1 ? (
          <div>
            {data[count].choices.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    type='radio'
                    required
                    name={item.name}
                    className='input-radio'
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label>{item.choice_text}</label>
                </div>
              );
            })}
          </div>
        ) : data[count].question_type == 2 ? (
          <select>
            {data[count].choices.map((item) => {
              return (
                <optgroup key={item.id}>
                  <option
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    {item.choice_text}
                  </option>
                </optgroup>
              );
            })}
          </select>
        ) : data[count].question_type == 3 ? (
          <div>
            {data[count].choices.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    type='checkbox'
                    name={item.choice_text}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label>{item.choice_text}</label>
                </div>
              );
            })}
          </div>
        ) : data[count].question_type == 5 ? (
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

        <div className='save-btn-cnt '>
          <button disabled={isEnable} className='save-btn' type='submit'>
            Save
          </button>
        </div>
      </form>
    );
  }
};

export default InputField;
