import React from 'react'

import data from '../services/data';

import {Carousel} from 'react-bootstrap';
export default function Slider() {


    const slides = data.cards
    return (
        <section class="page-section" id="services">
            <div class="container">
                <h2 class="text-center mt-0">Featured Programs:</h2>
                <hr class="divider my-4" />
                <div class="row">
                    
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                        
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
                 
                    </div>
                </div>
            </div>
    </section>
    
    )
}
