import React, { useState } from 'react';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Search, MoreHorizontal, Shield, Users, Trash2, UserCheck, Crown, Settings, Filter } from 'lucide-react';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import Layout from '../../components/layout/Layout';
// import LoadingSpinner from '@/components/common/LoadingSpinner'; // Loading spinner is no longer needed
// import { usersService } from '@/services/users'; // Service is no longer needed
// import { useToast } from '@/hooks/use-toast'; // Toast is no longer needed
import { USER_ROLES } from '../../utils/constant';

// --- Hardcoded Dummy Data ---
const dummyUsersData = {
  total: 5,
  users: [
    {
      id: '1',
      username: 'AliceAdmin',
      email: 'alice.admin@example.com',
      role: USER_ROLES.ADMIN,
      createdAt: '2023-01-15T10:00:00Z',
      isActive: true,
    },
    {
      id: '2',
      username: 'BobSetter',
      email: 'bob.setter@example.com',
      role: USER_ROLES.PROBLEM_SETTER,
      createdAt: '2023-03-20T14:30:00Z',
      isActive: true,
    },
    {
      id: '3',
      username: 'CharlieStudent',
      email: 'charlie.student@example.com',
      role: USER_ROLES.STUDENT,
      createdAt: '2023-05-10T09:00:00Z',
      isActive: true,
    },
    {
      id: '4',
      username: 'DianaInactive',
      email: 'diana.inactive@example.com',
      role: USER_ROLES.STUDENT,
      createdAt: '2022-11-01T18:45:00Z',
      isActive: false,
    },
    {
      id: '5',
      username: 'EveSetter',
      email: 'eve.setter@example.com',
      role: USER_ROLES.PROBLEM_SETTER,
      createdAt: '2023-08-01T11:20:00Z',
      isActive: true,
    },
  ],
};

const AdminUsersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  // const [page, setPage] = useState(1); // Not needed for hardcoded data
  // const { toast } = useToast(); // Commented out
  // const queryClient = useQueryClient(); // Commented out

  /* --- Start of Commented Out Logic --- */
  // const { data: usersData, isLoading } = useQuery({
  //   queryKey: ['users', page, searchTerm],
  //   queryFn: () => usersService.getUsers({ page, limit: 10 }),
  // });

  // const updateRoleMutation = useMutation({
  //   mutationFn: ({ userId, role }) => usersService.updateUserRole(userId, role),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['users'] });
  //     toast({
  //       title: 'Success',
  //       description: 'User role updated successfully',
  //     });
  //   },
  //   onError: (error) => {
  //     toast({
  //       variant: 'destructive',
  //       title: 'Error',
  //       description: error.message || 'Failed to update user role',
  //     });
  //   },
  // });

  // const deleteUserMutation = useMutation({
  //   mutationFn: (userId) => usersService.deleteUser(userId),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['users'] });
  //     toast({
  //       title: 'Success',
  //       description: 'User deleted successfully',
  //     });
  //   },
  //   onError: (error) => {
  //     toast({
  //       variant: 'destructive',
  //       title: 'Error',
  //       description: error.message || 'Failed to delete user',
  //     });
  //   },
  // });
  /* --- End of Commented Out Logic --- */


  // Mocked handlers for UI interaction demonstration
  const handleRoleUpdate = (userId, newRole) => {
    // updateRoleMutation.mutate({ userId, role: newRole });
    console.log(`(Mock) Updating role for user ${userId} to ${newRole}`);
    alert(`(Mock Action) The role for user with ID: ${userId} would be changed to "${newRole}". Check the console for more details.`);
  };

  const handleDeleteUser = (userId) => {
    // A simple confirmation dialog, similar to the original logic
    if (window.confirm('This is a mock action. Are you sure you want to "delete" this user?')) {
      // deleteUserMutation.mutate(userId);
      console.log(`(Mock) Deleting user ${userId}`);
      alert(`(Mock Action) User with ID: ${userId} would be deleted. Check the console for more details.`);
    }
  };
  
  // Filtering logic for the hardcoded data
  const filteredUsers = dummyUsersData.users
    .filter(user => {
      if (roleFilter === 'all') return true;
      return user.role === roleFilter;
    })
    .filter(user => 
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const getRoleBadgeVariant = (role) => {
    switch (role) {
      case USER_ROLES.ADMIN:
        return 'destructive';
      case USER_ROLES.PROBLEM_SETTER:
        return 'default';
      default:
        return 'secondary';
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case USER_ROLES.ADMIN:
        return <Crown className="h-4 w-4 text-red-400" />;
      case USER_ROLES.PROBLEM_SETTER:
        return <Shield className="h-4 w-4 text-purple-400" />;
      default:
        return <UserCheck className="h-4 w-4 text-blue-400" />;
    }
  };

  /* --- Start of Commented Out Loading State --- */
  // if (isLoading) {
  //   return (
  //     <Layout>
  //       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
  //         <LoadingSpinner size="lg" />
  //       </div>
  //     </Layout>
  //   );
  // }
  /* --- End of Commented Out Loading State --- */

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
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white mb-2">User Management</h1>
                <p className="text-slate-300 text-lg">
                  Manage user roles and permissions across the platform
                </p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 animate-slide-up">
            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-200">Total Users</CardTitle>
                <Users className="h-5 w-5 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">{dummyUsersData?.total || 0}</div>
                <p className="text-xs text-slate-400 mt-1">Registered users</p>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-200">Admins</CardTitle>
                <Crown className="h-5 w-5 text-red-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">
                  {dummyUsersData?.users.filter((u) => u.role === USER_ROLES.ADMIN).length || 0}
                </div>
                <p className="text-xs text-slate-400 mt-1">System administrators</p>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-200">Problem Setters</CardTitle>
                <Shield className="h-5 w-5 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">
                  {dummyUsersData?.users.filter((u) => u.role === USER_ROLES.PROBLEM_SETTER).length || 0}
                </div>
                <p className="text-xs text-slate-400 mt-1">Content creators</p>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6 border-slate-700 bg-slate-800/30 backdrop-blur-lg animate-fade-in">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-purple-400" />
                <div>
                  <CardTitle className="text-white">Users</CardTitle>
                  <CardDescription className="text-slate-400">
                    Search and manage user accounts and their roles
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <Input
                    placeholder="Search users by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400 h-12"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-slate-400" />
                  <Select value={roleFilter} onValueChange={setRoleFilter}>
                    <SelectTrigger className="w-40 bg-slate-700/50 border-slate-600 text-white h-12">
                      <SelectValue placeholder="Filter by role" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="all" className="text-white">All Roles</SelectItem>
                      <SelectItem value={USER_ROLES.STUDENT} className="text-blue-400">Students</SelectItem>
                      <SelectItem value={USER_ROLES.PROBLEM_SETTER} className="text-purple-400">Problem Setters</SelectItem>
                      <SelectItem value={USER_ROLES.ADMIN} className="text-red-400">Admins</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Users Table */}
              <div className="rounded-md border border-slate-700">
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-700 hover:bg-slate-800/50">
                      <TableHead className="text-slate-300">User</TableHead>
                      <TableHead className="text-slate-300">Email</TableHead>
                      <TableHead className="text-slate-300">Role</TableHead>
                      <TableHead className="text-slate-300">Joined</TableHead>
                      <TableHead className="text-slate-300">Status</TableHead>
                      <TableHead className="text-slate-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id} className="border-slate-700 hover:bg-slate-800/30 transition-colors duration-200">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                              <span className="text-lg font-bold text-white">
                                {user.username.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-white">{user.username}</div>
                              <div className="text-sm text-slate-400">Member since {new Date(user.createdAt).getFullYear()}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-300">{user.email}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {getRoleIcon(user.role)}
                            <Badge variant={getRoleBadgeVariant(user.role)} className="font-medium">
                              {user.role.replace('-', ' ').toUpperCase()}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-400">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.isActive ? 'default' : 'secondary'} className={user.isActive ? 'bg-green-600 text-white' : 'bg-slate-600 text-slate-300'}>
                            {user.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Select
                              defaultValue={user.role}
                              onValueChange={(newRole) => handleRoleUpdate(user.id, newRole)}
                            >
                              <SelectTrigger className="w-32 bg-slate-700/50 border-slate-600 text-white text-xs h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-slate-700">
                                <SelectItem value={USER_ROLES.STUDENT} className="text-blue-400">Student</SelectItem>
                                <SelectItem value={USER_ROLES.PROBLEM_SETTER} className="text-purple-400">Problem Setter</SelectItem>
                                <SelectItem value={USER_ROLES.ADMIN} className="text-red-400">Admin</SelectItem>
                              </SelectContent>
                            </Select>

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-700/50">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
                                <DropdownMenuItem
                                  className="text-red-400 focus:text-red-300 focus:bg-red-900/50"
                                  onClick={() => handleDeleteUser(user.id)}
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete User
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
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

export default AdminUsersPage;