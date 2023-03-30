const PostCard = () => (
  <div className="postcard__container">
    <div className="post__upvotes">
      <i className="bi bi-arrow-up-circle" />
      100
      <i className="bi bi-arrow-down-circle" />
    </div>
    <article className="post">
      <p className="post__data">
        community - posted by lorem ipsum 10 hours ago
      </p>
      <p className="post__title">post title goes here</p>
      <p className="post__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
        consectetur quis. Voluptatibus veniam odio omnis labore, numquam dolorum
        temporibus ea et reiciendis, ad ab repellat mollitia placeat. Harum, sed
        odio?
      </p>
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
  </div>
);

export default PostCard;
