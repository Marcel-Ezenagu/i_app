import React from 'react'
import { Link } from 'react-router-dom';

import LanguageSharpIcon from "@material-ui/icons/LanguageSharp";
import MonetizationOnSharpIcon from "@material-ui/icons/MonetizationOnSharp" 
import Slider from '../components/Slider';
export default function LandingPage() {

    return (
    <>
        <div className='landingPage-wrapper'>
                
            <div className='cta'>
            
                <h2>Access Young Talents Faster </h2>
                <p>Technologically connecting Careers and Interns.</p>
            <a href='#about'> <button>FIND OUT MORE</button> </a>
                
            </div>
     </div>

        <section className="page-section bg-primary" id="about">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">Who we are!</h2>
                    <hr className="divider light my-4" />
                        <p className="text-white-50 mb-4">A technology startup that connects young African talents to career opportunities by connecting Leading companies and organizations across all sectors who:{''}</p>
                        <ul className='bullets'>
                            <span>
                                    {/* <i class="fas fa-globe"></i> */}
                                    
                                    <LanguageSharpIcon fontSize="large" style={{ fill: "rgb(2, 2, 44)" }} />
                                <li>Want young African talents in their organizations on paid internships in any part of the world.</li>
                            </span> 
                                
                            <span>
                                    {/* <i class="fas fa-hand-holding-usd"></i> */}
                                    <MonetizationOnSharpIcon fontSize="large" style={{ fill: "rgb(2, 2, 44)" }} />
                                <li>Can pay their undergraduate interns $100 or more and $300 or more for their postgraduate interns (young professionals) as and when due.</li>
                            </span>
                        </ul>
                    <a className="btn btn-light btn-xl js-scroll-trigger" href="/signup">Get Started!</a>
                </div>
            </div>
        </div>
            </section>
            
            <section class="page-section" id="services">
            <div class="container">
                <h2 class="text-center mt-0">Our Services</h2>
                <hr class="divider my-4" />
                <div class="row">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                            <h3 class="h4 mb-2">To improve employability</h3>
                            <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Develop their leadership skills</h3>
                            <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-globe text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Ready to Publish</h3>
                            <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-heart text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Made with Love</h3>
                            <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Slider />
    </>
    )
}
