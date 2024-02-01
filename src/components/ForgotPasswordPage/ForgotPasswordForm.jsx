import React, { useState } from 'react';
import './ForgotPasswordForm.css';
import { validateEmail } from '../../utils/validation';
import { sendPasswordResetEmail } from '../../services/authService';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!validateEmail(email)) {
      setError('Невірний формат емейлу.');
      return;
    }

    try {
      await sendPasswordResetEmail(email);
      setMessage('Інструкції з відновлення паролю відправлено на вашу пошту.');
    } catch (error) {
      setError('Помилка при відправленні емейлу.');
    }
  };

  return (
    <div className="forgot-password-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Введіть ваш емейл"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={error ? 'error' : ''}
        />
        <button type="submit">Send</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {message && <div className="success-message">{message}</div>}
      <a href="/users/login">Sign in</a>
    </div>
  );
};

export default ForgotPasswordForm;
