import PropTypes from 'prop-types';

const CreatePostCard = ({ postInput, handlePostInputChange }) => (
  <div className="createpost">
    <i className="bi bi-person-circle" />
    <form className="createpost_form">
      <input
        type="text"
        name="createpost__title"
        className="createpost__title"
        placeholder="Whats the title?"
      />
      <textarea
        name="createpost__body"
        id="createpostbody"
        cols="73"
        rows="1"
        value={postInput}
        onChange={handlePostInputChange}
        placeholder="What do you want to say?"
        className="createpost__body"
      />
    </form>
    <button type="button" className="createpost__button">
      Post
    </button>
  </div>
);

CreatePostCard.propTypes = {
  postInput: PropTypes.string,
  handlePostInputChange: PropTypes.func,
};

export default CreatePostCard;
