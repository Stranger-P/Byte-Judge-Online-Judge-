import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Something Went Wrong</h2>
            <p className="text-gray-600 mb-4">An unexpected error occurred. Please try again.</p>
            <a
              href="/"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Go to Home
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;