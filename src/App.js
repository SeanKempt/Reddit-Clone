import './sass/reset.scss';
import './sass/styles.scss';
import PostCard from './components/PostCard';
import CreatePostCard from './components/CreatePostCard';
import sedditlogo from './images/seddit-logo.png';

const App = () => (
  <div className="App">
    <header className="header">
      <img className="header__logo" src={sedditlogo} alt="megaphone" />
      <h1 className="header__title">Seddit</h1>
      <input
        type="text"
        name="search"
        value="Search Seddit"
        className="header__search"
      />
    </header>
    <main className="main">
      <CreatePostCard />
      <PostCard />
    </main>
  </div>
);

export default App;
