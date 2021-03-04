import React from 'react'
import eben from  '../stylings/assets/img/eben.jpg';
import sam from '../stylings/assets/img/sam.jpg';
import chucks from '../stylings/assets/img/chucks.jpg';
import ada from '../stylings/assets/img/ada.jpg';

export default function Team() {
    return (
        <div className='team' id= "team">
                <h3>Our Team</h3>
                <div className='team-row'>
                    <div className='team-info'>
                        <img className='team-image' src={eben} alt="Our CTO" />
                        <ul>
                            <li><strong> Awotoro O. Ebenezer</strong></li>
                             <li><small>Co-founder/CTO</small></li>
                        </ul>
                    </div>
                    
                    <div className='team-info'>
                        <img className='team-image' src={sam} alt='Our-Mobile app Engineer' />
                        <ul>
                            <li><strong> Samuel Titiloye</strong></li>
                           <li><small>Mobile app Engineer</small> </li> 
                        </ul>
                    </div>
                    
                    <div className='team-info'>
                        <img className='team-image' src={ada} alt='Our-CEO' />
                        <ul>
                            <li><strong>Ifechidere S. Obani</strong></li>
                            <li><small>Co-founder/CEO</small></li>
                        </ul>
                    </div>
                    
                    <div className='team-info'>
                        <img className='team-image' src={chucks} alt='Our-Founder' />
                        <ul>
                            <li><strong>Israel C. Abazie</strong></li>
                            <li><small>Founder/CPO</small></li>
                        </ul>
                    </div>
                </div>
            

        </div>
    )
}
