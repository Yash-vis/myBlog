"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";

export default function AddPost() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    date: "",
    paragraph: "",
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts((prev) => [
      ...prev,
      { ...formData, emoji: "🤍", likeCount: 0 },
    ]);
    setFormData({ title: "", image: "", date: "", paragraph: "" });
    setShowForm(false);
  };

  const handleAddPostClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleLike = (index) => {
    setPosts((prev) =>
      prev.map((post, i) =>
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

  return (
    <>
      <Navbar className="bg-black py-2 fixed w-full top-0 left-0 z-50" />

      <div className="container mx-auto px-4 py-8 pt-24">
        {session && !showForm && (
          <button
            onClick={handleAddPostClick}
            className="bg-blue-500 text-white px-6 py-3 rounded-full absolute bottom-4 right-4 hover:bg-blue-600 focus:outline-none shadow-lg"
          >
            Add Post
          </button>
        )}

        {showForm && (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6 relative">
            <button
              onClick={handleFormClose}
              className="absolute top-0 right-0 m-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none shadow-lg"
            >
              X
            </button>
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add a New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Paragraph</label>
                <textarea
                  name="paragraph"
                  value={formData.paragraph}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none shadow-lg"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        )}

        {session ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <div key={index} className="border p-6 rounded-lg shadow-md bg-white space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <p className="text-gray-600">{post.paragraph}</p>
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
