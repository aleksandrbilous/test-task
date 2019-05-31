import React from 'react';

const ResultForm = ({ data }) => {
  if (data instanceof Error) {
    return (
      <div className='result-label Error'>{data.message}</div>
    );
  }

  if (data instanceof Array) {
    return (
      data.map((value, i) => (
        <div className='result-label Result' key={i}>{value}</div>
      ))
    );
  }

  return (
    <div className='result-label Result'>{data}</div>
  );
};

export default ResultForm;
