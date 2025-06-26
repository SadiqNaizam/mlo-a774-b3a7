import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  // In a real app, user data would come from context or a store
  const user = {
    name: 'User',
    email: 'user@example.com',
    avatarUrl: `https://avatar.vercel.sh/user.png`, // Placeholder avatar
  };

  const handleLogout = () => {
    // In a real app, this would also clear auth tokens
    navigate('/'); // Navigate to the LoginPage
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow container py-8 md:py-12">
        <div className="flex justify-center">
          <Card className="w-full max-w-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Welcome Back, {user.name}!</CardTitle>
              <CardDescription>You have successfully logged in. This is your main dashboard.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4 p-4 border rounded-lg">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback>
                    <User className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <Badge variant="secondary">Verified</Badge>
              </div>

              <div className="text-center text-muted-foreground">
                <p>From here you can manage your account and access all the application features.</p>
                <p>More widgets and data will be displayed here in the future.</p>
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={handleLogout} variant="destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;