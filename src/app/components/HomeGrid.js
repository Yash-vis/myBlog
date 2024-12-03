"use client"
import React, { useEffect, useState } from "react";

const categories = ["technology", "business", "science", "health", "sports"];

const HomeGrid = () => {
  const [articles, setArticles] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("technology");

  const fetchNews = async (category, retries = 3) => {
    const apiKey = "3ffb6ea726f34bd4adfd6fbd76a2ea74";
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&pageSize=3&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      if (response.status === 429) {
        throw new Error("Rate limit exceeded");
      }
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      if (retries > 0 && error.message === "Rate limit exceeded") {
        setTimeout(() => fetchNews(category, retries - 1), 30000);
      } else {
        console.error("Error fetching the news:", error);
        setArticles([]);
      }
    }
  };

  useEffect(() => {
    fetchNews(currentCategory);

    const interval = setInterval(() => {
      const nextCategoryIndex = (categories.indexOf(currentCategory) + 1) % categories.length;
      setCurrentCategory(categories[nextCategoryIndex]);
    }, 600000);

    return () => clearInterval(interval);
  }, [currentCategory]);

  useEffect(() => {
    fetchNews(currentCategory);
  }, [currentCategory]);

  return (
    <div className="absolute p-24 sm:py-16 py-5 -mx-12 sm:mx-0">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Hot News
        </h2>
        <span className="sm:text-sm text-xs font-semibold sm:text-gray-500 mt-2 sm:mt-0 text-transparent">
          Current Category: {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow sm:w-auto sm:h-auto h-72 -my-10 sm:my-0 ">
        {Array.isArray(articles) && articles.length > 0 ? (
          articles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 h-40 sm:h-auto"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full sm:h-40 h-20 object-cover rounded-t-md"
                />
              )}
              <div className="sm:p-4 p-1">
                <h5 className="text-md font-bold truncate text-gray-800">{article.title}</h5>
                <p className="text-gray-600 text-sm truncate">
                  {article.description || "No description available"}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default HomeGrid;
