import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'MARK D',
            address: 'Sedro-Woolley, WA',
            review: "We hired GP Outdoor Solutions for gravel prep and brush clearing on our property. Grayson was incredibly responsive, showed up on time, and did a thorough, professional job. Our yard has never looked this clean and usable. Highly recommend for anyone needing honest outdoor work done"
        },
        {
            name: 'LINDA S',
            address: 'Mount Vernon, WA',
            review: 'After years of buildup, our roof and gutters needed serious cleaning. GP Outdoor Solutions came out quickly and tackled the job with no mess left behind. Grayson was polite, efficient, and made everything look brand new. We’ll be calling him again in the spring!'
        },
        {
            name: 'JAMES H',
            address: 'Burlington, WA',
            review: "GP Outdoor Solutions helped us with a big junk removal and yard cleanup project. They showed up on time, communicated clearly, and the price was fair. What impressed me most was their attention to detail and the care they took with our property"
        }
    ];

    const testimonialB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= testimonialB.current.getBoundingClientRect().top) {
                testimonialB.current.classList.add("slide-up");
            } else {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="testimonial-comp">
            <div className="t-top">
                <div className="t-screen"></div>
                <img src={Images.p9} alt="" />
            </div>

            <div className="t-base" ref={testimonialB}>
                <div className="t-headline">⭐⭐⭐⭐⭐ WHAT OUR CLIENTS SAY</div>
                <h2>We Let Our Work & Our Clients Do The Talking</h2>
                <div className="testimonial-wrap">
                    {testimonial.map((review, i) => (
                        <div className="t-reviews" key={i}>
                            <div className="review">
                                <div className="big-circle"></div>
                                <div className="small-circle"></div>
                                <p>{review.review}</p>
                            </div>
                            <p className='a'>{review.name}</p>
                            <p className='t-address'>{review.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="base-rev">
                {/* <a className='facebook-review' href="https://web.facebook.com/profile.php?id=61555744794312&sk=reviews" target='_blank'><img src={Images.facebookReviews} alt="" /></a> */}
            </div>
        </div>
    )
}

export default Testimonial;