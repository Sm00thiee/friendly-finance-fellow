
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

/*
==============================================
AUTHENTICATION IMPLEMENTATION DOCUMENTATION
==============================================

Current Implementation (Fake API):
--------------------------------
- This is a placeholder authentication system that simulates a basic auth flow
- Currently auto-accepts all login/register attempts for development purposes
- Uses local storage to maintain a basic session state

TODO: Real Implementation Steps
-----------------------------
1. Backend Integration:
   - Replace fakeAuthApi with real API endpoints
   - Implement proper JWT/session token handling
   - Add proper error handling and validation

2. Security Enhancements:
   - Add password strength requirements
   - Implement rate limiting
   - Add 2FA support
   - Add proper session management

3. User Experience:
   - Add password reset functionality
   - Add email verification
   - Implement "Remember Me" functionality
   - Add social auth providers

4. Data Management:
   - Implement proper user profile storage
   - Add user preferences
   - Setup proper data encryption

Note: When implementing real authentication:
- Never store sensitive data in localStorage
- Always use HTTPS
- Implement proper CSRF protection
- Follow OWASP security guidelines
*/

// Fake authentication API - replace with real implementation
const fakeAuthApi = {
  login: async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Always succeed for demo purposes
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", email);
    return { success: true };
  },
  register: async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Always succeed for demo purposes
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", email);
    return { success: true };
  },
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const authFunction = isLogin
        ? fakeAuthApi.login
        : fakeAuthApi.register;
      
      await authFunction(email, password);
      
      toast({
        title: isLogin ? "Welcome back!" : "Account created!",
        description: "You have been successfully authenticated.",
      });

      navigate("/savings"); // Redirect to main page after auth
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center animate-fade-in">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-gray-500">
            {isLogin
              ? "Sign in to access your account"
              : "Sign up to get started with our app"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading
              ? "Loading..."
              : isLogin
              ? "Sign In"
              : "Sign Up"}
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-primary hover:underline"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
