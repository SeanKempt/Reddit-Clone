import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CreatePostCard from './CreatePostCard';
import PostFilter from './PostFilter';
import PostCard from './PostCard';

const Home = ({
  postInput,
  handlePostBodyChange,
  handlePostTitleChange,
  handleCreatePost,
  resetPostInput,
  posts,
  handleUpvote,
  handleDownvote,
}) => (
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
      <Link to={`/post/${post.id}`} className="postlink" key={post.id}>
        <PostCard
          postValues={post}
          handleUpvote={handleUpvote}
          handleDownvote={handleDownvote}
        />
      </Link>
    ))}
  </main>
);

Home.propTypes = {
  postInput: PropTypes.object,
  handleUpvote: PropTypes.func,
  handleDownvote: PropTypes.func,
  handlePostBodyChange: PropTypes.func,
  handlePostTitleChange: PropTypes.func,
  handleCreatePost: PropTypes.func,
  resetPostInput: PropTypes.func,
  posts: PropTypes.array,
};

export default Home;
