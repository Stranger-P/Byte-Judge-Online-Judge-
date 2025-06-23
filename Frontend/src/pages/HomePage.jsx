import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Zap, Code, Star, TrendingUp } from 'lucide-react';
import { Button } from './../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './../components/ui/card';
import Layout from './../components/layout/Layout';
import { ROUTES } from '../utils/constant';

const HomePage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-4 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-scale-in">
                Master Your
                <span className="text-purple-400 block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Coding Skills
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of developers solving challenging problems, improving algorithms, 
                and preparing for technical interviews on our advanced online judge platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to={ROUTES.SIGNUP}>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25">
                  Start Coding Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to={ROUTES.LOGIN}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25">
                Sign In
            </Button>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10,000+</div>
              <div className="text-slate-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">5,000+</div>
              <div className="text-slate-300">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-300">Companies Trust Us</div>
            </div>
          </div>

          {/* Features */}
          <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Trophy className="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  <Star className="h-6 w-6 text-yellow-400 opacity-80" />
                </div>
                <CardTitle className="text-white text-xl">Competitive Programming</CardTitle>
                <CardDescription className="text-slate-400">
                  Solve problems from easy to expert level and compete with developers worldwide in real-time contests.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Zap className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <TrendingUp className="h-6 w-6 text-green-400 opacity-80" />
                </div>
                <CardTitle className="text-white text-xl">Real-time Judging</CardTitle>
                <CardDescription className="text-slate-400">
                  Get instant feedback on your solutions with our lightning-fast and accurate online judge system.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Users className="h-12 w-12 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                  <Code className="h-6 w-6 text-purple-400 opacity-80" />
                </div>
                <CardTitle className="text-white text-xl">Community Driven</CardTitle>
                <CardDescription className="text-slate-400">
                  Learn from others, share solutions, and grow together in our vibrant coding community.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-600 rounded-full blur-2xl animate-pulse delay-500"></div>
            <div className="absolute top-32 right-32 w-24 h-24 bg-pink-500 rounded-full blur-lg animate-pulse delay-700"></div>
          </div>
        </section>
      </div>
      
    </Layout>
  );
};

export default HomePage;
