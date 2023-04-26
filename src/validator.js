export default class Validator {
  constructor(name) {
    this.name = name
  }

  validateUsername(name) {
    const accessSymbols = /^[A-Za-z0-9-_]+$/.test(name);
    const startSymbols = /^[^-_0-9]/.test(name);
    const endSymbols = /[^-_0-9]$/.test(name);
    const repeatSymbols = !(/\d{4}/).test(name);

    return accessSymbols && startSymbols && endSymbols && repeatSymbols
  }
}

