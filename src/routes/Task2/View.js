import React, { Component } from 'react';
import computationalFunction from 'Tasks/Task2';
import ResultForm from 'components/ResultForm';

const initialState = {
  platesNumber: '',
  strategy: '',
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
    this.setState({
      strategy: computationalFunction(this.state.platesNumber)
    });
  }

  handleRestart = (e) => {
    e.preventDefault();
    this.setState(initialState);
  }

  render() {
    const { platesNumber, strategy } = this.state;

    return (
      <section className='component'>
        <label className='label'>
          Введите количество плит
          <input
            type='text'
            name='platesNumber'
            value={platesNumber}
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
        <label className='label'>
          Выходные данные:
        </label>
        <ResultForm data={strategy} />
      </section>
    );
  }
}

export default View;
