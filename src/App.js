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

  const handleCreatePost = (title, body, user) =>
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
              />
            }
          />
        </Route>
        <Route path="/post/:postId" element={<Post postData={posts} />} />
      </Routes>
    </div>
  );
};

export default App;
