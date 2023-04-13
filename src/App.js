import './sass/reset.scss';
import './sass/styles.scss';
import uniqid from 'uniqid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostCard from './components/PostCard.jsx';
import Header from './components/Header';
import CreatePostCard from './components/CreatePostCard';
import PostFilter from './components/PostFilter';

const App = () => {
  const [search, setSearch] = useState('');
  const [postInput, setPostInput] = useState({ body: '', title: '' });
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

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

  const handleNavigateToPost = () => {
    navigate('/Post');
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

  return (
    <div className="pagewrapper">
      <Header search={search} handleSearch={handleSearchInputChange} />
      <main className="main">
        <CreatePostCard
          postInput={postInput}
          handlePostBodyChange={handlePostBodyChange}
          handlePostTitleChange={handlePostTitleChange}
          handleCreatePost={handleCreatePost}
          resetPostInput={resetPostInput}
        />
        <PostFilter />
        {posts.map((post) => (
          <PostCard
            handleNavigateToPost={handleNavigateToPost}
            postValues={post}
            key={post.id}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
