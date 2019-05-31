import React from 'react';

const ResultForm = ({ result, debt, error }) => {
  if (error) {
    return (
      <div className='Error'>{error.message}</div>
    );
  }

  return (
    <div className='Result'>
      <div>{`Порядок достоинств монет: ${result}`}</div>
      <div>{`Долг: ${debt}`}</div>
    </div>
  );
};

export default ResultForm;
