class ToHSolver {
  constructor(n) {
    this.n = n;
    this.source = this.fillSource(n);
    this.target = [];
    this.auxiliary = [];
    this.result = [];
  }

  fillSource(n) {
    return new Array(n).fill(0, 0).map((val, index) => n - index).splice(0, n);
  }

  movePlate(n, source, target, auxiliary) {
    const { giveName } = this;

    const move = (n, source, target, auxiliary) => {
      if (n > 0) {
        move(n - 1, source, auxiliary, target);
        
        this.result.push(`#${source[source.length - 1]}
          ${giveName(source, this)} -> ${giveName(target, this)}`);

        target.push(source.pop());

        move(n - 1, auxiliary, target, source);
      }
    }

    move(n, source, target, auxiliary);
  }

  giveName(value, context) {
    const { source, target, auxiliary } = context;

    if (value === target) return 'slot_c';
    if (value === auxiliary) return 'slot_b';
    if (value === source) return 'slot_a';
  }

  solve() {
    let { n, source, target, auxiliary } = this;

    this.movePlate(n, source, target, auxiliary)
    return this;
  }

  giveResult() {
    return this.result;
  }
}

export default ToHSolver;
