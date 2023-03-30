import './sass/reset.scss';
import './sass/styles.scss';
import PostCard from './components/PostCard';
import Header from './components/Header';
import CreatePostCard from './components/CreatePostCard';
import PostFilter from './components/PostFilter';

const App = () => (
  <div className="App pagewrapper">
    <Header />
    <main className="main">
      <CreatePostCard />
      <PostFilter />
      <PostCard />
      <PostCard />
    </main>
  </div>
);

export default App;
