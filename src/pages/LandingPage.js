import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { listCompanies } from "../actions/companyActions";


import intern from '../stylings/img/intern.jpg'

import Slider from '../components/Slider';
import Team from '../components/Team';
import About from '../components/About';
import Services from '../components/Services';
export default function LandingPage() {

    const dispatch = useDispatch();
    const companyList = useSelector((state) => state.companyList);
    const { loading, error, companies } = companyList;


    useEffect(() => {
        dispatch(listCompanies());
    }, [dispatch]);
   
    return (
        <div className='home'>
            {/* 
            <div className='landingPage-wrapper'>
                
            <div className='cta'>
            
                <h2></h2>
                <p></p>
                <a href='#about'> <button>FIND OUT MORE</button> </a>
                
            </div>
     </div>
            */}
        <img className="header-image" src={intern} alt='header-image' />
        <div className="main-info">

            <h2 style={{fontWeight:"900"}}>Access Young Talents Faster .</h2>
            <p>Technologically connecting Careers and Interns.
            </p>
                
            <div>
                <a href='#about'>
                    <button className='bt-about'>More About Us</button>
                </a>

                
            </div>
                

        </div>

         {/* <section className="page-section" style={{width: "fit-content"}} id="about">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0" style={{paddingTop:"-7rem"}} >Who we are!</h2>
                    <hr className="divider light my-4" />
                        <p className="text-white-50 mb-4" style={{fontWeight: "600"}}></p>
                       
                    <a className="btn btn-light btn-xl js-scroll-trigger" href="/signup">Get Started!</a>
                </div>
            </div>
        </div>
            </section>
               */}
            <About />
              <Services />
            <Team />
            <Slider />


    </div>
    )
}
