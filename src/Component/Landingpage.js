import React from 'react';
import '../css/landingpage.css';
export default function Landingpage() {
    return (
        <div className='header-landing'>
            <div className='navbar'>
                <ul>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </div>
            <h1>Zomato</h1>
            <p>Discover the best food & drinks in Delhi NCR</p>
            <div className='search-container'>
                <div className='location'>
                    <i class="fa-solid fa-location-dot"></i>
                    <input type="text" placeholder='New Delhi'></input>
                </div>
                <i class="fa fa-search" aria-hidden="true"></i>
                <input id='search' type="text" placeholder='Search for a Restaurant,Cuisine or a Dish'></input>
            </div>
        </div>
    )
}
