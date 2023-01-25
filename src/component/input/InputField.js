import React from 'react';

const InputField = ({ data, count, handleChange }) => {
  if (data) {
    if (data[count]?.question_type == 4) {
      return (
        <>
          <form>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              type='text'
              className='input-field'
              name={data[count].question_text}
            />
          </form>
        </>
      );
    } else if (
      data[count]?.question_type == 1 ||
      data[count]?.question_type == 2 ||
      data[count]?.question_type == 2
    ) {
      return (
        <>
          {data[count]?.choices?.map((item) => {
            return (
              <>
                <form key={item.id}>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type='checkbox'
                    className='checkbox'
                    name={item.choice_text}
                  />
                  <label htmlFor={item.choice_text}>{item.choice_text}</label>
                </form>
              </>
            );
          })}
        </>
      );
    } else if (data[count]?.question_type == 5) {
      return (
        <>
          <form>
            <label for='myfile'>Select a file:</label>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              type='file'
              className='file-input'
              name={data.choice_text}
            />
          </form>
        </>
      );
    }
  }
};

export default InputField;
