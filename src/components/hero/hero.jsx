import './hero.css';
import { Images } from '../../assets/images';

function Hero() {
    return (
        <div className="hero-wrap">
            <div className="hero-container">
                <div className="hero-background">
                    <img src={Images.management} alt="" />
                </div>
                <div className="hero">
                    <div className="hero-top">
                        <div className="small-headline">GP OUTDOOR SOLUTIONS</div>
                        <h1>Outdoor Services Done Right—Every Season, Every Project</h1>
                        <p><span>Reliable Service & Honest Pricing</span> <br />From landscaping and junk removal to pressure washing and seasonal light installs—GP Outdoor Solutions is your trusted partner in Skagit County, WA.</p>
                        <div className="hero-btn">
                            <a id='hero-f-btn' className='hero-f-btn' href="#portfolio">View Portfolio</a>
                            <a id='hero-s-btn' className='hero-s-btn' href="#services">See Services</a>
                        </div>
                    </div>

                    <div className="hero-base">
                        <img src={Images.heroImg1} alt="" />
                        <img src={Images.heroImg2} alt="" />
                        <img src={Images.heroImg3} alt="" />
                        <img src={Images.heroImg4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;