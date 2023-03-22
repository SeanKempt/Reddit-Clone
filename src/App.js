import './sass/reset.scss';
import './sass/styles.scss';
import PostCard from './components/PostCard';

const App = () => (
  <div className="App">
    <header className="header">
      <h1 className="header__title">Seddit</h1>
      <input
        type="text"
        name="search"
        value="Search Seddit"
        className="header__search"
      />
    </header>
    <main className="main">
      <p>this is the main section</p>
      <PostCard />
    </main>
  </div>
);

export default App;
