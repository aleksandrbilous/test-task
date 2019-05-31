import React, { Component } from 'react';
import computationalFunction from 'Tasks/Task4';
import ResultForm from '../ResultForm';

import './View.css';

const initialState = {
  values: '',
  result: '',
  debt: '',
  error: '',
};

class View extends Component {
  state = initialState;

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleStart = (e) => {
    e.preventDefault();
    const value = computationalFunction(this.state.values.split(' '));

    this.validateResult(value);
  }

  handleRestart = (e) => {
    e.preventDefault();
    this.setState(initialState);
  }

  validateResult = (value) => {
    if (value instanceof Error) {
      this.setState({ error: value });
      return;
    }

    const [ debt, result ] = value;

    this.setState({
      result: result.join(' '),
      debt: debt,
      error: '',
    });
  }

  render() {
    const { values, result, debt, error } = this.state;

    return (
      <section className='component'>
        <label className='label label-fourth-task'>
          Введите последовательность из десяти цельх чисел через пробел
          в диапазоне от 1 до 10 включая границы
          <input
            type='text'
            name='values'
            value={values}
            onChange={this.handleInput}
          />
        </label>
        <div className='button-container'>
          <button className='button' onClick={this.handleStart}>
            Рассчитать
          </button>
          <button className='button' onClick={this.handleRestart}>
            Очистить
          </button>
        </div>
        <label className='label label-fourth-task'>
          Выходные данные:
        </label>
        <ResultForm result={result} debt={debt} error={error} />
      </section>
    );
  }
}

export default View;
