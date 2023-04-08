import PropTypes from 'prop-types';

const CreatePostCard = ({ postInput, handlePostInputChange }) => (
  <div className="createpost">
    <i className="bi bi-person-circle" />
    <input
      type="text"
      name="createpost"
      id="createpost-text"
      className="createpost__textinput"
      value={postInput}
      placeholder="What do you want to say?"
      onChange={handlePostInputChange}
    />
    <button type="button">Post</button>
  </div>
);

CreatePostCard.propTypes = {
  postInput: PropTypes.string,
  handlePostInputChange: PropTypes.func,
};

export default CreatePostCard;
