import './sass/reset.scss';
import './sass/styles.scss';
import uniqid from 'uniqid';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Layout from './components/Layout';
import Post from './components/Post';

const App = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [postInput, setPostInput] = useState({ body: '', title: '' });
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState('Johnson');

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePostBodyChange = (e) => {
    setPostInput({
      ...postInput,
      body: e.target.value,
    });
  };

  const handlePostTitleChange = (e) => {
    setPostInput({
      ...postInput,
      title: e.target.value,
    });
  };

  const handleCreatePost = (title, body) =>
    setPosts([
      ...posts,
      { title, body, id: uniqid(), createdBy: user, upvotes: 0 },
    ]);

  const resetPostInput = () => {
    setPostInput({
      body: '',
      title: '',
    });
  };

  const getPost = (id) => {
    const post = posts.find((pt) => pt.id === id);
    return post ?? null;
  };

  const handlePostClick = (id) => {
    const post = getPost(id);
    navigate(`/post/${id}`, { state: post });
  };

  const handleVote = (id, type) => {
    const increment = type === 'upvote' ? 1 : -1;
    setPosts(
      posts.map((ps) => {
        if (ps.id === id) {
          return { ...ps, upvotes: (ps.upvotes += increment) };
        }
        return ps;
      })
    );
  };

  const handleUpvote = (id) => handleVote(id, 'upvote');
  const handleDownvote = (id) => handleVote(id, 'downvote');

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              search={search}
              handleSearchInputChange={handleSearchInputChange}
            />
          }
        >
          <Route
            index
            element={
              <Home
                posts={posts}
                handlePostClick={handlePostClick}
                handlePostTitleChange={handlePostTitleChange}
                handlePostBodyChange={handlePostBodyChange}
                handleCreatePost={handleCreatePost}
                resetPostInput={resetPostInput}
                postInput={postInput}
                handleUpvote={handleUpvote}
                handleDownvote={handleDownvote}
              />
            }
          />
        </Route>
        <Route
          path="/post/:postId"
          element={
            <Post
              postData={posts}
              handleUpvote={handleUpvote}
              handleDownvote={handleDownvote}
              user={user}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
