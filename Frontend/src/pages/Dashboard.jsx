import React from 'react';
import {  Trophy, Target, Clock, TrendingUp, Zap, Code, Star, Medal, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import Layout from '../components/layout/Layout';
// import { useAuth } from '@/hooks/auth/useAuth';


const DashboardPage = () => {
  // const { user } = useAuth() as { user: User | null };
  let user = {username: "Priyanshu", email: "abcde@gmail.com"};

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-600 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Welcome Section */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  Welcome back, <span className="text-purple-400">{user?.username}</span>!
                </h1>
                <p className="text-slate-300 text-lg">Track your progress and continue your coding journey.</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-up">
            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-200">Problems Solved</CardTitle>
                <Trophy className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">127</div>
                <div className="flex items-center space-x-2">
                  <Badge variant="default" className="bg-green-600 text-white">+12</Badge>
                  <p className="text-xs text-slate-400">from last week</p>
                </div>
                <Progress value={75} className="mt-3 h-2" />
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-200">Success Rate</CardTitle>
                <Target className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">84%</div>
                <div className="flex items-center space-x-2">
                  <Badge variant="default" className="bg-blue-600 text-white">+2%</Badge>
                  <p className="text-xs text-slate-400">from last week</p>
                </div>
                <Progress value={84} className="mt-3 h-2" />
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 group">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-200">Time Spent</CardTitle>
                <Clock className="h-5 w-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">47h</div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">This month</Badge>
                </div>
                <Progress value={62} className="mt-3 h-2" />
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 group">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-200">Rank</CardTitle>
                <TrendingUp className="h-5 w-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-2">#1,247</div>
                <div className="flex items-center space-x-2">
                  <Badge variant="default" className="bg-green-600 text-white">↑ 23</Badge>
                  <p className="text-xs text-slate-400">Global ranking</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Code className="h-6 w-6 text-purple-400" />
                  <div>
                    <CardTitle className="text-white">Recent Submissions</CardTitle>
                    <CardDescription className="text-slate-400">Your latest problem submissions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-600 rounded-lg">
                        <Medal className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Two Sum</p>
                        <p className="text-sm text-slate-400">Easy • Arrays</p>
                      </div>
                    </div>
                    <Badge className="bg-green-600 text-white">Accepted</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-600 rounded-lg">
                        <Medal className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Longest Substring</p>
                        <p className="text-sm text-slate-400">Medium • Strings</p>
                      </div>
                    </div>
                    <Badge className="bg-green-600 text-white">Accepted</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-red-600 rounded-lg">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Merge K Lists</p>
                        <p className="text-sm text-slate-400">Hard • Linked Lists</p>
                      </div>
                    </div>
                    <Badge variant="destructive">Wrong Answer</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <div>
                    <CardTitle className="text-white">Recommended Problems</CardTitle>
                    <CardDescription className="text-slate-400">Problems picked just for you</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Valid Parentheses</p>
                        <p className="text-sm text-slate-400">Easy • Stack</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-600 text-white">Recommended</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Binary Tree Inorder</p>
                        <p className="text-sm text-slate-400">Medium • Trees</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-600 text-white">Recommended</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-200 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Word Ladder</p>
                        <p className="text-sm text-slate-400">Hard • BFS</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-600 text-white">Recommended</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;