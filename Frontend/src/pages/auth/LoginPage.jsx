import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Code, Lock, Mail, Chrome, ArrowRight  } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
// import { useAuth } from '@/hooks/auth/useAuth';
// import { authService } from '@/services/auth';
import { ROUTES } from '../../utils/constant';
// import type { LoginRequest } from '@/types/auth';
import Layout from '../../components/layout/Layout';
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || ROUTES.DASHBOARD;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      await login(formData);
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    authService.googleAuth();
  };

  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
      <div className="text-center mb-4 animate-fade-in">
      <div className="flex items-center justify-center mb-2">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl animate-scale-in">
          <Code className="h-8 w-8 text-white" />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-white mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        CodeJudge
      </h1>
      <p className="text-slate-400 text-base">Welcome back to your coding journey</p>
    </div>

        <Card className="border-slate-700/50 bg-slate-800/30 backdrop-blur-xl shadow-2xl animate-slide-up">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl text-white">Sign In</CardTitle>
            <CardDescription className="text-slate-400 text-base">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>




          <CardContent className="space-y-6">
            <form 
            // onSubmit={handleSubmit} 
            className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200 text-sm font-medium">Email</Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-purple-400 transition-colors duration-200" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                    className="pl-12 h-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-200 text-sm font-medium">Password</Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-purple-400 transition-colors duration-200" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    // value={formData.password}
                    // onChange={handleChange}
                    required
                    className="pl-12 pr-12 h-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 rounded-xl"
                  />
                  <button
                    type="button"
                    // onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Sign In</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-800 px-3 text-slate-400 font-medium">Or continue with</span>
              </div>
            </div>

            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full h-12 border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600/50 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Chrome className="mr-2 h-5 w-5" />
              <span className="font-medium">Continue with Google</span>
            </Button>

            <div className="text-center text-sm text-slate-400">
              Don't have an account?{' '}
              <Link to={ROUTES.SIGNUP} className="text-purple-400 hover:text-purple-300 underline font-medium transition-colors duration-200">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </Layout>
  );
};

export default LoginPage;