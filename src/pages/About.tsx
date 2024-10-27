import React from 'react';
import { Leaf, Globe, Users, TreePine } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About EcoTrack</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              We're on a mission to help individuals and communities understand
              and reduce their environmental impact.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At EcoTrack, we believe that understanding your carbon footprint
                is the first step toward making meaningful environmental
                changes. Our platform provides accurate, easy-to-understand
                calculations and actionable recommendations.
              </p>
              <p className="text-gray-600">
                We combine cutting-edge technology with environmental science to
                deliver precise measurements and personalized suggestions for
                reducing your carbon footprint.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <Globe className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Global Impact</h3>
                <p className="text-sm text-gray-600">
                  Making a difference on a global scale through individual
                  actions
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <Users className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-gray-600">
                  Building a network of environmentally conscious individuals
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <Leaf className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Sustainability</h3>
                <p className="text-sm text-gray-600">
                  Promoting sustainable lifestyle choices
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <TreePine className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-gray-600">
                  Spreading awareness about environmental impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Impact Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Medical and Electronic Product Pollution
            </h2>
            <p className="text-gray-600 mb-4">
              The rapid consumption of medical and electronic products
              contributes significantly to pollution. Here's how these
              industries affect the environment and what's being done globally
              to combat it:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Medical Product Pollution
              </h3>
              <p className="text-gray-600">
                The disposal of medical products, such as single-use plastics,
                generates large amounts of waste. These products are often
                incinerated, releasing harmful emissions, or dumped in
                landfills, where they leach toxic substances into the
                environment.
                <a
                  href="https://www.who.int/news-room/fact-sheets/detail/health-care-waste"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-green-600 underline"
                >
                  Learn more about medical waste management
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Electronic Product Pollution
              </h3>
              <p className="text-gray-600">
                Electronics manufacturing involves mining rare materials and
                uses energy-intensive processes, which contribute significantly
                to greenhouse gas emissions. E-waste from discarded devices
                further pollutes the environment, as many are improperly
                disposed of.
                <a
                  href="https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)#:~:text=E%2Dwaste%20contains%20several%20known,and%20function%20of%20the%20lungs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-green-600 underline"
                >
                  Learn more about e-waste impact
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Projects Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Global Initiatives Tackling Carbon Footprints
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">
                The Great Green Wall (Africa)
              </h3>
              <p className="text-sm text-gray-600">
                A large-scale reforestation effort aimed at combating
                desertification and restoring land in the Sahel region of Africa
                by planting trees along an 8,000 km stretch.
                <a
                  href="https://www.greatgreenwall.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">
                Reforestation in the Amazon (South America)
              </h3>
              <p className="text-sm text-gray-600">
                A project focused on restoring large parts of the Amazon
                Rainforest to absorb CO2 and protect biodiversity through
                sustainable land management and reforestation.
                <a
                  href="https://www.rainforest-alliance.org/amazon-reforestation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">
                Zero-Carbon Tokyo Transportation (Japan)
              </h3>
              <p className="text-sm text-gray-600">
                Tokyo is transitioning to electric and low-emission public
                transport to reduce urban pollution and achieve zero carbon
                emissions from the transportation sector.
                <a
                  href="https://www.metro.tokyo.lg.jp/english/topics/2020/0226_01.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Green Planet Fund</h3>
              <p className="text-sm text-gray-600">
                A global initiative that supports renewable energy projects,
                sustainable agriculture, and eco-friendly technologies by
                providing financial backing to reduce global carbon emissions.
                <a
                  href="https://www.greenclimate.fund/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">
                China's EV Infrastructure
              </h3>
              <p className="text-sm text-gray-600">
                China is investing in electric vehicle infrastructure, rapidly
                expanding charging stations and promoting EV adoption to reduce
                emissions from transportation.
                <a
                  href="https://www.ev-volumes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">
                The Oyster Project (New York, USA)
              </h3>
              <p className="text-sm text-gray-600">
                A project that restores oyster reefs around New York to improve
                water quality and create carbon sinks, helping combat ocean
                acidification and sequester carbon.
                <a
                  href="https://www.billionoysterproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">
                Green Building Movement (Global)
              </h3>
              <p className="text-sm text-gray-600">
                The global green building movement promotes energy-efficient and
                sustainable construction practices, including using eco-friendly
                materials and implementing renewable energy systems.
                <a
                  href="https://www.worldgbc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
