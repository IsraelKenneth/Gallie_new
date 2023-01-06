import React from 'react'
import "./FooterStyles.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Gallie</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href='/'><i className="fa brands fa-facebook-square"></i> </a>
                    <a href='/'><i className="fa-brands fa-instagram"></i> </a>
                    <a href='/'><i className="fa brands fa-behance-square"></i> </a>
                    <a href='/'><i className="fa brands fa-twitter-square"></i> </a>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <h4>Learn More</h4>
                    <a href='/'>Read Our Blog</a>
                    <a href='/'>Gallie Q & A Community</a>
                    <a href='/'>Gallie Guarantee</a>
                    <a href='/'>Safety</a>
                </div>
                <div>
                    <h4>About Gallie</h4>
                    <a href='/'>About Us</a>
                    <a href='/'>Accesibility</a>
                    <a href='/'>Get the App</a>
                    <a href='/'>Careers</a>

                </div>
                <div>
                    <h4>Help</h4>
                    <a href='/'>Support</a>
                    <a href='/'>Troubleshooting</a>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Terms of Service</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>License</a>
                </div>

            </div>
        </div>
    )
}

export default Footer