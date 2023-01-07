import React from 'react'
import "../Services/services.css"
import Boarding from "../../assets/Services/Boarding.png"
import Walking from "../../assets/Services/Walking.png"
import HouseSitin from "../../assets/Services/HouseSitin.png"
import Errands from "../../assets/Services/Errands.png"

const Services = () => {
    return (
        <div className="gallie__Services section__padding">
            <div className="gallie__Services-heading">
                <h2 className="gradient__text">Services at Gallie</h2>
            </div>
            <div className='gallie__Services-Body'>
                <div className='gallie__Services-Body-Content'>
                    <div className='gallie__Services-Body-Content__image'>
                        <img src={Boarding} alt='img' />
                    </div>
                    <div className='gallie__Services-Body-Content__text'>
                        <h2>Boarding </h2>
                        <p>Your pets spend the night in the house of your pet sitter. They will get a warm welcome and be treated as members of the family.</p>
                    </div>
                </div>
                <div className='gallie__Services-Body-Content2'>
                    <div className='gallie__Services-Body-Content__image'>
                        <img src={HouseSitin} alt='img' />
                    </div>
                    <div className='gallie__Services-Body-Content__text2'>
                        <h2>House Sitting</h2>
                        <p>Your pets and home are taken care of by our sitter. Without leaving the house, your pets will receive all the attention they require.</p>
                    </div>
                </div>


                <div className='gallie__Services-Body-Content'>
                    <div className='gallie__Services-Body-Content__image'>
                        <img src={Walking} alt='img' />
                    </div>
                    <div className='gallie__Services-Body-Content__text'>
                        <h2>Dog Walking </h2>
                        <p>Your dog is taken for a stroll through the neighborhood. Ideal for dogs with excess energy and active days.</p>
                    </div>
                </div>




                <div className='gallie__Services-Body-Content2'>
                    <div className='gallie__Services-Body-Content__image'>
                        <img src={Errands} alt='img' />
                    </div>
                    <div className='gallie__Services-Body-Content__text2'>
                        <h2>Running Errands </h2>
                        <p>We go on short trips to deliver or collect something, on your behalf.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Services
