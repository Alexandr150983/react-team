import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPasswordForm from './ForgotPasswordPage/ForgotPasswordForm';
import UpdatePasswordForm from './UpdatePasswordPage/UpdatePasswordForm';
import LoginPage from './LoginPage/LoginPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="react-team/forgot-password"
          element={<ForgotPasswordForm />}
        />
        <Route
          path="/users/reset-password/:token"
          element={<UpdatePasswordForm />}
        />
        <Route path="/users/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};
