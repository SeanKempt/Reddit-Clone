import { useState } from 'react';
import Header from './Header.jsx';
import PostCard from './PostCard.jsx';
import CommentCard from './CommentCard';

const Post = () => {
  const [comment, setComment] = useState('');

  const handleCommentInputChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="pagewrapper">
      <Header />
      <main className="fullpost main">
        <div className="fullpost__container">
          <PostCard />
          <div className="fullpost__comments">
            <p className="fullpost__comments--name">Comment as testuser.</p>
            <textarea
              name="commententer"
              cols="70"
              rows="5"
              value={comment}
              placeholder="Whats your comment?"
              onChange={handleCommentInputChange}
              className="fullpost__comments--text"
            />
            <button type="button" className="fullpost__comments--button">
              Comment
            </button>
            <hr />
          </div>
          <CommentCard />
        </div>
      </main>
    </div>
  );
};

export default Post;
