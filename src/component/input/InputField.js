import React from 'react';

const InputField = ({ data, count }) => {
  console.log(count);
  if (data) {
    if (data[count]?.question_type == 4) {
      return (
        <>
          <form>
            <input type='text' className='input-field' />
          </form>
        </>
      );
      if (data[count]?.question_type == 1 || 2) {
        return (
          <>
            <form>
              {data[count]?.choices.map((item) => {
                return (
                  <>
                    <form key={item.id}>
                      <input type='checkbox' className='checkbox' />
                      <label htmlFor='option'>{item.choice_text}</label>
                    </form>
                  </>
                );
              })}
            </form>
          </>
        );
      }
      if (data[count]?.question_type == 5) {
        return (
          <>
            <form>
              <input type='file' className='file-input' />
            </form>
          </>
        );
      }
    }
  }
};

export default InputField;
