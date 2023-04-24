import PropTypes from 'prop-types';

const PostCard = ({ postValues, handleUpvote }) => (
  <section className="postcard__container">
    <div className="post__upvotes">
      <i
        className="bi bi-arrow-up-circle post__upvotes--arrow"
        onClick={(e) => {
          e.preventDefault();
          handleUpvote(postValues.id);
        }}
        onKeyUp={() => handleUpvote(postValues.id)}
        role="button"
        tabIndex={0}
        aria-label="upvote"
      />
      {postValues.upvotes}
      <i className="bi bi-arrow-down-circle post__upvotes--arrow" />
    </div>
    <article className="post">
      <p className="post__data">community - posted by {postValues.user}</p>
      <p className="post__title">{postValues.title}</p>
      <p className="post__body">{postValues.body}</p>
      <div className="post__utils">
        <ul className="post__utils--buttons">
          <li>
            <i className="bi bi-chat-left" />
            Comments
          </li>
          <li>
            <i className="bi bi-share" />
            Share
          </li>
        </ul>
      </div>
    </article>
  </section>
);

PostCard.propTypes = {
  postValues: PropTypes.object,
  handleUpvote: PropTypes.func,
};

export default PostCard;
