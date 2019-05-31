import React, { Component } from 'react';
import computationalFunction from 'Tasks/Task1';
import ResultForm from 'components/ResultForm';

const initialState = {
  temperature: '',
  convertedTemperature: '',
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
      convertedTemperature: computationalFunction(this.state.temperature)
    });
  }

  handleRestart = (e) => {
    e.preventDefault();
    this.setState(initialState);
  }

  render() {
    const { temperature, convertedTemperature } = this.state;

    return (
      <section className='component'>
        <label className='label'>
          Введите температуру
          <input
            type='text'
            name='temperature'
            className='input'
            value={temperature}
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
        <ResultForm data={convertedTemperature} />
      </section>
    );
  }
}

export default View;
