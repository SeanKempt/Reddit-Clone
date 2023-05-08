import './sass/reset.scss';
import './sass/styles.scss';
import uniqid from 'uniqid';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './components/Home.jsx';
import Layout from './components/Layout';
import Register from './components/Register';
import Post from './components/Post';
import {
  getCurrentSignedInUser,
  signOutCurrentUser,
  auth,
} from './helpers/firebase';
import Login from './components/Login';

const App = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [postInput, setPostInput] = useState({ body: '', title: '' });
  const [posts, setPosts] = useState([]);
  // This is an object with three properties (name, emailaddress, photoUrl), get populated after sign in
  const [user, setUser] = useState(null);

  // updates the user state in real time to monitor for changes in login
  useEffect(() => {
    const updateUser = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // user is signed in
        const { displayName, email, photoURL } = currentUser;
        setUser({
          name: displayName,
          emailaddress: email,
          profilepic: photoURL,
        });
      }
      // User is signed out
      setUser(null);
    });

    return () => {
      updateUser();
    };
  }, []);

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePostBodyChange = (e) => {
    setPostInput({
      ...postInput,
      body: e.target.value,
    });
  };

  const changeUserToCurrentUser = () => {
    const currentUser = getCurrentSignedInUser();
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

  const handleSignOut = () => {
    signOutCurrentUser();
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
              handleSignOut={handleSignOut}
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
                user={user}
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
