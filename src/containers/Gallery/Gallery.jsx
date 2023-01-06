import React from 'react'
import "../Gallery/Gallery.css"
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import First from "../../assets/Gallery/041.png"
import Second from "../../assets/Gallery/042.png"
import Third from "../../assets/Gallery/043.png"
import Fourth from "../../assets/Gallery/044.png"


const Gallery = () => {
    return (
        <div className='gallie__Gallery section__margin1'>
            <div className="gallie__Services-heading">
                <h2 className="gradient__text1">Gallery of  Gallie</h2>
            </div>
            <div>
                <MDBCarousel showControls>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src={First}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src={Second}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src={Third}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src={Fourth}
                        alt='...'
                    />
                </MDBCarousel>

            </div>
        </div>
    );
}

export default Gallery