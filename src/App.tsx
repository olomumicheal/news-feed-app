import React, { useState } from 'react';
import NewsFeed from './pages/NewsFeed';       
import SinglePost from './pages/singlePost'; 

const App: React.FC = () => {
  const [view, setView] = useState<'feed' | 'post'>('feed');

  const toggleView = () => {
    setView((prevView) => (prevView === 'feed' ? 'post' : 'feed'));
  };

  return (
    <>
      {/* Simple Toggle Button for Demonstration */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleView}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-xl hover:bg-blue-700 transition-colors text-sm"
        >
          {view === 'feed' ? 'Switch to Single Post View' : 'Switch back to News Feed'}
        </button>
      </div>

      {/* Render the selected view */}
      {view === 'feed' ? (
        // This is the correct way to render the component:
        <NewsFeed />
      ) : (
        <SinglePost />
      )}
    </>
  );
};

export default App;