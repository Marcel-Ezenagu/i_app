import React from 'react';
import './Footer.css';

import { Link} from "react-router-dom";

export default function Footer() {
    return (
        <>
             <section className="page-section" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">Get In Touch!</h2>
                        <hr className="divider my-4" />
                        <p className="text-muted mb-5">Would want to talk to us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <div>+234 810 776 6889</div>
                    </div>
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        
                        <a>info@internapp.co</a>
                    </div>
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        
                        <a>Suite 202, Enaan tower, East-West Road, Choba, Portharcourt</a>
                    </div>    
                </div>
            </div>
        </section>
            <footer className="bg-dark py-5">
                 <div className="container"><div className="small text-center text-muted">All rights reserved © 2020 - Internapp Africa</div></div>
            </footer>
            </>
    )
}
