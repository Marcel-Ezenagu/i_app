import React from 'react';
import { Link } from 'react-router-dom';
import './EmailSent.css';

export default function EmailSent() {
    return (
        <div className='emailSent'>
            <p>Hey there, Welcome to Internapp, click on <Link to='/login'>here</Link> to log into your account </p>
            
        </div>
    )
}
