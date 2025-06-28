import '../styles/Home.css'
import movie_projector from '../assets/movie_projector.png'
import shape_1 from '../assets/shape_1.png'
import shape_2 from '../assets/shape_2.png'
import figure_accent from '../assets/figure_accent.svg'

const Home = () => {
  return (
    <div className='home'>
      <section>
        <div className="left">
            <div className="content">
              <h1>
                <img src={movie_projector} alt='Camera logo'/>
                Gotcha.
              </h1>
            <h2>Add <span>Movies,</span> <br/> Collect <span>Watchlists.</span></h2>
            <p>
              Manage & organize movie collections better. Join Gotcha now for a better couch experience.
            </p>
          </div>
          <img src={shape_1} alt="Shape 1" />
        </div>
        <div className="right">
          <img src={shape_2} alt="Shape 2" />
          <img src={figure_accent} alt="Figure Accent" />
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
