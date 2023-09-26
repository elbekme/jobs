import '../css/About.scss'
import about from '../assets/images/about.png';
import shape from '../assets/images/shape.png';
import about2 from '../assets/images/about-2.png';
import circle from '../assets/images/circle.png';

const AboutPage = () => {
  return <div className="about">
    <div className="about-item">
        <div className="first">
          <div className="first-left">
            <h4>Our mision</h4>
            <h1>Creating valuable content for creatives all around the world</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </div>
          <div className="first-left">
            <h4>Our mision</h4>
            <h1>Creating valuable content for creatives all around the world</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </div>
        </div>
        <div className="second">
          <div className="second-left">
            <h2>Our team of creatives</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
          <div className="second-right">
            <img className='image' src={about} alt="img" />
            <img className='shape' src={shape} alt="img" />
          </div>
        </div>
        <div className="third">
          <div className="third-left">
            <img className='about2' src={about2} alt="" />
            <img className='circle' src={circle} alt="circle" />
          </div>
          <div className="third-right">
            <h2>Why we started this Blog</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
        </div>
    </div>
  </div>;
};

export default AboutPage;
