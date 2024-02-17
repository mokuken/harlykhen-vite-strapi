import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function Blogs() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/blogs');
  const [blogData, setBlogData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    if (!loading && !error && data) {
      setBlogData(data.data);
    }
  }, [loading, error, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleBlogButtonClick = (blogId) => {
    setSelectedBlog(blogId);
  };

  return (
    <div className="project-container">
      <div className="side-panel">
        {blogData.map(blog => (
          <button key={blog.id} onClick={() => handleBlogButtonClick(blog.id)}>
            {blog.attributes.blogTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {selectedBlog && (
          <p>{blogData.find(blog => blog.id === selectedBlog).attributes.blogContent}</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
