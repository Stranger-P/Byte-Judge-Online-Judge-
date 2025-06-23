import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query'; // Commented out as we are using hardcoded data
import { Link } from 'react-router-dom';
import { Search, Plus, Edit, Trash2, Eye, Filter, Code2, Trophy, Star, Zap } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import Layout from '../../components/layout/Layout';
// import LoadingSpinner from '@/components/common/LoadingSpinner'; // Not needed with hardcoded data
// import { problemsService } from '@/services/problems'; // Commented out as we are not fetching from a service
// import { useAuth } from '@/hooks/auth/useAuth'; // Commented out to hardcode user role
import { ROUTES, USER_ROLES } from '../../utils/constant';

const ProblemsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  // const [page, setPage] = useState(1); // Page state is not needed for hardcoded data
  // const { user } = useAuth(); // Hardcoding user role for demonstration

  // const isAdmin = user?.role === USER_ROLES.ADMIN;
  // const isProblemSetter = user?.role === USER_ROLES.PROBLEM_SETTER;
  // Hardcode to true to show admin/problem-setter controls for demonstration purposes
  const canManageProblems = true;

  // --- Start of Hardcoded Data ---

  // The useQuery hook is commented out to use static data below.
  // const { data: problemsData, isLoading } = useQuery({
  //   queryKey: ['problems', page, searchTerm],
  //   queryFn: () => problemsService.getProblems({ page, limit: 10 }),
  // });

  const hardcodedProblems = [
    {
      id: '1',
      title: 'Two Sum',
      difficulty: 'easy',
      tags: ['array', 'hash-table'],
      createdAt: '2023-10-26T10:00:00Z',
    },
    {
      id: '2',
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'medium',
      tags: ['string', 'sliding-window', 'hash-table'],
      createdAt: '2023-10-25T12:30:00Z',
    },
    {
      id: '3',
      title: 'Median of Two Sorted Arrays',
      difficulty: 'hard',
      tags: ['array', 'binary-search', 'divide-and-conquer'],
      createdAt: '2023-10-24T15:45:00Z',
    },
    {
      id: '4',
      title: 'Validate Binary Search Tree',
      difficulty: 'medium',
      tags: ['tree', 'depth-first-search', 'recursion'],
      createdAt: '2023-10-23T09:00:00Z',
    },
    {
      id: '5',
      title: 'Implement Queue using Stacks',
      difficulty: 'easy',
      tags: ['stack', 'queue', 'data-structures', 'design'],
      createdAt: '2023-10-22T18:00:00Z',
    },
    {
      id: '6',
      title: 'Trapping Rain Water',
      difficulty: 'hard',
      tags: ['array', 'two-pointers', 'stack', 'dynamic-programming'],
      createdAt: '2023-10-21T11:20:00Z',
    },
    {
      id: '7',
      title: 'Reverse Linked List',
      difficulty: 'easy',
      tags: ['linked-list', 'recursion'],
      createdAt: '2023-10-20T14:00:00Z',
    },
  ];

  // Mimic the structure of the data that would be returned by react-query and the service
  const problemsData = {
    data: hardcodedProblems,
  };

  // With hardcoded data, the page is never in a loading state.
  // const isLoading = false;

  // --- End of Hardcoded Data ---

  const getDifficultyBadgeVariant = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'default';
      case 'medium':
        return 'secondary';
      case 'hard':
        return 'destructive';
      default:
        return 'normal';
    }
  };

  const getDifficultyIcon = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return <Star className="h-4 w-4 text-green-400" />;
      case 'medium':
        return <Zap className="h-4 w-4 text-yellow-400" />;
      case 'hard':
        return <Trophy className="h-4 w-4 text-red-400" />;
      default:
        return <Code2 className="h-4 w-4" />;
    }
  };

  // The loading spinner component is not needed when data is hardcoded.
  // if (isLoading) {
  //   return (
  //     <Layout>
  //       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
  //         <LoadingSpinner />
  //       </div>
  //     </Layout>
  //   );
  // }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-600 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto py-8 px-4 relative z-10">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8 animate-fade-in">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white mb-2">Problems</h1>
                <p className="text-slate-300 text-lg">
                  Practice coding problems and improve your skills
                </p>
              </div>
            </div>
            {canManageProblems && (
              <Link to={ROUTES.CREATE_PROBLEM}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  <Plus className="mr-2 h-5 w-5" />
                  Create Problem
                </Button>
              </Link>
            )}
          </div>

          {/* Search and Filter Section */}
          <Card className="mb-6 border-slate-700 bg-slate-800/30 backdrop-blur-lg animate-slide-up">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Search className="h-6 w-6 text-purple-400" />
                <div>
                  <CardTitle className="text-white">Browse Problems</CardTitle>
                  <CardDescription className="text-slate-400">
                    Find problems by title, difficulty, or tags
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <Input
                    placeholder="Search problems..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400 h-12"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-slate-400" />
                  <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                    <SelectTrigger className="w-40 bg-slate-700/50 border-slate-600 text-white h-12">
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="all" className="text-white">All Levels</SelectItem>
                      <SelectItem value="easy" className="text-green-400">Easy</SelectItem>
                      <SelectItem value="medium" className="text-yellow-400">Medium</SelectItem>
                      <SelectItem value="hard" className="text-red-400">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problems Table */}
          <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg animate-fade-in">
            <CardContent className="p-0">
              <div className="rounded-md border border-slate-700">
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700 hover:bg-slate-800/50">
                      <TableHead className="text-slate-300">Problem</TableHead>
                      <TableHead className="text-slate-300">Difficulty</TableHead>
                      <TableHead className="text-slate-300">Tags</TableHead>
                      <TableHead className="text-slate-300">Created</TableHead>
                      {canManageProblems && <TableHead className="text-slate-300">Actions</TableHead>}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* The `map` function now iterates over our hardcoded `problemsData.data` array */}
                    {problemsData?.data.map((problem) => (
                      <TableRow key={problem.id} className="border-slate-700 hover:bg-slate-800/30 transition-colors duration-200">
                        <TableCell>
                          <Link
                            to={ROUTES.PROBLEM_DETAIL(problem.id)}
                            className="font-medium text-purple-400 hover:text-purple-300 hover:underline transition-colors duration-200 flex items-center space-x-2"
                          >
                            {getDifficultyIcon(problem.difficulty)}
                            <span>{problem.title}</span>
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getDifficultyBadgeVariant(problem.difficulty)} className="font-medium">
                            {problem.difficulty.toUpperCase()}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1 flex-wrap">
                            {problem.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs border-slate-600 text-slate-300">
                                {tag}
                              </Badge>
                            ))}
                            {problem.tags.length > 3 && (
                              <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                                +{problem.tags.length - 3}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-400">
                          {new Date(problem.createdAt).toLocaleDateString()}
                        </TableCell>
                        {canManageProblems && (
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Link to={ROUTES.PROBLEM_DETAIL(problem.id)}>
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-purple-400 hover:bg-slate-700/50">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </Link>
                              <Link to={ROUTES.EDIT_PROBLEM(problem.id)}>
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-400 hover:bg-slate-700/50">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </Link>
                              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-400 hover:bg-slate-700/50">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProblemsPage;