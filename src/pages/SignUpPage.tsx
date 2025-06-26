import React from 'react';
import AuthForm from '@/components/AuthForm';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const SignUpPage = () => {
  console.log('SignUpPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <AuthForm mode="sign-up" />
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;