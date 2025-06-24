import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
import { Editor } from '@monaco-editor/react';
import { Play, Send, Settings, RotateCcw, Copy } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Textarea } from '../../components/ui/textarea';
import { Separator } from '../../components/ui/separator';
import Layout from '../../components/layout/Layout';
// import LoadingSpinner from '../../components/common/LoadingSpinner';
// import { problemsService } from '../../services/problems';
import { useToast } from '../../hooks/use-toast';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { ScrollArea } from '../../components/ui/scroll-area';
// --- Hardcoded Dummy Data ---
const dummyProblem = {
  id: '1',
  title: 'Two Sum',
  difficulty: 'easy',
  tags: ['Array', 'Hash Table', 'Data Structures'],
  statement: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
  inputFormat: `The first line contains a comma-separated list of integers representing the array \`nums\`.
The second line contains an integer representing the \`target\`.`,
  outputFormat: `Return an array of two integers representing the zero-based indices of the two numbers.`,
  sampleTestCases: [
    {
      input: 'nums = [2, 7, 11, 15], target = 9',
      output: '[0, 1]',
    },
    {
      input: 'nums = [3, 2, 4], target = 6',
      output: '[1, 2]',
    },
    {
      input: 'nums = [3, 3], target = 6',
      output: '[0, 1]',
    },
  ],
  constraints: `• 2 <= nums.length <= 10^4
• -10^9 <= nums[i] <= 10^9
• -10^9 <= target <= 10^9
• Only one valid answer exists.`,
};


