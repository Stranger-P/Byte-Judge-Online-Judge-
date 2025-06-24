import React, { useState } from 'react';
import { Trophy, Target, TrendingUp, Code, Star, Medal, Zap, Flame, BarChart3, Calendar, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import Layout from '../components/layout/Layout';

// Dummy data and helper functions
const dummySubmissions = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy', category: 'Arrays', status: 'Accepted' },
  { id: 2, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', category: 'Strings', status: 'Accepted' },
  { id: 3, title: 'Merge K Sorted Lists', difficulty: 'Hard', category: 'Linked Lists', status: 'Wrong Answer' },
  { id: 4, title: 'Valid Sudoku', difficulty: 'Medium', category: 'Hash Table', status: 'Accepted' },
  { id: 5, title: 'Container With Most Water', difficulty: 'Medium', category: 'Two Pointers', status: 'Time Limit Exceeded' },
  { id: 6, title: 'Reverse Linked List', difficulty: 'Easy', category: 'Linked List', status: 'Accepted' },
  { id: 7, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', category: 'Trees', status: 'Accepted' },
  { id: 8, title: 'Find Median from Data Stream', difficulty: 'Hard', category: 'Heaps', status: 'Accepted' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Accepted':
      return <Badge className="bg-green-600 hover:bg-green-500 text-white">Accepted</Badge>;
    case 'Wrong Answer':
      return <Badge variant="destructive">Wrong Answer</Badge>;
    case 'Time Limit Exceeded':
      return <Badge className="bg-yellow-600 hover:bg-yellow-500 text-black">TLE</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'Accepted':
      return <div className="p-2 bg-green-600 rounded-lg"><Medal className="h-4 w-4 text-white" /></div>;
    case 'Wrong Answer':
    case 'Time Limit Exceeded':
      return <div className="p-2 bg-red-600 rounded-lg"><Zap className="h-4 w-4 text-white" /></div>;
    default:
      return <div className="p-2 bg-slate-600 rounded-lg"><Code className="h-4 w-4 text-white" /></div>;
  }
};

const DashboardPage = () => {
  const [showAllSubmissions, setShowAllSubmissions] = useState(false);
  const user = { username: "Priyanshu", email: "abcde@gmail.com" };
  const SUBMISSION_LIMIT = 4;

  const solvedStats = { easy: 70, medium: 45, hard: 12 };
  const totalSolved = solvedStats.easy + solvedStats.medium + solvedStats.hard;

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
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, <span className="text-purple-400">{user?.username}</span>!
            </h1>
            <p className="text-slate-300 text-lg">Your progress is impressive. Keep up the great work.</p>
          </div>

          {/* Top Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up">
            <StatCard icon={<Trophy />} title="Problems Solved" value={totalSolved} footerText="+12 this week" progress={75} color="purple" />
            <StatCard icon={<Target />} title="Success Rate" value="84%" footerText="+2% this month" progress={84} color="blue" />
            <StatCard icon={<TrendingUp />} title="Global Rank" value="#1,247" footerText="↑ 23 positions" color="green" />
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
            {/* Heatmap */}
            <Card className="lg:col-span-3 border-slate-700 bg-slate-800/30 backdrop-blur-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                    <Calendar className="h-6 w-6 text-purple-400" />
                    <div>
                        <CardTitle className="text-white">Submission Activity</CardTitle>
                        <CardDescription className="text-slate-400">Your coding activity over the last year.</CardDescription>
                    </div>
                </div>
              </CardHeader>
              <CardContent>
                <SubmissionHeatmap />
              </CardContent>
            </Card>

            {/* Streak and Difficulty Cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg">
                <CardHeader>
                    <div className="flex items-center space-x-3">
                        <Flame className="h-6 w-6 text-orange-400" />
                        <CardTitle className="text-white">Daily Streak</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex justify-around text-center">
                    <div>
                        <p className="text-4xl font-bold text-white">42</p>
                        <p className="text-sm text-slate-400">Current Streak</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-white">112</p>
                        <p className="text-sm text-slate-400">Longest Streak</p>
                    </div>
                </CardContent>
              </Card>

              <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg flex-grow">
                 <CardHeader>
                    <div className="flex items-center space-x-3">
                        <BarChart3 className="h-6 w-6 text-blue-400" />
                        <CardTitle className="text-white">Difficulty Breakdown</CardTitle>
                    </div>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <DifficultyStat label="Easy" count={solvedStats.easy} total={totalSolved} color="green" />
                    <DifficultyStat label="Medium" count={solvedStats.medium} total={totalSolved} color="yellow" />
                    <DifficultyStat label="Hard" count={solvedStats.hard} total={totalSolved} color="red" />
                 </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Activity Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Code className="h-6 w-6 text-purple-400" />
                  <div>
                    <CardTitle className="text-white">Recent Submissions</CardTitle>
                    <CardDescription className="text-slate-400">Your latest problem-solving attempts.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dummySubmissions.slice(0, showAllSubmissions ? dummySubmissions.length : SUBMISSION_LIMIT).map(sub => (
                    <div key={sub.id} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(sub.status)}
                        <div>
                          <p className="font-medium text-white">{sub.title}</p>
                          <p className="text-sm text-slate-400">{sub.difficulty} • {sub.category}</p>
                        </div>
                      </div>
                      {getStatusBadge(sub.status)}
                    </div>
                  ))}
                </div>
                {dummySubmissions.length > SUBMISSION_LIMIT && (
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-purple-400 hover:text-purple-300 hover:bg-slate-700/50"
                    onClick={() => setShowAllSubmissions(!showAllSubmissions)}
                  >
                    {showAllSubmissions ? 'Show Less' : 'Show More'}
                    {showAllSubmissions ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <div>
                    <CardTitle className="text-white">Recommended For You</CardTitle>
                    <CardDescription className="text-slate-400">Challenges picked to hone your skills.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <RecommendedProblem title="Valid Parentheses" tags="Easy • Stack" />
                  <RecommendedProblem title="Binary Tree Inorder Traversal" tags="Medium • Trees" />
                  <RecommendedProblem title="Word Ladder" tags="Hard • BFS" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// --- Helper Components ---

const StatCard = ({ icon, title, value, footerText, progress, color }) => (
  <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 group">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-slate-300">{title}</CardTitle>
      {React.cloneElement(icon, { className: `h-5 w-5 text-${color}-400` })}
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold text-white">{value}</div>
      <p className="text-xs text-slate-400 mt-1">{footerText}</p>
      {progress !== undefined && <Progress value={progress} className={`mt-3 h-2 bg-${color}-500/20`} indicatorClassName={`bg-${color}-500`} />}
    </CardContent>
  </Card>
);

const DifficultyStat = ({ label, count, total, color }) => {
    const percentage = total > 0 ? (count / total) * 100 : 0;
    const colorClass = { green: 'text-green-400', yellow: 'text-yellow-400', red: 'text-red-400'}[color];
    const progressIndicatorClass = { green: 'bg-green-500', yellow: 'bg-yellow-500', red: 'bg-red-500'}[color];

    return (
        <div>
            <div className="flex justify-between items-center mb-1 text-sm">
                <p className={`font-medium ${colorClass}`}>{label}</p>
                <p className="text-slate-300">{count} <span className="text-slate-500">/ {total}</span></p>
            </div>
            <Progress value={percentage} className="h-2 bg-slate-700" indicatorClassName={progressIndicatorClass} />
        </div>
    );
};

const RecommendedProblem = ({ title, tags }) => (
  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors duration-200 cursor-pointer">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"><Award className="h-4 w-4 text-white" /></div>
      <div>
        <p className="font-medium text-white">{title}</p>
        <p className="text-sm text-slate-400">{tags}</p>
      </div>
    </div>
    <Badge className="bg-blue-600 hover:bg-blue-500 text-white">Start</Badge>
  </div>
);

// Heatmap Component
const SubmissionHeatmap = () => {
    const today = new Date();
    const days = Array.from({ length: 365 }, (_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        // Dummy data generation
        const submissions = Math.random() > 0.3 ? Math.floor(Math.random() * 10) : 0;
        return { date, submissions };
    }).reverse();

    const getWeekDay = (date) => (date.getDay() + 6) % 7; // Monday = 0
    const startDayOffset = getWeekDay(days[0].date);

    const getColor = (count) => {
        if (count === 0) return 'bg-slate-700/50';
        if (count < 3) return 'bg-purple-800';
        if (count < 6) return 'bg-purple-600';
        if (count < 10) return 'bg-purple-400';
        return 'bg-pink-500';
    };

    return (
        <TooltipProvider>
            <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] grid-rows-7 gap-1">
                {Array.from({ length: startDayOffset }).map((_, i) => <div key={`empty-${i}`} />)}
                {days.map(({ date, submissions }, index) => (
                    <Tooltip key={index}>
                        <TooltipTrigger asChild>
                            <div className={`aspect-square rounded-sm ${getColor(submissions)}`} />
                        </TooltipTrigger>
                        <TooltipContent className="bg-slate-900 border-slate-700 text-white">
                            <p>{submissions} submissions on {date.toDateString()}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};


export default DashboardPage;