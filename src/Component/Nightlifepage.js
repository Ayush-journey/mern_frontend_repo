import React from 'react';
import '../css/diningpage.css';
import UseFetch from './usefetch';
import { nightlifecollection, nightliferestaurant } from '../Database/api'
// import NightLifeCollections from '../Database/NightLifeCollections';
// import Restraunts from '../Database/NightlifeRestraunts'
import Collection from './Collections';
import RestrauntsCard from './RestrauntsCard'
export default function Diningpage() {
    const { data: NightLifeCollections, loading: NightLifeCollectionsloading, error: NightLifeCollectionserror } = UseFetch(nightlifecollection);
    const { data: Restraunts, loading: NightLiferestrauntloading, error: NightLiferestraunterror } = UseFetch(nightliferestaurant);
    return (
        <>
            <div className='collections-section'>
                <p className='collections-section-title heading'>Collections</p>
                <p className='collections-section-heading'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            </div>
            <div className='collections-section-cards-container'>
                {
                    NightLifeCollectionsloading ? <h1>Loading...</h1> : (NightLifeCollectionserror ? <p>Failed to load API</p> : NightLifeCollections?.map((collection) =>
                        <Collection title={collection.title} img={collection.img} count={collection.count} />
                    )
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
                        NightLiferestrauntloading ? <h1>Loading...</h1> : (NightLiferestraunterror ? <p>Failed to load API</p> : Restraunts?.map((restraunt) =>
                            <RestrauntsCard {...restraunt} />
                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}
