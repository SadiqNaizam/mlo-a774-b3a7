import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { Github, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

// Define schemas for validation
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

type FormValues = z.infer<typeof formSchema>;

interface AuthFormProps {
  mode: "login" | "sign-up";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  console.log(`AuthForm loaded in ${mode} mode.`);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    console.log("Form submitted with data:", data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);

    if (mode === "sign-up") {
      toast({
        title: "Account Created!",
        description: "You have successfully signed up.",
      });
      // Redirect to dashboard after successful sign-up and login
      navigate("/dashboard");
    } else {
      toast({
        title: "Logged In!",
        description: "Welcome back.",
      });
      // Redirect to dashboard after successful login
      navigate("/dashboard");
    }
  };

  const isLoginMode = mode === "login";
  const title = isLoginMode ? "Welcome back" : "Create an account";
  const description = isLoginMode
    ? "Enter your email below to log in to your account."
    : "Enter your email and password below to create an account.";
  const buttonText = isLoginMode ? "Login" : "Create Account";
  const footerText = isLoginMode
    ? "Don't have an account?"
    : "Already have an account?";
  const footerLinkText = isLoginMode ? "Sign up" : "Login";
  const footerLinkTo = isLoginMode ? "/sign-up" : "/";

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {buttonText}
            </Button>
          </form>
        </Form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
           <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline">
              {/* Placeholder for Google Icon */}
              <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4"><path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.3 1.84-4.32 1.84-3.6 0-6.5-2.95-6.5-6.5s2.9-6.5 6.5-6.5c1.95 0 3.35.73 4.13 1.5l2.44-2.44C19.21 3.56 16.3 2 12.48 2 7.1 2 3.1 6.1 3.1 11.5s4 9.5 9.38 9.5c2.6 0 4.9-1 6.5-2.65 1.8-1.8 2.5-4.35 2.5-6.85 0-.6-.05-1.15-.15-1.7H12.48z"></path></svg>
              Google
            </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center text-sm">
        <p className="text-muted-foreground">
          {footerText}{" "}
          <Link to={footerLinkTo} className="font-semibold text-primary hover:underline">
            {footerLinkText}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;