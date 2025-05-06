'use client';

import React from 'react';
import AuthForm from '@/components/AuthForm';
import { signInWithCredentials } from '@/lib/actions/auth'
import { signInSchema } from '@/lib/validation'

const LoginPage =  () => {
  // Cek session saat halaman dimuat


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <AuthForm
          schema={signInSchema}
          defaultValues={{ email: '', password: '' }}
          onSubmit={signInWithCredentials}
          type="login"
        />
    </div>
  );
};

export default LoginPage;
