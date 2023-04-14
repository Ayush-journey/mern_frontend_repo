import React from 'react';
import UseFetch from './usefetch';
import { dineoutcollection, dineoutrestaurant } from '../Database/api';
import '../css/diningpage.css';
// import DineoutCollections from '../Database/DineoutCollections';
// import Restraunts from '../Database/DineoutRestraunts'
import Collection from './Collections';
import RestrauntsCard from './RestrauntsCard'
export default function Diningpage() {
    const { data: DineoutCollections, loading: DineoutCollectionsloading, error: DineoutCollectionserror } = UseFetch(dineoutcollection);
    const { data: Restraunts, loading: Restrauntsloading, error: Restrauntserror } = UseFetch(dineoutrestaurant);
    return (
        <>
            <div className='collections-section'>
                <p className='collections-section-title heading'>Collections</p>
                <p className='collections-section-heading'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            </div>
            <div className='collections-section-cards-container'>
                {
                    DineoutCollectionsloading ? <h1>Loading...</h1> : (DineoutCollectionserror ? <p>Failed to load API</p> : DineoutCollections?.map((collection) =>
                        <Collection title={collection.title} img={collection.img} count={collection.count} />
                    ))
                }

            </div>
            <div className='filters'>
                <button>Filters</button>
                <button>Rating 4.0+</button>
                <button>Outdoor Seatings</button>
                <button>Serves Alcohol</button>
                <button>Open Now</button>
            </div>
            <p className='page-title heading'>Best Dining Restaurants near you in Delhi NCR</p>
            <div className='page-Restraunts-section'>
                <div className='page-Restraunts-card-container'>
                    {
                        Restrauntsloading ? <h1>Loading...</h1> : (Restrauntserror ? <p>Failed to load API</p> : Restraunts?.map((restraunt) =>
                            <RestrauntsCard {...restraunt} />
                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}
