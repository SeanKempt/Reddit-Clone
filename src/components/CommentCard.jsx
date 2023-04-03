const CommentCard = () => (
  <div className="comment">
    <p className="comment__user">testusername</p>
    <p className="comment__main">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet,
      repellat provident vitae dicta iusto libero voluptatibus in culpa,
      voluptates odit fugiat ipsam quibusdam rem dolorem excepturi! Quae,
      similique impedit.
    </p>
    <ul className="comment__utils">
      <i className="bi bi-chat-left" />
      <li>Reply</li>
    </ul>
  </div>
);

export default CommentCard;
