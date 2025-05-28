import './aboutHero.css';
import { Images } from '../../assets/images.js';

function AboutHero() {
    return (
        <div className="about-hero">
            <div className='ah-top'>
                <div className='img-wrap'>
                    <img className='ah-img-1' src={Images.about1} />
                    <img className='ah-img-2' src={Images.about2} />
                    <img className='ah-img-height' src={Images.about1} />
                </div>
            </div>
            
            <div className='ah-base'>
                <div className='ah-headline'>WHAT YOU NEED DONE RIGHT</div>
                <h2>🌿 About GP Outdoor Solutions</h2>
                <p>At GP Outdoor Solutions, we’re more than just a landscaping company — we’re your go-to partner for outdoor transformation and maintenance in Skagit County, WA. Founded by Grayson Pike, our mission is simple: get the job done right, the first time. <br /><br />We specialize in a wide range of services including landscaping, junk removal, pressure washing, roof and gutter cleaning, brush clearing, grading, gravel prep, and seasonal work like Christmas light installation and takedown. Whether you need a one-time cleanup or ongoing property management, we deliver high-quality results with prompt, professional service</p>
            </div>
        </div>
    )
}

export default AboutHero;