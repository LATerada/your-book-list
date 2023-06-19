const titleValidation = (title) => {
  return /.{1,}/.test(title);
};

const authorValidation = (author) => {
  return /.{1,}/.test(author);
};

const descriptionValidation = (description) => {
  return /.{1}/.test(description);
};

const ValidationService = {
  titleValidation,
  authorValidation,
  descriptionValidation,
};

export default ValidationService;
