import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, Users, BarChart3, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Calculate Your Carbon Footprint
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Make a difference by understanding and reducing your environmental impact
            </p>
            <Link
              to="/calculations"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-green-100 transition-colors"
            >
              Start Calculating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose EcoTrack?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Calculations</h3>
              <p className="text-gray-600">
                Get precise measurements of your carbon footprint based on your lifestyle and habits
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Join a community of environmentally conscious individuals sharing tips and experiences
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-600">
                See how your actions contribute to global environmental conservation efforts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of others who are taking steps to reduce their carbon footprint
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;