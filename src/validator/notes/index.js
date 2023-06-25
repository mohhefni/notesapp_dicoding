const { NotePayloadScheme } = require('./scheme');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadScheme.validate(payload);
    if (validationResult.error) throw new Error(validationResult.error.message);
  },
};

module.exports = NotesValidator;
