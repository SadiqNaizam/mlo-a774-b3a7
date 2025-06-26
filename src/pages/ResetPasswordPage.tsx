import React from 'react';
import { Link } from 'react-router-dom';

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

const ResetPasswordPage: React.FC = () => {
  console.log('ResetPasswordPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Reset Your Password</CardTitle>
            <CardDescription>
              Enter and confirm your new password below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="••••••••••••"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••••••"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full">Reset Password</Button>
            <div className="text-center text-sm">
              <Link
                to="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Remembered your password? Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPasswordPage;