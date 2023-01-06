import React from 'react'
import { Feature } from '../../components';
import "./howThisWork.css"

const HowThisWork = () => (

    <div className="gallie__HowThisWork section__margin1">
        <div className="gallie__HowThisWork-heading">
            <h1 className="gradient__text">How Does This Work</h1>
            <p>Follow the process below</p>
        </div>
        <div className='gallie__HowThisWork-full'>
        <div className="gallie__HowThisWork-container">
                <h1 className="gradient__text gallie__HowThisWork-head-text">Looking for animal care?</h1>
            <Feature title="Sign up now" text="You will have access to our database of pet sitters after you register." />
            <Feature title="Create Your Job Offer" text="After that, local pet sitters who are interested in your employment will submit applications to you." />
            <Feature title="Look up animal care" text="Utilize the contact form to locate and get in touch with reliable dog, cat, and other sitters in your region." />
        </div>

        <div className="gallie__HowThisWork-container">
                <h1 className="gradient__text gallie__HowThisWork-head-text">Want a pet sitter</h1>
                <Feature title="Sign up now" text="You will have access to job postings for dog walkers and pet caregivers after you register." />
                <Feature title="Create Your Profile" text="Include as much information as you can about the animal care you intend to provide in your personal profile." />
                <Feature title="Apply for Jobs" text="Find suitable dog walking or pet sitting positions in your area and submit your application straight using the contact form." />
            </div>
        </div>
    </div>
);

export default HowThisWork