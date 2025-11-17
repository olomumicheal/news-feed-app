// src/pages/SinglePost.tsx
import React from 'react';
// We'll reuse the Header from the main design
import Header from '../components/Header';

// Stable, high-quality image URL for the hero banner
const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2670&auto=format&fit=crop';
const AVATAR_URL = 'https://i.imgur.com/G34yY5W.png'; // Reusing avatar image

// Static placeholder data to match the design elements
const mockArticle = {
  title: "Tech Giants Unveil New Innovations at Annual Conference",
  author: "Amelia Harper",
  date: "July 26, 2024",
  body: "The annual Tech Innovators Conference wrapped up yesterday, showcasing groundbreaking advancements from leading technology companies. This year's event highlighted innovations in artificial intelligence, sustainable technology, and virtual reality, setting the stage for future industry trends. Keynote speakers from around major firms presented their latest products and strategies, emphasizing a commitment to user-centric design and ethical considerations in technology development. The conference also featured interactive workshops and mentorships, allowing attendees to experience the new technologies firsthand and engage with industry experts. The overall sentiment was optimistic, with a strong focus on collaboration and the potential for technology to address global challenges.",
  related: [
    { title: "The Future of AI: Trends and Predictions", category: "Technology" },
    { title: "Sustainable Tech: Innovations for a Greener Future", category: "Technology" }
  ],
  comments: [
    { name: "Ethan Carter", text: "Great coverage of the conference! It’s exciting to see the progress in AI and sustainable tech.", date: "July 27, 2024", avatar: AVATAR_URL },
    { name: "Olivia Bennett", text: "I agree! The focus on ethical considerations is also very important.", date: "July 27, 2024", avatar: 'https://i.imgur.com/rN9yB1A.png' }
  ]
};

const SinglePost: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Note: Header used here is the simplified version from the single post design */}
      <Header onSearch={() => {}} />

      <main className="container mx-auto px-6 py-8">
        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-blue-600 font-medium mb-2 uppercase tracking-wider">Technology / NewsToday</p>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            {mockArticle.title}
          </h1>
          <p className="text-md text-gray-600 mt-2">
            By **{mockArticle.author}** &bull; Published on {mockArticle.date}
          </p>
        </div>

        {/* Large Image/Video Hero Section - Now showing brightly */}
        <div className="max-w-5xl mx-auto mt-8 h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={HERO_IMAGE_URL} 
            alt="Hero image: Tech conference stage with bright screens"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body and Actions */}
        <div className="max-w-4xl mx-auto mt-12">
          
          {/* Main Body */}
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
            {mockArticle.body}
          </p>

          {/* Likes, Save, Share Bar */}
          <div className="flex items-center space-x-8 mt-10 pt-6 border-t border-gray-200 text-gray-500 font-medium">
            <span className="flex items-center space-x-2 cursor-pointer hover:text-red-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              <span>1.2K</span>
            </span>
            <span className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C5.354 15.341 6 12.71 6 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              <span>34</span>
            </span>
            <span className="flex items-center space-x-2 cursor-pointer hover:text-green-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5-7 3.5V5z" /></svg>
              <span>Save</span>
            </span>
            <span className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.882 13.142 9 12.87 9 12.599v-1.198c0-.271-.118-.541-.316-.741L10 8l-2-2m-3 3l2 2-2 2M15 11l-3 3m0 0l-3-3m3 3v2m3-3l-2-2 2-2M13 18v2m-3-2v2" /></svg>
              <span>Share</span>
            </span>
          </div>

          {/* Related Articles Section */}
          <h2 className="text-2xl font-bold text-gray-800 mt-16 mb-6">More from Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {mockArticle.related.map((item, index) => (
              <a href="#" key={index} className="block group p-6 bg-white border border-gray-100 rounded-xl transition hover:shadow-lg">
                <div className="flex space-x-4">
                    {/* Related Article Icon/Placeholder */}
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center text-2xl font-light border border-blue-200">
                        {item.category.slice(0, 1)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 uppercase mb-1">{item.category}</p>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition leading-snug">
                          {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 group-hover:underline">Explore &rarr;</p>
                    </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Comments Section */}
          <h2 className="text-2xl font-bold text-gray-800 mt-16 mb-8 border-t pt-8">Comments ({mockArticle.comments.length})</h2>
          {mockArticle.comments.map((comment, index) => (
            <div key={index} className="flex space-x-4 mb-6 pb-6 border-b border-gray-100 last:border-b-0">
              <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden">
                {/* Comment Avatar */}
                 <img src={comment.avatar || 'https://via.placeholder.com/40'} alt={comment.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                    {comment.name} 
                    <span className="text-xs font-normal text-gray-500 ml-3">
                        {comment.date}
                    </span>
                </p>
                <p className="text-gray-700 mt-1">{comment.text}</p>
                <button className="text-sm text-gray-500 mt-2 hover:text-blue-600">Reply</button>
              </div>
            </div>
          ))}

          {/* Add a Comment Box */}
          <div className="mt-10 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Leave a Comment</h3>
            <textarea
              placeholder="Join the discussion..."
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            ></textarea>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 float-right shadow-md">
              Post Comment
            </button>
            <div className="clearfix"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SinglePost;