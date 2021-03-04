import React from 'react';
import './Footer.css';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'

import { Link} from "react-router-dom";

export default function Footer() {
    return (
        // <>
        //      <section className="footer-section" id="contact">
        //         <div className="container">
        //         <div className="row justify-content-center">
        //             <div className="col-lg-8 text-center">
        //                 <h2 className="mt-0">Get In Touch!</h2>
        //                 <hr className="divider my-4" />
        //                 <p className="text-muted mb-5">Would want to talk to us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="contact-text">
        //                     <PhoneIcon/>
        //                     <div>+234 810 776 6889</div>
                            
        //             </div>
        //                 <div className="contact-text">
        //                     <EmailIcon />
        //                 <a>info@internapp.co</a>
        //             </div>
        //             <div className="contact-text">
        //                 <LocationOnIcon/>
        //                 <a>Suite 202, Enaan tower, East-West Road, Choba, Portharcourt</a>
        //             </div>    
        //         </div>
        //     </div>
        // </section>
        //     <footer className="bg-dark py-5">
        //          <div className="container"><div className="small text-center text-muted">All rights reserved © 2020 - Internapp Africa</div></div>
        //     </footer>
        //     </>
        <div className='footer' id="cont">
            <div className="text-center">
                <br/>
                <h2 className='footer-header' >Contact Us{' '}:</h2>
                <hr className="divider my-4" />
                <div>
                    <LocationOnIcon style={{color:"red"}} />
                    <p style={{fontWeight: "600"}}>Suite 202, Enaan tower, East-West Road, Choba, Portharcourt</p>
                </div>
                <div>
                    <PhoneIcon style={{color:"red"}} />
                    <p style={{fontWeight: "600"}}>+234 810 776 6889</p>

                </div>
                <div>
                    <EmailIcon  style={{color:"red"}} />
                    <p style={{fontWeight: "600"}}>info@internapp.co</p>
                </div>
            </div>
            <hr style={{ color: "black" }} />
            <div className="bg-dark py-3">
                <p style={{ textAlign: "center" }}>All rights reserved © 2021 - Internapp Africa</p>
            </div>
        </div>
    )
}
