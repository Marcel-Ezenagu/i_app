import React from "react";

import "./Home.css";
     

import { useDispatch, useSelector } from "react-redux";
//import { listUsers } from "../actions/userActions";
//import { listCompanies } from "../actions/companyActions";
import { Link } from "react-router-dom";

import data from '../services/data';

import {Carousel} from 'react-bootstrap';

function Home() {


  const slides = data.cards
  //const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);

  //const { loading, error, userInfo } = userList;


  /*
    useEffect(() => {
        dispatch(listUsers());
    }, [dispatch]);
*/

  /* useEffect(() => {
      dispatch(listCompanies());
    }, [dispatch]);
    */
  
  return (
    <div>
    <div className="home">
      
      <h2>We are a technology startup that connects young African talents to leading
      companies and organizations globally for career development.</h2>
      <br/>
      <div className="home_top">
        
      <h4>What we do:</h4><br/>
        <p className="">
          
          We spent time identifying some of the key challenges partner-companies
          face including ones the Covid-19 induced, and twice a year we organize
          a case competition infrastructure based on the identified problems ranging
          from sciences to humanities. Here, undergraduate and postgraduate
          students will have to submit their abstracts to enter the competition and the
          THREE (3) winning solutions that are useful to our partners gets published,
          and rewarded with cash gifts.
        </p>
        {/* <img src="./images/dImg.jpg" alt='display' /> */}
      </div>

      <div className='home_mid'>
        <br/>
        <h4>Who we want:</h4>
        <p >
        Leading companies and organizations across all sectors who:
        </p>

          <ul>
            <li>Want to add young African talents to their organizations on a paid internship position.</li>
            <li>
              Can pay their undergraduate interns $100 or more and $300 or more for their postgraduate interns (young professionals) as and when due.
            </li>
            
            <li>Are domiciled in any part of the world. </li>
          </ul>
        
        <h4>How it works:</h4>
        <p>
        Click <Link className='linky' to="/signup">here</Link> to publish your internship openings with us and state clearly the
        number of positions available. Once you sign up, we will contact you to find
        out some of the challenges you are facing and how we can help. 
        
        </p>
        
      </div>
      <div className="home_img">
      
        <h3>Featured Programs</h3>
                          
  <Carousel>
          {slides.map((slide, index) => (
                
                <Carousel.Item key={index} interval='1500'>
                  <img
                  className="d-block w-100"
                  src={slide.image}
                  alt={slide.name}
                  />
                
                </Carousel.Item> 
                ))}
               
  </Carousel>
        
    </div>
          
      <div className="bt">
      <h4>What we want to achieve: </h4>
      <ul>
        <li>To improve employability</li>
        <li>Instill research readiness in students</li>
        <li>Develop their leadership skills</li>
        <li>To foster the culture of building valuable connections</li>
        <li>To bridge the gap between academia and industry</li>
        <li>Provide access to decent work experience opportunities</li>

      </ul>
      </div>
      
      <div className="home_base">
        <h3>How to reach us:</h3>
        <p>
          Mobile - +234 810 776 6889<br/>
          Email - <Link>info@internapp.co</Link>
        </p>

        
      </div>

                {/*
          {userList === undefined ? (
              <>
              <div className='chart'>
                  <PieChart data={[["Number of Accepted Applications", 44], ["Number of Rejected Applications", 23],]} />
              </div>

            <div className='banner'>
                <h1>This section holds the banner</h1>
                  </div>
                  </>
          )
              :
              (
                  <>         
                      <h1>there are users</h1>
                  
          <div className='chart'>
          <PieChart data={[["Number of Accepted Applications", 44], ["Number of Rejected Applications", 23],]} />
          </div>

          <div className='banner'>
              <h1>This section holds the banner</h1>
          </div>

                </>)}
          */}
        </div>
    </div>
  );
}

export default Home;
