import { React, useState } from 'react';
import UseFetch from './usefetch';
import { inspiration, topbrand, restraunt } from '../Database/api';
import '../css/deliverypage.css';
// import inspirationdata from '../Database/Inspiration';
// import topbranddata from '../Database/Topbrand';
// import Restraunts from '../Database/DeliveryRestraunts';
import RestrauntsCard from './RestrauntsCard'
export default function Deliverypage() {
    const { data: inspirationdata, loading: inspirationloading, error: inspirationerror } = UseFetch(inspiration);
    const { data: topbranddata, loading: topbrandloading, error: topbranddataerror } = UseFetch(topbrand);
    const { data: Restraunts, loading: loadingrestrauntsloading, error: restrauntserror } = UseFetch(restraunt);

    return (
        <>
            <div className='delivery-container'>
                <div className='filters'>
                    <button>Filters</button>
                    <button>Rating 4.0+</button>
                    <button>Pure Veg</button>
                    <button>Cuisines</button>
                    <button>More filters</button>
                </div>
                <p className='subsection-title'>Inspiration for your first order</p>
                <div className='inspiration'>
                    {
                        inspirationloading ? <h1>Loading...</h1> : (inspirationerror ? <p>Failed to load API</p> :
                            inspirationdata?.map((el) => {
                            return (
                                <div className='round-container'>
                                    <img src={el.image} alt={'images'} />
                                    <p>{el.dish}</p>
                                </div>
                            )
                            })
                        )
                    }
                </div>
                <p className='subsection-title'>Top brands for you</p>
                <div className='inspiration'>
                    {
                        topbrandloading ? <h1>Loading...</h1> : (topbranddataerror ? <p>Failed to load API</p> :
                            topbranddata?.map((el) => {
                            return (
                                <div className='round-container'>
                                    <img src={el.image} alt="" />
                                    <p>{el.restaurant}</p>
                                    <p>{el.time}</p>
                                </div>
                            )
                            })
                        )
                    }
                </div>
                <p className='page-title heading'>Delivery Restaurants in Arya Nagar, Anand Vihar, Delhi</p>
                <div className='page-Restraunts-section'>
                    <div className='page-Restraunts-card-container'>
                        {
                            loadingrestrauntsloading ? <h1>Loading...</h1> : (restrauntserror ? <p>Failed to load API</p> : Restraunts?.map((restraunt) =>
                                <RestrauntsCard {...restraunt} />
                            )
                            )}
                    </div>
                </div>

            </div>
        </>
    )
}




// const [inspirationdata, setinspirationdata] = useState();
    // const [topbranddata, settopbranddata] = useState();

    // (async function () {
    //     const response = await fetch(`http://localhost:5000/getinspiration`);
    //     var result = await response.json();
    //     setinspirationdata(result);
    // })();

    // (async function () {
    //     const response = await fetch(`http://localhost:5000/gettopbrand`);
    //     var result = await response.json();
    //     settopbranddata(result);
    // })();