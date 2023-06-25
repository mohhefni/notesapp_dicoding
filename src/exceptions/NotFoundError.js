const InvariantError = require('./InvariantError');

class NotFoundError extends InvariantError {
  constructor() {
    super(message);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;
