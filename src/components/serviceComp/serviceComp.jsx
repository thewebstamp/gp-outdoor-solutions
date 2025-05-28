import './serviceComp.css';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

function ServiceComp() {
    const navigate = useNavigate();
    const [ourServices, setOurServices] = useState([
        {
            title: '🧹 Roof & Gutter Cleaning',
            description: 'Clearing debris to protect roofs and drainage systems',
            image: Images.roof
        },
        {
            title: '💦 Pressure Washing',
            description: 'Restoring surfaces with powerful, deep exterior cleaning',
            image: Images.pressure
        },
        {
            title: '🏞️ Grading Services',
            description: 'Leveling land for better drainage and a clean finish',
            image: Images.grading
        },
        {
            title: '🌾 Brush Clearing',
            description: 'Removing overgrowth and vegetation for clean, safe land',
            image: Images.bush
        },
        {
            title: 'Material Delivery & Spreading',
            description: 'Bark, dirt, or gravel delivered and professionally spread',
            image: Images.spreading
        },
        {
            title: 'Gravel Prep',
            description: 'Preparing ground for gravel driveways, RV pads, or paths',
            image: Images.gravel
        },
        {
            title: '🌿 Landscaping',
            description: 'Transforming outdoor spaces into beautiful, functional environments',
            image: Images.landscaping
        },
        {
            title: '🗑️ Junk Removal',
            description: 'Fast, affordable removal of unwanted items and debris',
            image: Images.junk
        },
        {
            title: '🚛 Hauling Services',
            description: 'Reliable transport and disposal of materials and waste',
            image: Images.hauling
        },
        {
            title: '⛏️ Minor Excavation',
            description: 'Light digging for landscaping or small-scale foundation prep',
            image: Images.excavation
        },
        {
            title: '🏠 Property Management',
            description: 'Year-round upkeep and outdoor project coordination made simple',
            image: Images.management
        },
        {
            title: '💡 Christmas Light Installation',
            description: 'Seasonal or permanent lights installed with care and precision',
            image: Images.light
        }
    ]);

    function scrollLeft() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.push(o[0]);
            o.shift();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-left");
            setTimeout(() => {
                item.classList.remove("s-slide-left");
            }, 400);
        })
    }

    function scrollRight() {
        const sItems = document.querySelectorAll('.items');
        setOurServices((o) => {
            o.unshift(o[o.length-1]);
            o.pop();
            return [...o];
        });
        sItems.forEach((item) => {
            item.classList.add("s-slide-right");
            setTimeout(() => {
                item.classList.remove("s-slide-right");
            }, 400);
        })
    };

        const serviceT = useRef();
        const serviceB = useRef();
    
        function slideUp() {
            if (window.location.pathname == "/") {
                if (window.innerHeight * 0.9 >= serviceT.current.getBoundingClientRect().top) {
                    serviceT.current.classList.add("slide-up");
                } else {
                    serviceT.current.classList.remove("slide-up");
                }
    
                if (window.innerHeight * 0.9 >= serviceB.current.getBoundingClientRect().top) {
                    serviceB.current.classList.add("slide-up");
                } else {
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }
    
        useEffect(() => {
            window.addEventListener("scroll", slideUp);
    
            return () => {
                if (window.location.pathname == "/") {
                    serviceT.current.classList.remove("slide-up");
                    serviceB.current.classList.remove("slide-up");
                }
            }
        }, []);

    return (
        <div className="service-comp" id='services'>
            <div className="s-up" ref={serviceT}>
                <div className="s-heading">
                    <div className="s-headline">OUR SERVICES</div>
                    <h2>Outdoor Services in Skagit County You Can Rely On</h2>
                </div>
                <div className="s-text">
                    <p>Whether you're looking to enhance curb appeal, clean up a seasonal mess, or handle heavy-duty hauling, we’ve got the tools, experience, and dedication to get the job done right. <br /><b>Explore our full list of services below:</b></p>
                    <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
                </div>
            </div>

            <div className="s-base-wrap" ref={serviceB}>
                <div className="s-base">
                    <div className="top">
                        <div className="s-top-case">
                            {ourServices.map((item, i) => (
                                <div key={i} className="items">
                                    <div className="item-card">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <img src={item.image} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="control">
                        <FontAwesomeIcon id='s-control-l' icon={faArrowLeft} onClick={scrollRight} />
                        <FontAwesomeIcon id='s-control-r' icon={faArrowRight} onClick={scrollLeft} />
                    </div>
                </div>
                <a href="#" onClick={()=>{navigate("/contact")}}>Contact Us</a>
            </div>
        </div>
    )
}

export default ServiceComp;