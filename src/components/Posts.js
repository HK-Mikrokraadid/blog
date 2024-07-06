import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import Post from './Post';
import { AuthContext } from './AuthContext';
import config from '../config';

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const { contextLogout } = useContext(AuthContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${config.API_URL}/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data.posts);
    } catch (error) {
      if (error.response.status === 401) {
        contextLogout();
        navigate('/login');
      }
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <h1 className="display-4">Posts</h1>
        <p>Kokku on {posts.length} postitust</p>
      </Row>
      <Row>
        {posts.map((post) => (
          <Post 
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.content}
            author={`${post.firstName} ${post.lastName}`}
            created_at={post.created_at}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
