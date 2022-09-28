// config example { name: 'имя', last_name: 'фамилия', email: 'e-mail' };

export function validateEmpty(config, data) {
  const errors = [];

  Object.entries(config).forEach(([key, name]) => {
    if (!data[key]) errors.push(`Поле "${name}" не может быть пустым`)
  });

  return errors;
}
