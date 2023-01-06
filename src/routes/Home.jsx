import React from 'react'
import { Header, HowThisWork, Services, Testimonial, Gallery } from "../containers"
import { Navbar, Mid, Footer } from '../components'

const Home = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Mid />
            <HowThisWork />
            <Services />
            <Testimonial />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Home