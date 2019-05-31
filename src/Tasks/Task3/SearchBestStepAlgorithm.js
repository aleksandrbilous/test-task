class BestStep {
  constructor(firstChance, secondChance, first) {
    this.firstChance = firstChance;
    this.secondChance = secondChance;
    this.incValue = 0.06;
    this.first = first;
    this.result = '';
    this.chances = this.createMatrix();
    this.steps = this.createMatrix();
  }

  createMatrix() {
    const firstArr = new Array(11).fill(0, 0);
    const secondArr = new Array(11).fill(0, 0);

    return [firstArr, secondArr];
  }

  search() {
    let { firstChance, secondChance, incValue, first, chances, steps } = this;

    let x;

    if (first === 1) x = [firstChance, secondChance];
    if (first === 2) x = [secondChance, firstChance];

    chances[0][10] = 1;
    chances[1][10] = 0;
    steps[0][10] = 10;

    for (let i = 9; i >= 0; i--) {

      let first = x[0] + incValue * i;
      let second = x[1] + incValue * i;

      if (second > 1 - chances[0][i + 1]) {
        chances[1][i] = second;
        chances[0][i] = 1 - second;
        steps[1][i] = i;
        steps[0][i] = 10;
      } else {
        chances[1][i] = chances[1][i + 1];
        chances[0][i] = chances[0][i + 1];
        steps[1][i] = steps[1][i + 1];
        steps[0][i] = steps[0][i + 1];
      }

      if (first > 1 - chances[1][i]) {
        chances[1][i] = 1 - first;
        chances[0][i] = first;
        steps[1][i] = 10;
        steps[0][i] = i;
      }
    }

    if (first === 1) this.result = steps[0][0];
    if (first === 2) this.result = steps[1][0];
  
    return this;
  }

  giveResult() {
    return this.result;
  }
}

export default BestStep;
