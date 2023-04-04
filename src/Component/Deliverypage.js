import { React, useEffect } from 'react';
import '../css/deliverypage.css';
import inspirationdata from '../Database/Inspiration';
import topbranddata from '../Database/Topbrand';
import Restraunts from '../Database/DeliveryRestraunts';
import RestrauntsCard from './RestrauntsCard'
export default function Deliverypage() {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/getinspiration`);
            const newData = await response.json();

        };
        fetchData();
    }, []);

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
                        inspirationdata.map((el) => {
                            return (
                                <div className='round-container'>
                                    <img src={el.image} alt={'images'} />
                                    <p>{el.dish}</p>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <p className='subsection-title'>Top brands for you</p>
                <div className='inspiration'>
                    {
                        topbranddata.map((el) => {
                            return (
                                <div className='round-container'>
                                    <img src={el.image} />
                                    <p>{el.restaurant}</p>
                                    <p>{el.time}</p>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <p className='page-title heading'>Delivery Restaurants in Arya Nagar, Anand Vihar, Delhi</p>
                <div className='page-Restraunts-section'>
                    <div className='page-Restraunts-card-container'>
                        {
                            Restraunts.map((restraunt) =>
                                <RestrauntsCard title={restraunt.title} img={restraunt.img} rating={restraunt.rating} categories={restraunt.categories} price={restraunt.price} offer={restraunt.offer} time={restraunt.time} />
                            )
                        }
                    </div>
                </div>

            </div>
        </>
    )
}
