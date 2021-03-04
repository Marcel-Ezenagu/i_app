import React from 'react'

import data from '../services/data';

import {Carousel} from 'react-bootstrap';
export default function Slider() {


    const slides = data.cards
    return (
        <section class="slider-section" id="services" style={{marginTop: "2rem"}}>
            <div class="container">
                <h2 class="section-text" style={{color: " #f05e23"}}>Featured Programs:</h2>
                <hr class="divider my-4" />
                <div class="row">
                    
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                        
                            <Carousel style={{marginTop: "-2rem"}} >
                                {slides.map((slide, index) => (
                                <Carousel.Item key={index} interval='1250'>
                                    <img
                                    className="d-block w-100"
                                    src={slide.image}
                                    alt={slide.name}
                                    />
                                
                                </Carousel.Item> 
                                ))}
                            
                            </Carousel>
    
                        </div>
                 
                    </div>
                </div>
            </div>
    </section>
    
    )
}
