import './questions.css';
import { useEffect, useRef } from 'react';
import ViewControl from './viewControl/viewControl';

function Questions() {
    const faQuestions = [
        {
            id: 0,
            question: "What areas do you serve?",
            answer: "At GP Outdoor Solutions, we proudly serve home owners and property owners across Skagit County, WA, and nearby areas. If you're unsure whether we serve your specific area, please don't hesitate to contact us. We'll be happy to help",
        },
        {
            id: 1,
            question: "Do you offer any warranties or guarantees on your work?",
            answer: "Yes, at GP Outdoor Solutions, we stand behind the quality of our work and offer comprehensive warranties and guarantees. Our warranties and guarantees demonstrate our commitment to delivering exceptional quality and service",
        },
        {
            id: 2,
            question: "How long does a typical project take to complete?",
            answer: "The duration of a typical project with GP Outdoor Solutions can vary depending on the scope and complexity of the work. We'll work closely with you to create a personalized project schedule and ensure that you're informed every step of the way",
        },
        {
            id: 3,
            question: "Can I get a free estimate for my project?",
            answer: "Yes, we'd be happy to provide you with a free, no-obligation estimate for your project. We're confident that our estimates are accurate and comprehensive, and we're happy to answer any questions you may have. Contact us today to schedule your free estimate!",
        },
        {
            id: 4,
            question: "Can you help me with design and planning for my project?",
            answer: "Yes, at GP Outdoor Solutions, we offer a comprehensive design and planning service to help you bring your vision to life. Let us help you with your project",
        },

    ];

    const questionA = useRef();

    function slideUp() {
        if (window.location.pathname == "/about") {
            if (window.innerHeight * 0.9 >= questionA.current.getBoundingClientRect().top) {
                questionA.current.classList.add("slide-up");
            } else {
                questionA.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/about") {
                questionA.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="faquestions" ref={questionA}>
            <div className="faq-headline">FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <p className='fa-para'>Discover the answers to GP Outdoor Services most frequently asked questions.</p>
            <div className="faquestions-wrap">
                {faQuestions.map((quest, i) => {
                    return (
                        <div key={i} className="item-wrap">
                            <div className="question">
                                <p>{quest.question}</p>
                                <div onClick={() => {
                                    if (quest.id == i) {
                                        let slideView = document.getElementById(`fa${quest.id}`);
                                        slideView.classList.toggle("view");
                                    }
                                }}><ViewControl className="control" /></div>
                            </div>
                            <div className="answer">
                                <p id={`fa${quest.id}`}>{quest.answer}</p>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Questions;