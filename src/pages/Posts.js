import { useEffect, useState } from 'react';
import axios from 'axios';
import './Posts.css';


function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyapi.io/data/v1/post?limit=10', {
      headers: { 'app-id': '6432a2d29daf8186234f7ed9' } // Replace with your own app ID
    })
    .then(response => setPosts(response.data.data)) 
    .catch(error => console.log(error));
  }, []);

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <div className="posts-wrapper">
        {Array.isArray(posts) && posts.map(post => (
          <div key={post.id} className="post-card">
            <h2>{post.text}</h2>
            <p>{post.createdAt}</p>
            <img src={post.image} alt={post.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
