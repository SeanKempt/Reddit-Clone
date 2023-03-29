import './sass/reset.scss';
import './sass/styles.scss';
import PostCard from './components/PostCard';
import CreatePostCard from './components/CreatePostCard';
import PostFilter from './components/PostFilter';
import sedditlogo from './images/seddit-logo.png';

const App = () => (
  <div className="App">
    <header className="header">
      <img className="header__logo" src={sedditlogo} alt="megaphone" />
      <h1 className="header__title">Seddit</h1>
      <form className="header__form">
        <input
          type="search"
          name="search"
          value="Search Seddit"
          className="header__search"
        />
      </form>
    </header>
    <main className="main">
      <CreatePostCard />
      <PostFilter />
      <PostCard />
      <PostCard />
    </main>
  </div>
);

export default App;
