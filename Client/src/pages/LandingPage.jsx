function LandingPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to CodeJudge
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Practice coding, solve challenges, and compete with others to become a
            better programmer.
          </p>
          <a
            href="/signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose CodeJudge?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Coding Challenges</h3>
              <p className="text-gray-600">
                Solve a variety of problems from easy to hard to sharpen your
                coding skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">User Profiles</h3>
              <p className="text-gray-600">
                Track your progress, view stats, and showcase your achievements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Leaderboards</h3>
              <p className="text-gray-600">
                Compete with others and climb the ranks to prove your skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;