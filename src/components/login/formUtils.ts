const serializeForm = (formElement: HTMLFormElement) => {
  const obj: { [key: string]: string } = {};
  const elements = formElement.querySelectorAll<HTMLInputElement>(
    "input, select, textarea"
  );

  for (let i = 0; i < elements.length; ++i) {
    const element = elements[i];
    const name = element.name;
    const value = element.value;
    if (name) {
      obj[name] = value;
    }
  }
  return obj;
};

export default serializeForm;
