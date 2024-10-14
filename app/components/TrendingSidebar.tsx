import React from "react";
import { Search } from "lucide-react";

interface TrendingTopic {
  hashtag: string;
  posts: string;
}

const TrendingSidebar: React.FC = () => {
  const trendingTopics: TrendingTopic[] = [
    { hashtag: "#Indonesia", posts: "20.9K" },
    { hashtag: "Nurul", posts: "45.1K" },
    { hashtag: "Guru Gembul", posts: "12.3K" },
    { hashtag: "Berani", posts: "21.9K" },
  ];
  return (
    <div className="bg-black text-white p-4 space-y-4  border-l border-gray-800 w-1/4 md:w-1/5">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2
       text-gray-400 size={20}"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-900 w-full py-2 pl-10 pr-4 rounded-full text-white
         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-gradient-to-r from-black-900 to-purple-900 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-2">Expiring soon!</h2>
        <p className="mb-4">Get up to 40% off X Premium</p>
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
          Learn more
        </button>
      </div>

      {/* Trends */}
      <div className="bg-black rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Trends for you</h2>
        {trendingTopics.map((topic, index) => (
          <div key={index} className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Trending in Indonesia</p>
              <p className="font-bold">{topic.hashtag}</p>
              <p className="text-gray-400 text-sm">{topic.posts} posts</p>
            </div>
            <button className="text-gray-400 hover:text-white">...</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSidebar;
