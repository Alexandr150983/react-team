export const validateEmail = email => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = password => {
  const isLongEnough = password.length >= 8;
  const hasNumbers = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  // Додайте тут інші умови за необхідності

  return isLongEnough && hasNumbers && hasUpperCase;
};
