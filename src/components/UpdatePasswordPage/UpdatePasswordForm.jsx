import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './UpdatePasswordForm.css';
import { updatePassword } from '../../services/authService';
import { validatePassword } from '../../utils/validation';

const UpdatePasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Отримання токена з URL
  const token = location.pathname.split('/').pop();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!validatePassword(password)) {
      setError(
        'Пароль недостатньо сильний. Він має містити мінімум 8 символів, включати цифри та великі літери.'
      );
      return;
    }

    if (password !== confirmPassword) {
      setError('Паролі не співпадають.');
      return;
    }

    try {
      await updatePassword({ newPassword: password, token }); // Оновлення для включення newPassword
      setMessage('Пароль успішно оновлено.');
      setTimeout(() => navigate('/users/login'), 3000); // Перенаправлення на сторінку логіну через 3 секунди
    } catch (error) {
      setError(error.message || 'Помилка при оновленні паролю.');
    }
  };

  return (
    <div className="update-password-form">
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Новий пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Підтвердіть пароль"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Оновити пароль</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {message && <div className="success-message">{message}</div>}
    </div>
  );
};

export default UpdatePasswordForm;
