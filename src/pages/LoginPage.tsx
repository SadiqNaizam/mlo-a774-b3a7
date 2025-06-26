import React from 'react';
import { Link } from 'react-router-dom';

// Import custom components
import AuthForm from '@/components/AuthForm';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <AuthForm mode="login" />
          <div className="mt-4 text-center">
            {/* 
              The user journey and page info require a link to password recovery.
              Since it's not part of the reusable AuthForm, it's added here.
            */}
            <Link
              to="/forgot-password" // Path from App.tsx
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;