import React from 'react'
import '../css/subheader.css'
export default function Subheader() {
    const deliveryInactive = 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png';
    const diningInactive = 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png';
    const nightlifeInactive = 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png';
    const deliveryActive = 'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png';
    const diningActive = 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png';
    const nightlifeActive = 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png';
    return (
        <div className='subheader-container'>
            <div className='subheader-items'>
                <div className='image-container'>
                    <img src={deliveryActive} />
                </div>
                <p>Delivery</p>
            </div>
            <div className='subheader-items'>
                <div className='image-container'>
                    <img src={diningInactive} />
                </div>

                <p>Dining Out</p>
            </div>
            <div className='subheader-items'>
                <div className='image-container'>
                    <img src={nightlifeInactive} />
                </div>

                <p>Nightlife</p>
            </div>
        </div>
    )
}
