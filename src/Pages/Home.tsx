import '../styles/Home.css'
import movie_projector from '../assets/movie_projector.png'
import figure_accent from '../assets/figure_accent.svg'

const Home = () => {
  return (
    <div className='home'>
      <section>
        <div className='left'>
            <div>
              <h1>
                <img src={movie_projector} alt='Camera logo'/>
                Gotcha.
              </h1>
            <h2>Add <span>Movies,</span> <br/> Collect <span>Watchlists.</span></h2>
            <p>
              Manage & organize movie collections better. Join Gotcha now for a better couch experience.
            </p>
          </div>
          <div className='white-shape'></div>
        </div>
        <div className='right'>
          <div className='white-shape'></div>
          <img src={figure_accent} alt='Figure Accent' />
        </div>
      </section>
      <section>
        <div>
          <h2>What can Gotcha do?</h2>
          <ul>
            <li>Add your movies</li>
            <li>View all your movies</li>
            <li>Get detailed information about movies</li>
            <li>Add to Wishlists & Favourites</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
