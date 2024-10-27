import React, { useState, useEffect } from 'react';
import { Search, Filter, RefreshCw, ExternalLink, Loader } from 'lucide-react';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  
  const apiKey = 'e8de13afb2a74787a21a0372b712a2a6'; // Replace with your actual API key

  const categories = [
    { id: 'all', label: 'All News' },
    { id: 'business', label: 'Business' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'health', label: 'Health' },
    { id: 'science', label: 'Science' },
    { id: 'sports', label: 'Sports' },
    { id: 'technology', label: 'Technology' },
  ];

  // Fetch news from the API
  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const categoryQuery = category === 'all' ? '' : `&category=${category}`;
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us${categoryQuery}&apiKey=${apiKey}`);
      
      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      console.log(data); // Log the fetched data for debugging
      setNews(data.articles);
    } catch (err) {
      console.error('Failed to fetch news:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // Filter news based on search term
  const filteredNews = news.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-center">Environmental News</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto text-center">
            Stay informed about the latest environmental developments and initiatives around the world.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>

            {/* Category Filter */}
            <div className="flex gap-4">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label}
                  </option>
                ))}
              </select>

              <button
                onClick={fetchNews}
                className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                title="Refresh news"
              >
                <RefreshCw className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader className="h-8 w-8 text-green-600 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.length > 0 ? (
              filteredNews.map((article) => (
                <div
                  key={article.url}
                  className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={article.urlToImage || '/api/placeholder/400/250'}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {article.source.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => window.open(article.url, '_blank')}
                        className="inline-flex items-center text-green-600 hover:text-green-700"
                      >
                        Read more <ExternalLink className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                No news articles found matching your criteria.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