const ProblemViewPage = () => {
  // const { id } = useParams(); // Not needed for hardcoded data
  const { toast } = useToast();
  const [code, setCode] = useState(`function twoSum(nums, target) {
    // Write your solution here
    
}`);
  const [customInput, setCustomInput] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [language, setLanguage] = useState('javascript');

  // --- Start of Commented Out Logic ---
  // const { data: problem, isLoading } = useQuery({
  //   queryKey: ['problem', id],
  //   queryFn: () => problemsService.getProblemById(id),
  //   enabled: !!id,
  // });
  
  // Use the hardcoded data directly
  const problem = dummyProblem;
  // --- End of Commented Out Logic ---


  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'hard':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const handleRun = async () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutput('Output:\n[2, 3]\n\nExecution time: 72ms\nMemory usage: 42.1 MB');
      setIsRunning(false);
      toast({
        title: "Code Executed",
        description: "Your code ran successfully!",
      });
    }, 1500);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Submission Successful",
        description: "Your solution passed all test cases!",
      });
    }, 2000);
  };

  const handleReset = () => {
    setCode(`function twoSum(nums, target) {
    // Write your solution here
    
}`);
    setOutput('');
    setCustomInput('');
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied",
      description: "Code copied to clipboard!",
    });
  };

  // --- Start of Commented Out Loading/Error States ---
  // if (isLoading) {
  //   return (
  //     <Layout>
  //       <div className="min-h-screen bg-slate-950 flex items-center justify-center">
  //         <LoadingSpinner size="lg" />
  //       </div>
  //     </Layout>
  //   );
  // }

  // if (!problem) {
  //   return (
  //     <Layout>
  //       <div className="min-h-screen bg-slate-950 flex items-center justify-center">
  //         <div className="text-white text-xl">Problem not found</div>
  //       </div>
  //     </Layout>
  //   );
  // }
  // --- End of Commented Out Loading/Error States ---

  return (
    <Layout showFooter={false}>
      <div className="h-screen bg-slate-950 text-white overflow-hidden">
        <PanelGroup direction="horizontal" className="h-full">
          {/* Left Panel - Problem Description */}
          <Panel defaultSize={50} minSize={30}>
            <div className="h-full bg-slate-950 border-r border-slate-800">
              <ScrollArea className="h-full">
                <div className="p-6">
                  {/* Problem Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h1 className="text-2xl font-bold text-white">{problem.title}</h1>
                      <Badge className={`${getDifficultyColor(problem.difficulty)} border`}>
                        {problem.difficulty.toUpperCase()}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {problem.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-slate-600 text-slate-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-slate-800 mb-6" />

                  {/* Problem Statement */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-slate-200">Problem Statement</h3>
                      <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                        {problem.statement}
                      </div>
                    </div>

                    {/* Input Format */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-slate-200">Input Format</h3>
                      <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                        <code className="text-slate-300 text-sm whitespace-pre-line">
                          {problem.inputFormat}
                        </code>
                      </div>
                    </div>

                    {/* Output Format */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-slate-200">Output Format</h3>
                      <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                        <code className="text-slate-300 text-sm whitespace-pre-line">
                          {problem.outputFormat}
                        </code>
                      </div>
                    </div>

                    {/* Sample Test Cases */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-slate-200">Examples</h3>
                      {problem.sampleTestCases.map((testCase, index) => (
                        <div key={index} className="mb-4 bg-slate-900/30 p-4 rounded-lg border border-slate-800">
                          <div className="font-medium text-slate-200 mb-2">Example {index + 1}:</div>
                          <div className="grid grid-cols-1 gap-3">
                            <div>
                              <div className="text-sm font-medium text-slate-400 mb-1">Input:</div>
                              <div className="bg-slate-900 p-2 rounded border border-slate-700">
                                <code className="text-green-400 text-sm">{testCase.input}</code>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-400 mb-1">Output:</div>
                              <div className="bg-slate-900 p-2 rounded border border-slate-700">
                                <code className="text-blue-400 text-sm">{testCase.output}</code>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Constraints */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-slate-200">Constraints</h3>
                      <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                        <code className="text-slate-300 text-sm whitespace-pre-line">
                          {problem.constraints}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </Panel>

          <PanelResizeHandle withHandle />

          {/* Right Panel - Code Editor and Test Cases */}
          <Panel defaultSize={50} minSize={30}>
            <PanelGroup direction="vertical">
              {/* Code Editor Panel */}
              <Panel defaultSize={70} minSize={40}>
                <div className="h-full bg-slate-950 flex flex-col">
                  {/* Editor Header */}
                  <div className="border-b border-slate-800 p-4 flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <select 
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          className="bg-slate-800 border border-slate-700 rounded px-3 py-1 text-white text-sm focus:outline-none focus:border-slate-600"
                        >
                          <option value="javascript">JavaScript</option>
                          <option value="python">Python</option>
                          <option value="java">Java</option>
                          <option value="cpp">C++</option>
                        </select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={copyCode}
                          className="text-slate-400 hover:text-white hover:bg-slate-800"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleReset}
                          className="text-slate-400 hover:text-white hover:bg-slate-800"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-slate-400 hover:text-white hover:bg-slate-800"
                        >
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Code Editor */}
                  <div className="flex-1">
                    <Editor
                      height="100%"
                      language={language}
                      value={code}
                      onChange={(value) => setCode(value || '')}
                      theme="vs-dark"
                      options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineHeight: 21,
                        fontFamily: 'JetBrains Mono, Consolas, Monaco, monospace',
                        scrollBeyondLastLine: false,
                        renderLineHighlight: 'line',
                        automaticLayout: true,
                        tabSize: 2,
                        wordWrap: 'on',
                        lineNumbers: 'on',
                        glyphMargin: false,
                        folding: false,
                        lineDecorationsWidth: 0,
                        lineNumbersMinChars: 3,
                      }}
                    />
                  </div>
                </div>
              </Panel>

              <PanelResizeHandle withHandle />

              {/* Bottom Panel - Test Cases */}
              <Panel defaultSize={30} minSize={20}>
                <div className="h-full bg-slate-950 border-t border-slate-800">
                  <Tabs defaultValue="testcase" className="w-full h-full flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 flex-shrink-0">
                      <TabsList className="bg-slate-900 border border-slate-700">
                        <TabsTrigger value="testcase" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
                          Testcase
                        </TabsTrigger>
                        <TabsTrigger value="result" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
                          Result
                        </TabsTrigger>
                      </TabsList>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          onClick={handleRun}
                          disabled={isRunning}
                          size="sm"
                          className="bg-slate-700 hover:bg-slate-600 text-white border border-slate-600"
                        >
                          {isRunning ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Running...
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Run
                            </>
                          )}
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Submit
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="flex-1 overflow-hidden">
                      <TabsContent value="testcase" className="h-full p-4 overflow-hidden">
                        <ScrollArea className="h-full">
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">
                                Custom Input
                              </label>
                              <Textarea
                                value={customInput}
                                onChange={(e) => setCustomInput(e.target.value)}
                                placeholder="Enter your test input..."
                                className="bg-slate-900 border-slate-700 text-white resize-none h-24"
                              />
                            </div>
                          </div>
                        </ScrollArea>
                      </TabsContent>
                      
                      <TabsContent value="result" className="h-full p-4 overflow-hidden">
                        <ScrollArea className="h-full">
                          <div className="bg-slate-900 border border-slate-700 rounded p-3 h-full">
                            <pre className="text-slate-300 text-sm whitespace-pre-wrap">
                              {output || 'Run your code to see the output here...'}
                            </pre>
                          </div>
                        </ScrollArea>
                      </TabsContent>
                    </div>
                  </Tabs>
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </Layout>
  );
};

export default ProblemViewPage;