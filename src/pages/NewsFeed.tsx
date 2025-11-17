// src/pages/NewsFeed.tsx
import React from 'react';
import useNewsApi from '../hooks/useNewsApi';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import ArticleCard from '../components/ArticleCard';
// We'll create simple Loader and ErrorState components below
import Loader from '../components/Loader';
import ErrorState from '../components/ErrorState';

const NewsFeed: React.FC = () => {
  const { articles, loading, error, setCategory, setSearchTerm, category } = useNewsApi();

  // The first article will be used for the large "Breaking" banner design
  const breakingArticle = articles.length > 0 ? articles[0] : null;
  // Remaining articles for the "Recent Articles" grid
  const recentArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={setSearchTerm} />

      <main className="container mx-auto px-6 pt-4 pb-12">
        {loading && <Loader />}
        {error && <ErrorState message={error} />}

        {!loading && !error && (
          <>
            {/* --- 1. The Large "Breaking" Banner (Simulating the Post Archive Top Section) --- */}
            {breakingArticle && (
              <div className="mb-8">
                <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                  {/* Image with Dark Overlay */}
                  <img
                    src={breakingArticle.urlToImage || 'https://via.placeholder.com/1200x400?text=Breaking+News'}
                    alt={breakingArticle.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  {/* Gradient to darken the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 p-8 text-white w-full lg:w-3/4">
                    <h2 className="text-sm font-light uppercase text-blue-300 mb-2">
                        BREAKING: MAJOR POLITICAL EVENT UNFOLDS
                    </h2>
                    <p className="text-4xl font-bold leading-tight">
                      {breakingArticle.title}
                    </p>
                    <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* --- 2. Recent Articles Section Header and Filter Bar --- */}
            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Recent Articles</h2>

            <FilterBar activeCategory={category} onCategoryChange={setCategory} />
            
            {/* --- 3. The Grid of Article Cards --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {recentArticles.map((article, index) => (
                // Use the simplified ArticleCard for the grid items
                <ArticleCard key={index} article={article} />
              ))}
            </div>
            
            {recentArticles.length === 0 && (
                <p className="text-center text-gray-500 py-12">No articles found for this selection.</p>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default NewsFeed;