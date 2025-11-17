// src/components/ArticleCard.tsx
import React from 'react';

interface Article {
  title: string;
  source: { name: string };
  publishedAt: string;
  urlToImage: string | null;
  url: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  // Simple date formatting helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
  };

  const imageSrc = article.urlToImage || 'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className="block group">
      {/* Article Image Container */}
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden rounded-lg mb-4">
        <img
          src={imageSrc}
          alt={article.title}
          className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105"
          onError={(e) => {
             // Fallback if the image URL is broken
             e.currentTarget.src = 'https://via.placeholder.com/600x400?text=News+Article';
          }}
        />
      </div>

      {/* Article Text Content */}
      <div className="p-1">
        <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          {article.source.name} &bull; {formatDate(article.publishedAt)}
        </p>
      </div>
    </a>
  );
};

export default ArticleCard;