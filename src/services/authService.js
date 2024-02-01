export const sendPasswordResetEmail = async email => {
  const response = await fetch('http://localhost:3000/users/forgot-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error('Error in sending password reset email');
  }

  return await response.json();
};

export const updatePassword = async ({ newPassword, token }) => {
  const response = await fetch(
    `http://localhost:3000/users/reset-password/${token}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword }),
    }
  );

  if (!response.ok) {
    throw new Error('Помилка при оновленні паролю.');
  }

  return await response.json();
};
