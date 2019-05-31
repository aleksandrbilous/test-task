import ToHSolver from './TowerOfHanoiAlgorithm';

export default (value) => {
  const plates = Number(value);

  if (isNaN(plates) || plates < 3 || plates > 8) {
    return Error('Некорректное значение. Введите целое число в диапазоне от 3 до 8 включая их');
  }

  const result = new ToHSolver(plates).solve().giveResult();

  return result;
};
