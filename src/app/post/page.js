"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Posts() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([
    {
      title: "Sunday will never be the same",
      image: "https://plus.unsplash.com/premium_photo-1661301106112-600d0474858f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      paragraph: "Today has been overwhelming as I juggle multiple tasks and learning new concepts. The weight of everything feels heavy, but I’m determined to push through and keep making progress.",
      emoji: "🤍",
      likeCount: 0,
      date: new Date().toLocaleString(),
    },
  ]);

  const [isReadMore, setIsReadMore] = useState(false);

  const handleLike = (index) => {
    setPosts((item) =>
      item.map((post, i) =>
        i === index
          ? {
              ...post,
              emoji: post.emoji === "🤍" ? "❤️" : "🤍",
              likeCount: post.emoji === "🤍" ? post.likeCount + 1 : post.likeCount - 1,
            }
          : post
      )
    );
  };

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <Navbar className="bg-black py-2 fixed w-full top-0 left-0 z-50" />

      <div className="container mx-auto px-4 py-8 pt-24 bg-gray-700">
        {session ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-100">Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <div key={index} className="border p-6 rounded-lg shadow-md bg-white space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <p className="text-gray-600">
                    {isReadMore ? post.paragraph : `${post.paragraph.substring(0, 100)}...`}
                  </p>
                  <button
                    onClick={handleReadMore}
                    className="text-blue-500 hover:underline"
                  >
                    {isReadMore ? "Read Less" : "Read More"}
                  </button>
                  <div className="flex gap-4">
                    <button onClick={() => handleLike(index)}>{post.emoji}</button>
                    <p className="text-gray-600">{post.likeCount} Likes</p>
                  </div>
                  <p className="text-gray-600">{new Date(post.date).toDateString()}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg font-medium text-gray-700">Please log in to view posts.</p>
          </div>
        )}
      </div>
    </>
  );
}
