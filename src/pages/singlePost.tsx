// src/pages/SinglePost.tsx
import React from 'react';
// We'll reuse the Header from the main design
import Header from '../components/Header';

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
    { name: "Ethan Carter", text: "Great coverage of the conference! It’s exciting to see the progress in AI and sustainable tech.", date: "July 27, 2024" },
    { name: "Olivia Bennett", text: "I agree! The focus on ethical considerations is also very important.", date: "July 27, 2024" }
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
          <p className="text-sm text-gray-500 mb-2">NewsToday &rsaquo; Technology</p>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            {mockArticle.title}
          </h1>
          <p className="text-md text-gray-600 mt-2">
            By **{mockArticle.author}** - Published on {mockArticle.date}
          </p>
        </div>

        {/* Large Image/Video Placeholder */}
        <div className="max-w-5xl mx-auto mt-8 h-[500px] bg-gray-200 rounded-lg overflow-hidden">
          {/*  */}
        </div>

        {/* Article Body and Actions */}
        <div className="max-w-4xl mx-auto mt-8">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
            {mockArticle.body}
          </p>

          {/* Likes, Save, Share Bar */}
          <div className="flex items-center space-x-6 mt-8 pt-4 border-t border-gray-100 text-gray-500">
            <span className="flex items-center space-x-1 cursor-pointer hover:text-red-500 transition">❤️ 1.2K</span>
            <span className="cursor-pointer hover:text-blue-600 transition">💬 34</span>
            <span className="cursor-pointer hover:text-green-600 transition">💾 Save</span>
            <span className="cursor-pointer hover:text-yellow-600 transition">🔗 Share</span>
          </div>

          {/* Related Articles Section */}
          <h2 className="text-xl font-bold text-gray-800 mt-12 mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-4">
            {mockArticle.related.map((item, index) => (
              <div key={index} className="flex space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                    {/*  */}
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-600 uppercase">{item.category}</p>
                  <h3 className="text-md font-semibold text-gray-800 mt-1 hover:underline">{item.title}</h3>
                  <a href="#" className="text-sm text-blue-600 mt-1 inline-block">Read More</a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Comments Section */}
          <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 border-t pt-8">Comments ({mockArticle.comments.length})</h2>
          {mockArticle.comments.map((comment, index) => (
            <div key={index} className="flex space-x-4 mb-6 pb-4 border-b last:border-b-0">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0">
                {/*  */}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{comment.name} <span className="text-xs font-normal text-gray-500 ml-2">{comment.date}</span></p>
                <p className="text-gray-700 mt-1">{comment.text}</p>
              </div>
            </div>
          ))}

          {/* Add a Comment Box */}
          <div className="mt-8 p-6 bg-gray-100 rounded-lg">
            <textarea
              placeholder="Add a comment..."
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            <button className="mt-3 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 float-right">
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