import React from 'react';
import '../css/diningpage.css';
import NightLifeCollections from '../Database/NightLifeCollections';
import Restraunts from '../Database/NightlifeRestraunts'
import Collection from './Collections';
import RestrauntsCard from './RestrauntsCard'
export default function Diningpage() {
    return (
        <>
            <div className='collections-section'>
                <p className='collections-section-title heading'>Collections</p>
                <p className='collections-section-heading'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            </div>
            <div className='collections-section-cards-container'>
                {
                    NightLifeCollections.map((collection) =>
                        <Collection title={collection.title} img={collection.img} count={collection.count} />
                    )
                }

            </div>
            <div className='filters'>
                <button>Filters</button>
                <button>Distance</button>
                <button>Rating 4.0+</button>
                <button>Pubs & Bars</button>
            </div>
            <p className='page-title heading'>Nightlife Restaurants in Delhi NCR</p>
            <div className='page-Restraunts-section'>
                <div className='page-Restraunts-card-container'>
                    {
                        Restraunts.map((restraunt) =>
                            <RestrauntsCard title={restraunt.title} img={restraunt.img} rating={restraunt.rating} categories={restraunt.categories} price={restraunt.price} location={restraunt.location} time={restraunt.time} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
