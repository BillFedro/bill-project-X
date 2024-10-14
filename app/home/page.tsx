"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../components/Layout";
// import Feed from "../components/Feeds";

import {
  Image as ImageIcon,
  BarChart2,
  Smile,
  Paperclip,
  MapPin,
} from "lucide-react";

const HomePage = () => {
  const router = useRouter();
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState<{ content: string; date: string }[]>([]);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      router.push("/");
    }
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(savedPosts);
  }, [router]);

  const handlePost = () => {
    const newPost = { content: postContent, date: new Date().toISOString() };
    const updatedPosts = [...posts, newPost];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    setPostContent("");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/");
  };

  return (
    <Layout>
      <div className="p-4 border border-gray-800">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            M
          </div>
          <input
            type="text"
            placeholder="What is happening?!"
            className="bg-transparent flex-grow outline-none text-white"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <ImageIcon size={20} className="text-blue-400" />
            <BarChart2 size={20} className="text-blue-400" />
            <Smile size={20} className="text-blue-400" />
            <Paperclip size={20} className="text-blue-400" />
            <MapPin size={20} className="text-blue-400" />
          </div>
          <button
            onClick={handlePost}
            className="bg-blue-500 text-white px-4 py-1 rounded-full font-bold"
          >
            Post
          </button>
        </div>
      </div>

      {/* render post */}
      <div className="mt-4">
        {posts.map((post, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-800">
            <div className="text-white">{post.content}</div>
            <div className="text-gray-500 text-sm">
              {new Date(post.date).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </Layout>
  );
};

export default HomePage;
