import React, { Component } from 'react';
import computationalFunction from 'Tasks/Task3';
import ResultForm from 'components/ResultForm';

import './View.css';

const initialState = {
  yourChance: '',
  opponentChance: '',
  goFirst: '1',
  step: '',
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
    const { yourChance, opponentChance, goFirst } = this.state;

    this.setState({
      step: computationalFunction(yourChance, opponentChance, goFirst)
    });
  }

  handleRestart = (e) => {
    e.preventDefault();
    this.setState(initialState);
  }

  render() {
    const { yourChance, opponentChance, goFirst, step } = this.state;

    return (
      <section className='component'>
        <label className='label label-third-task'>
          Введите вашу начальную вероятность попадания
          <input
            type='text'
            name='yourChance'
            value={yourChance}
            onChange={this.handleInput}
          />
        </label>
        <label className='label label-third-task'>
          Вероятность попадания противника
          <input
            type='text'
            name='opponentChance'
            value={opponentChance}
            onChange={this.handleInput}
            />
        </label>
        <label className='label label-third-task'>
          Кто должен ходить первым (1 - вы, 2 - противник)
          <input
            type='text'
            name='goFirst'
            value={goFirst}
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
        <label className='label label-third-task'>
          Выходные данные:
        </label>
        <ResultForm data={step} />
      </section>
    );
  }
}

export default View;
