import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Header from './Header.jsx';
import PostCard from './PostCard.jsx';
import CommentCard from './CommentCard';

const Post = ({ postData, handleUpvote, handleDownvote, user }) => {
  const { postId } = useParams();
  const post = postData.find((pt) => pt.id === postId);
  const [comment, setComment] = useState('');
  const [postComments, setPostComments] = useState([
    { username: 'Yeppers', body: 'Hello World this is just a comment.' },
  ]);

  const handleCommentInputChange = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {
    setPostComments([...postComments, { username: user, body: comment }]);
    setComment('');
  };

  return (
    <div className="pagewrapper">
      <Header />
      <main className="fullpost main">
        <div className="fullpost__container">
          <PostCard
            postValues={post}
            handleUpvote={handleUpvote}
            handleDownvote={handleDownvote}
          />
          <div className="fullpost__comments">
            <p className="fullpost__comments--name">Comment as {user}.</p>
            <textarea
              name="commententer"
              cols="70"
              rows="5"
              value={comment}
              placeholder="Whats your comment?"
              onChange={handleCommentInputChange}
              className="fullpost__comments--text"
            />
            <button
              type="button"
              className="fullpost__comments--button"
              onClick={() => {
                handlePostComment();
              }}
            >
              Comment
            </button>
            <hr />
          </div>
          {postComments.map((ps) => (
            <CommentCard commentData={ps} key={uniqid()} />
          ))}
        </div>
      </main>
    </div>
  );
};

Post.propTypes = {
  postData: PropTypes.array,
  handleUpvote: PropTypes.func,
  handleDownvote: PropTypes.func,
  user: PropTypes.string,
};

export default Post;
