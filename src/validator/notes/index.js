const { NotePayloadScheme } = require('./scheme');
const InvariantError = require('../../exceptions/InvariantError');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadScheme.validate(payload);
    if (validationResult.error)
      throw new InvariantError(validationResult.error.message);
  },
};

module.exports = NotesValidator;
