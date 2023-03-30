import Header from './Header.jsx';
import PostCard from './PostCard.jsx';

const Post = () => (
  <div className="pagewrapper">
    <Header />
    <main className="fullpost main">
      <PostCard />
    </main>
  </div>
);

export default Post;
