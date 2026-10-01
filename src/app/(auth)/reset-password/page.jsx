'use client';
import React, { Suspense } from 'react';
import ResetPasswordForms from './reset-password-forms';

const ResetPasswordPage = () => {
  return (
    <div>
      <h2>Reset Password</h2>
      <Suspense fallback="loading">
        <ResetPasswordForms></ResetPasswordForms>
      </Suspense>
    </div>
  );
};

export default ResetPasswordPage;