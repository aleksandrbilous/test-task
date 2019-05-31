import Converter from './Converter';

export default (temperature) => {
  const lastChar = temperature[temperature.length - 1];
  const numberValue = Number(temperature.slice(0, -1));

  if (temperature[0] === '0') return Error('Значение не должно начинаться с нуля');

  if (isNaN(numberValue)) return Error('Некорректное значение');

  if (lastChar !== 'K' && lastChar !== 'k' &&
      lastChar !== 'F' && lastChar !== 'f' &&
      lastChar !== 'C' && lastChar !== 'c') {
      return Error('Некорректное значение. В конце значения должно находится "F" или "C", или "K", в любом регистре');
     }

  const key = lastChar.toUpperCase();

  const result = new Converter(numberValue, key).convert();

  return result;
};
