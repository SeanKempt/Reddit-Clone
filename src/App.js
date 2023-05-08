import './sass/reset.scss';
import './sass/styles.scss';
import uniqid from 'uniqid';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home.jsx';
import Layout from './components/Layout';
import Register from './components/Register';
import Post from './components/Post';
import { getCurrentSignedInUser } from './helpers/firebase';
import Login from './components/Login';

const App = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [postInput, setPostInput] = useState({ body: '', title: '' });
  const [posts, setPosts] = useState([]);
  // This is an object with three properties (name, emailaddress, photoUrl), get populated after sign in
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // todo: disable posting untill someone is signed into the page
  // todo: if user is signed in then you should show a sign out button. If they aren't signed in then just show only the sign in button
  // todo: need to fix whatever is going on with the sign in, its not signing in on the first try it'll say that the user is still logged out.

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePostBodyChange = (e) => {
    setPostInput({
      ...postInput,
      body: e.target.value,
    });
  };

  const changeUserToCurrentUser = async () => {
    const currentUser = await getCurrentSignedInUser();
    setIsLoggedIn(true);
    setUser(currentUser);
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
      { title, body, id: uniqid(), createdBy: user.name, upvotes: 0 },
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
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register changeUserToCurrentUser={changeUserToCurrentUser} />
            }
          />
          <Route
            path="/login"
            element={
              <Login changeUserToCurrentUser={changeUserToCurrentUser} />
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
