import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Terminal } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real app, you would handle the API call here.
    console.log('Password reset requested for:', email);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle className="text-2xl">Forgot Password?</CardTitle>
                <CardDescription>
                  Enter your email below, and we'll send you a link to reset your password.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={submitted}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={submitted}>
                  <Mail className="mr-2 h-4 w-4" /> Send Reset Link
                </Button>
              </CardFooter>
            </form>
          </Card>

          {submitted && (
            <Alert className="mt-4">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Instructions Sent!</AlertTitle>
              <AlertDescription>
                If an account with that email exists, we have sent password reset instructions.
              </AlertDescription>
            </Alert>
          )}

          <div className="mt-4 text-center text-sm">
            Remembered your password?{' '}
            <Link to="/" className="underline">
              Back to Login
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;