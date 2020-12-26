const validation = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "タイトルは入力必須です";
  }
  if (!formValues.content) {
    errors.content = "コンテンツは入力必須です";
  }
  return errors;
};
export default validation;
