import React from 'react'

import LanguageSharpIcon from "@material-ui/icons/LanguageSharp";
import MonetizationOnSharpIcon from "@material-ui/icons/MonetizationOnSharp"; 

function About() {
    return (
        <div className='about' id="about" style={{backgroundColor: '#f05e23', paddingTop:"5rem", color: "white"}} > 
            
                <h2 style={{padding:"1rem",textAlign: "center", color: "white"}}>About Us</h2>
               
                <div className='about__info'>
                    <div>
                        <p className='about__bios' style={{fontWeight:"900",paddingLeft:"1rem",paddingRight:"1rem", textAlign: "center", color: "white"}} > 
                            <big style={{fontWeight:"900", color: "white"}}>W</big>e are a technology startup that connects young African talents to career opportunities by connecting Leading companies and organizations across all sectors who:{''}<br />
                            
                        </p>
                   
                </div>
                <div>
                        <ul className='bullets'>
                            <span>
                                   
                                <LanguageSharpIcon fontSize="large" style={{ fill: "rgb(2, 2, 44)" }} />
                                <li style={{fontWeight: "600",paddingLeft:"1rem", textAlign:"left"}}>Want young African talents in their organizations on paid internships in any part of the world.</li>
                            </span> 
                                
                            <span>
                                <MonetizationOnSharpIcon fontSize="large" style={{ fill: "rgb(2, 2, 44)" }} />
                                <li style={{fontWeight: "600",paddingLeft:"1rem", textAlign:"left"}}>Can pay their undergraduate interns $100 or more and $300 or more for their postgraduate interns (young professionals) as and when due.</li>
                            </span>
                        </ul>

                </div>

                   
                    

                </div>
        </div>
       
    )
}

export default About
