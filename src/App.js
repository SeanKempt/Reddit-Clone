import './sass/reset.scss';
import './sass/styles.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostCard from './components/PostCard.jsx';
import Header from './components/Header';
import CreatePostCard from './components/CreatePostCard';
import PostFilter from './components/PostFilter';

const App = () => {
  const [search, setSearch] = useState('');
  const [postInput, setPostInput] = useState('');

  const navigate = useNavigate();

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePostInputChange = (e) => {
    setPostInput(e.target.value);
  };

  const handleNavigateToPost = () => {
    navigate('/Post');
  };

  return (
    <div className="pagewrapper">
      <Header search={search} handleSearch={handleSearchInputChange} />
      <main className="main">
        <CreatePostCard
          postInput={postInput}
          handlePostInputChange={handlePostInputChange}
        />
        <PostFilter />
        <PostCard handleNavigateToPost={handleNavigateToPost} />
        <PostCard />
      </main>
    </div>
  );
};

export default App;
