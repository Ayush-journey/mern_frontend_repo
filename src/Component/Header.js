import React from 'react'
import '../css/header.css'
function Header() {
    return (
        <>
            <div className='header-container'>
                <div className='logo'></div>
                <div className='search-container'>
                    <div className='location'>
                        <i class="fa-solid fa-location-dot"></i>
                        <input type="text" placeholder='New Delhi'></input>
                    </div>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input id='search' type="text" placeholder='Search for a Restaurant,Cuisine or a Dish'></input>
                </div>
                <button className='login-signup'>Login</button>
                <button className='login-signup'>Signup</button>
            </div>

        </>
    )
}
export default Header;