import PropTypes from 'prop-types';

const CommentCard = ({ commentData }) => (
  <div className="comment">
    <p className="comment__user">{commentData.username}</p>
    <p className="comment__main">{commentData.body}</p>
    <ul className="comment__utils">
      <i className="bi bi-chat-left" />
      <li>Reply</li>
    </ul>
  </div>
);

export default CommentCard;

CommentCard.propTypes = {
  commentData: PropTypes.object,
};
