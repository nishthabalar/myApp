import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Carousel() {
    return (
        <div>
            <OwlCarousel className='owl-theme' items={4} center loop margin={5} nav responsive={{

                // breakpoint from 0 up
                0: {
                    items: 2,
                    nav: false

                },
                // breakpoint from 480 up
                480: {
                    items: 3,
                    nav: false

                },
                // breakpoint from 768 up
                768: {
                    items: 4,
                    nav: true

                }

            }}>
                <div class='item'>
                    <h4>1</h4>
                </div>
                <div class='item'>
                    <h4>2</h4>
                </div>
                <div class='item'>
                    <h4>3</h4>
                </div>
                <div class='item'>
                    <h4>4</h4>
                </div>
                <div class='item'>
                    <h4>5</h4>
                </div>
                <div class='item'>
                    <h4>6</h4>
                </div>
            </OwlCarousel>;
        </div>
    )
}

export default Carousel