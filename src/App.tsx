// src/App.tsx
import React from 'react';
import NewsFeed from './pages/NewsFeed';
// If you implement routing later, import the detail page here:
// import SinglePost from './pages/SinglePost';

const App: React.FC = () => {
  return (
    // In a real app, you'd use a router here to switch between NewsFeed and SinglePost
    <NewsFeed />
  );
};

export default App;