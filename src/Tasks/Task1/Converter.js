class Converter {
  constructor(temp, key) {
    this.temp = temp;
    this.key = key;
  }

  convert() {
    if (this.key === 'C') {
      const f = this.cToF(this.temp);
      const k = this.cToK(this.temp);
      return `{${f}, ${k}}`;
    }
    if (this.key === 'F') {
      const c = this.fToC(this.temp);
      const k = this.fToK(this.temp);
      return `{${c}, ${k}}`;
    }
    if (this.key === 'K') {
      const c = this.kToC(this.temp);
      const f = this.kToF(this.temp);
      return `{${c}, ${f}}`;
    }
  }

  cToF() {
    const val = Math.round((this.temp * 9) / 5 + 32);
    return `"F": "${val}"`;
  }

  cToK() {
    const val = Math.round(this.temp + 273.15);
    return `"K": "${val}"`;
  }

  fToC() {
    const val = Math.round((this.temp - 32) * (5 / 9));
    return `"C": "${val}"`;
  }

  fToK() {
    const val = Math.round((this.temp - 32) * (5 / 9) + 273.15);
    return `"K": "${val}"`;
  }

  kToC() {
    const val = Math.round(this.temp - 273.15);
    return `"C": "${val}"`;
  }

  kToF() {
    const val = Math.round(((this.temp - 273.15) * 9) / 5 + 32);
    return `"F": "${val}"`;
  }
}

export default Converter;
