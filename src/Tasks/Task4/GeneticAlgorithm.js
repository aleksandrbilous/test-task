class ImplementationGA {
  constructor(fitnessFunctionParams) {
    this.fitnessFunctionParams = fitnessFunctionParams;
    this.populations = [];
    this.valueOfCopies = [7, 6, 5, 4, 3, 2, 1];
    this.bestResults = [];
  }

  init() {
    this.creatingNewPopulation();

    const rankList = this.createRankList();
    this.bestResults.push(rankList[0]);

    return this;
  }

  creatingNewPopulation() {
    const population = [];

    while(population.length !== 50) {
      const chromosome = [];

      while(chromosome.length !== 10) {
        const gen = Math.ceil(Math.random() * 10);

        if (!chromosome.includes(gen)) chromosome.push(gen);
      }

      population.push(chromosome);
    }

    this.populations.push(population);

    return this;
  }

  mutation() {
    const { populations } = this;
    const population = populations[populations.length - 1];

    for (let i = 0; i <= population.length - 1; i++) {
      const count = Math.round(Math.random()) + 1;
      const chromosome = population[i];

      for (let j = 1; j <= count; j++) {
        const firstIndex = Math.ceil(Math.random() * 10) - 1;
        const secondIndex = Math.ceil(Math.random() * 10) - 1;

        const firstValue = chromosome[firstIndex];
        const secondValue = chromosome[secondIndex];

        chromosome[firstIndex] = secondValue;
        chromosome[secondIndex] = firstValue;
      }
    }

    return this;
  }

  selection() {
    const { populations, bestResults, valueOfCopies } = this;
    const rankList = this.createRankList();
    const newPopulation = [];

    bestResults.push(rankList[0]);

    for (let i = 0; i <= valueOfCopies.length - 1; i++) {
      newPopulation.push(...this.createCopies(rankList[i][1], valueOfCopies[i]));
    }

    populations.push(newPopulation);
    return this;
  }

  fitnessFunction(individual) {
    const computations = this.fitnessFunctionParams.map((param, i) => {
      let value = individual[i];
      let debt;

      if ((value - param) >= 0) debt = 0;
      if ((value - param) < 0) debt = value - param;

      return debt;
    });

    return computations.reduce((acc, index) => acc + index);
  }

  createRankList() {
    const { populations } = this;
    const population = populations[populations.length - 1];
    const computations = [];

    for (let i = 0; i <= population.length - 1; i++) {
      computations.push([this.fitnessFunction(population[i]), population[i]]);
    }

    const rankList = computations.sort((a, b) => a[0] - b[0]).reverse();

    return rankList;
  }

  createCopies(list, numberOfCopies) {
    const arr = [];

    for (let i = 0; i < numberOfCopies; i++) {
      arr.push(list.map(val => val));
    }

    return arr;
  }

  giveBestResult() {
    const result = this.bestResults.sort((a, b) => a[0] - b[0]).reverse();

    return result[0];
  }
}

export default ImplementationGA;
