import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useMutation } from '@tanstack/react-query'; // Commented for standalone running
import { Save, Plus, Trash2, FileCode, ListChecks, Type, Info, X } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import { Badge } from "../../components/ui/badge";
import { Label } from '../../components/ui/label';
// import { useToast } from '../../hooks/use-toast'; // Dummy implementation below
// import { ROUTES, PROBLEM_DIFFICULTIES } from '../../utils/constant'; // Dummy implementation below

// --- Start of Dummy Implementations for Standalone Running ---
import Layout from '../../components/layout/Layout';

const useToast = () => ({
  toast: ({ title, description }) => {
    console.log(`Toast: ${title} - ${description}`);
    alert(`Toast: ${title} - ${description}`);
  }
});

const ROUTES = {
  PROBLEM_DETAIL: (id) => `/problems/${id}`,
};

const PROBLEM_DIFFICULTIES = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
};
// --- End of Dummy Implementations ---


const CreateProblemPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    statement: '',
    inputFormat: '',
    outputFormat: '',
    constraints: '',
    sampleTestCases: [{ input: '', output: '' }],
    testCases: [{ input: '', output: '' }],
    difficulty: 'easy',
    tags: [],
  });
  const [tagInput, setTagInput] = useState('');

  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock mutation for demonstration
  const createProblemMutation = {
    isPending: false,
    mutate: (data) => {
      console.log('Submitting Problem Data:', data);
      toast({
        title: 'Success (Mock)',
        description: 'Problem created successfully!',
      });
      // A real implementation would navigate to the new problem's page
      // navigate(ROUTES.PROBLEM_DETAIL('new-problem-id'));
    },
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTestCaseChange = (type, index, field, value) => {
    const key = type === 'sample' ? 'sampleTestCases' : 'testCases';
    const updatedTestCases = [...formData[key]];
    updatedTestCases[index] = { ...updatedTestCases[index], [field]: value };
    setFormData(prev => ({ ...prev, [key]: updatedTestCases }));
  };

  const addTestCase = (type) => {
    const key = type === 'sample' ? 'sampleTestCases' : 'testCases';
    setFormData(prev => ({
      ...prev,
      [key]: [...prev[key], { input: '', output: '' }]
    }));
  };

  const removeTestCase = (type, index) => {
    const key = type === 'sample' ? 'sampleTestCases' : 'testCases';
    if (formData[key].length > 1) {
      setFormData(prev => ({
        ...prev,
        [key]: prev[key].filter((_, i) => i !== index)
      }));
    }
  };

  const addTag = () => {
    const trimmedTag = tagInput.trim().toLowerCase();
    if (trimmedTag && !formData.tags.includes(trimmedTag)) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, trimmedTag] }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProblemMutation.mutate(formData);
  };

  const cardClasses = "border-slate-700 bg-slate-800/30 backdrop-blur-lg text-white";
  const inputClasses = "bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400 h-12";
  const labelClasses = "text-slate-300";

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-600 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto py-8 px-4 max-w-5xl relative z-10">
          <div className="flex items-center space-x-4 mb-8 animate-fade-in">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
              <FileCode className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Create Problem</h1>
              <p className="text-slate-300 text-lg">
                Craft a new challenge for the community
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <Tabs defaultValue="basic" className="w-full animate-slide-up">
              <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700 backdrop-blur-md">
                <TabsTrigger className='text-white ' value="basic"><Info className="mr-2 h-4 w-4" />Basic Info</TabsTrigger>
                <TabsTrigger className='text-white ' value="statement"><Type className="mr-2 h-4 w-4" />Statement</TabsTrigger>
                <TabsTrigger className='text-white ' value="samples"><ListChecks className="mr-2 h-4 w-4" />Sample Cases</TabsTrigger>
                <TabsTrigger className='text-white ' value="tests"><ListChecks className="mr-2 h-4 w-4" />Hidden Tests</TabsTrigger>
              </TabsList>

              {/* Basic Information Tab */}
              <TabsContent value="basic">
                <Card className={cardClasses}>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription className="text-slate-400">Provide the title, difficulty, and tags for your problem.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="title" className={labelClasses}>Title</Label>
                      <Input id="title" value={formData.title} onChange={(e) => handleInputChange('title', e.target.value)} placeholder="e.g., Two Sum" required className={inputClasses} />
                    </div>
                    <div>
                      <Label htmlFor="difficulty" className={labelClasses}>Difficulty</Label>
                      <Select value={formData.difficulty} onValueChange={(value) => handleInputChange('difficulty', value)}>
                        <SelectTrigger className={inputClasses}><SelectValue /></SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700 text-white">
                          <SelectItem value={PROBLEM_DIFFICULTIES.EASY} className="text-green-400">Easy</SelectItem>
                          <SelectItem value={PROBLEM_DIFFICULTIES.MEDIUM} className="text-yellow-400">Medium</SelectItem>
                          <SelectItem value={PROBLEM_DIFFICULTIES.HARD} className="text-red-400">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="tags" className={labelClasses}>Tags</Label>
                      <div className="flex gap-2 mb-2">
                        <Input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="Add a tag and press Enter" onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())} className={inputClasses} />
                        <Button type="button" onClick={addTag} variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 h-12">Add</Button>
                      </div>
                      <div className="flex gap-2 flex-wrap min-h-[2rem]">
                        {formData.tags.map((tag) => (
                           <Badge key={tag} variant="outline" className="bg-purple-900/50 text-purple-300 border-purple-700 text-sm py-1">
                            {tag}
                            <button type="button" onClick={() => removeTag(tag)} className="ml-2 rounded-full hover:bg-purple-500/30">
                              <X className="h-4 w-4" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Problem Statement Tab */}
              <TabsContent value="statement">
                <Card className={cardClasses}>
                   <CardHeader>
                    <CardTitle>Problem Statement</CardTitle>
                    <CardDescription className="text-slate-400">Clearly describe the problem, formats, and constraints.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <TextareaSection label="Problem Description" field="statement" value={formData.statement} onChange={handleInputChange} placeholder="A clear and concise description of the task..." />
                    <TextareaSection label="Input Format" field="inputFormat" value={formData.inputFormat} onChange={handleInputChange} placeholder="Describe how the input data will be formatted." />
                    <TextareaSection label="Output Format" field="outputFormat" value={formData.outputFormat} onChange={handleInputChange} placeholder="Describe how the output data should be formatted." />
                    <TextareaSection label="Constraints" field="constraints" value={formData.constraints} onChange={handleInputChange} placeholder="e.g., 2 <= nums.length <= 10^4" />
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Sample Test Cases Tab */}
              <TabsContent value="samples">
                <TestCaseCard type="sample" title="Sample Test Cases" description="These examples are visible to users to help them understand the problem." testCases={formData.sampleTestCases} onTestCaseChange={handleTestCaseChange} onAddTestCase={addTestCase} onRemoveTestCase={removeTestCase} />
              </TabsContent>
              
              {/* Hidden Test Cases Tab */}
              <TabsContent value="tests">
                <TestCaseCard type="hidden" title="Hidden Test Cases" description="These are used to judge submissions and are hidden from users." testCases={formData.testCases} onTestCaseChange={handleTestCaseChange} onAddTestCase={addTestCase} onRemoveTestCase={removeTestCase} />
              </TabsContent>
            </Tabs>

            <div className="flex justify-end mt-8">
              <Button type="submit" disabled={createProblemMutation.isPending} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50">
                <Save className="mr-2 h-5 w-5" />
                {createProblemMutation.isPending ? 'Creating...' : 'Create Problem'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

// Helper component for Textarea sections to reduce repetition
const TextareaSection = ({ label, field, value, onChange, placeholder }) => (
  <div>
    <Label htmlFor={field} className="text-slate-300">{label}</Label>
    <Textarea
      id={field}
      value={value}
      onChange={(e) => onChange(field, e.target.value)}
      rows={5}
      placeholder={placeholder}
      required
      className="bg-slate-700/50 border-slate-600 mt-2 text-white placeholder:text-slate-400 focus:border-purple-400"
    />
  </div>
);

// Helper component for Test Case cards to reduce repetition
const TestCaseCard = ({ type, title, description, testCases, onTestCaseChange, onAddTestCase, onRemoveTestCase }) => (
  <Card className="border-slate-700 bg-slate-800/30 backdrop-blur-lg text-white">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-slate-400">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <TooltipProvider>
        {testCases.map((testCase, index) => (
          <div key={index} className="border border-slate-700 rounded-lg p-4 mb-4 bg-slate-900/30">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium text-slate-200">{type === 'sample' ? 'Sample' : 'Test'} Case {index + 1}</h4>
              {testCases.length > 1 && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button type="button" variant="ghost" size="icon" onClick={() => onRemoveTestCase(type, index)} className="text-slate-400 hover:text-red-400 hover:bg-red-500/10">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-800 border-slate-700 text-white"><p>Remove Test Case</p></TooltipContent>
                </Tooltip>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label className="text-slate-300">Input</Label>
                <Textarea value={testCase.input} onChange={(e) => onTestCaseChange(type, index, 'input', e.target.value)} rows={4} placeholder="Test input..." required className="bg-slate-700/50 border-slate-600 mt-2 text-white placeholder:text-slate-400 focus:border-purple-400" />
              </div>
              <div>
                <Label className="text-slate-300">Output</Label>
                <Textarea value={testCase.output} onChange={(e) => onTestCaseChange(type, index, 'output', e.target.value)} rows={4} placeholder="Expected output..." required className="bg-slate-700/50 border-slate-600 mt-2 text-white placeholder:text-slate-400 focus:border-purple-400" />
              </div>
            </div>
          </div>
        ))}
      </TooltipProvider>
      <Button type="button" onClick={() => onAddTestCase(type)} variant="outline" className="mt-4 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300">
        <Plus className="mr-2 h-4 w-4" />
        Add {type === 'sample' ? 'Sample' : ''} Test Case
      </Button>
    </CardContent>
  </Card>
);


export default CreateProblemPage;