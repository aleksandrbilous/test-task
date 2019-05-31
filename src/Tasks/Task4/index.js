import ImplementationGA from './GeneticAlgorithm';

export default (values) => {
  if (values.length !== 10) return Error('Некорректное значение');

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const params = values.filter(value => arr.includes(Number(value)));

  if (params.length !== 10) {
    return Error('Вводимые значения должны быть целыми числами от 1 до 10 включительно, записанные через пробел');
  }

  const fitFunctionParams = params.map(par => Number(par));
  const sum = fitFunctionParams.reduce((acc, index) => acc + index);

  if (sum <= 55) return Error('Сумма параметров должна быть больше 55');

  const GeneticAlgorithm = new ImplementationGA(fitFunctionParams).init();
  const check = () => GeneticAlgorithm.populations.length < 10000;

  do {
    GeneticAlgorithm
      .mutation()
      .selection()
      .creatingNewPopulation();
  } while(check())

  const result = GeneticAlgorithm.giveBestResult();

  return result;
};
