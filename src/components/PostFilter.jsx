const PostFilter = () => (
  <div className="postfilter">
    <ul className="postfilter__filter">
      <li className="postfilter__buttons">
        <i className="bi bi-chat-heart icon" />
        Best
      </li>

      <li className="postfilter__buttons">
        <i className="bi bi-fire icon" />
        Hot
      </li>
      <li className="postfilter__buttons">
        <i className="bi bi-patch-exclamation icon" />
        New
      </li>
      <li className="postfilter__buttons">
        <i className="bi bi-graph-up-arrow icon" />
        Top
      </li>
    </ul>
  </div>
);

export default PostFilter;
