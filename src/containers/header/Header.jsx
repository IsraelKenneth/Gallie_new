import React from 'react'
import "./header.css"
import gallie_img from "../../assets/gallie_img.png"

const Header = () => {
    return (
        <div className='gallie__header'>
            <div className='gallie__header-image'>
                <img src={gallie_img} alt="gallie" />
            </div>
            <div className='gallie__header-content'>
                <h1 className="gradient__text">Your Pet&apos;s Deserve The Best Caring</h1>
                <p>Are you going away? We provide personal care for your pets in the comfort of your own home, the kind of care your pets deserve. We are also One-stop for all your household needs, providing house sitting.</p>

                <div className="gallie__header-content__input">
                    <button type="button">Find a Pet Sitter</button>
                    <button type="button">Find a Home to Sit</button>
                </div>
            </div>

        </div>
    )
}

export default Header