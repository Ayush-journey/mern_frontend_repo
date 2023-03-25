import React from 'react'
function Collection(props) {
    return (
        <>
            <div className='collections-section-card'>
                <img src={props.img} alt={props.title} className='collections-section-card-img'></img>
                <p className='collections-section-card-title'>{props.title}</p>
                <p className='collections-section-card-count'>{props.count} Places</p>
            </div>
        </>
    )
}

export default Collection

