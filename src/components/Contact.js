import React from 'react'
import { Link } from 'react-router-dom';
export default function Contact() {
    return (<section class="page-section" id="contact">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
                <h2 class="mt-0">Get In Touch!</h2>
                <hr class="divider my-4" />
                <p class="text-muted mb-5">Would want to talk to us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+234 810 776 6889</div>
            </div>
            <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                
                <Link>info@internapp.co</Link>
            </div>
        </div>
    </div>
    </section>
    
    )
}
