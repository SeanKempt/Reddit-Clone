import PropTypes from 'prop-types';

const CreatePostCard = ({
  postInput,
  handlePostBodyChange,
  handlePostTitleChange,
  handleCreatePost,
  resetPostInput,
}) => (
  <div className="createpost">
    <i className="bi bi-person-circle" />
    <form className="createpost_form">
      <input
        type="text"
        name="createpost__title"
        value={postInput.title}
        onChange={handlePostTitleChange}
        className="createpost__title"
        placeholder="Whats the title?"
      />
      <textarea
        cols={50}
        rows={1}
        name="createpost__body"
        id="createpost-text"
        className="createpost__body"
        value={postInput.body}
        placeholder="What do you want to say?"
        onChange={handlePostBodyChange}
      />
    </form>
    <button
      type="button"
      className="createpost__button"
      onClick={() => {
        handleCreatePost(postInput.title, postInput.body);
        resetPostInput();
      }}
    >
      Post
    </button>
  </div>
);

CreatePostCard.propTypes = {
  postInput: PropTypes.object,
  handlePostBodyChange: PropTypes.func,
  handlePostTitleChange: PropTypes.func,
  handleCreatePost: PropTypes.func,
  resetPostInput: PropTypes.func,
};

export default CreatePostCard;
