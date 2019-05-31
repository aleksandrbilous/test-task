import bestStep from './SearchBestStepAlgorithm';

export default (firstChance, secondChance, stepValue) => {
  const firstVal = Number(firstChance);
  const secondVal = Number(secondChance);
  const first = Number(stepValue);

  if (isNaN(firstVal) || isNaN(secondVal) || isNaN(first)) {
    return Error('В поля можно вводить только числа');
  }

  if (firstVal < 0.1 || firstVal > 0.3 || secondVal < 0.1 || secondVal > 0.3) {
    return Error('Вероятности попаданий должны находится в диапазоне от 0.1 до 0.3, включая границы');
  }

  if (firstVal === secondVal) {
    return Error('Вероятности попаданий не должны быть равны');
  }

  if (!(first === 1 || first === 2)) {
    return Error('Номер того, кто ходит первый должен быть 1 или 2');
  }

  const result = new bestStep(firstVal, secondVal, first).search().giveResult();

  return result;
};
