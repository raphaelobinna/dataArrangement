import React from 'react';
import Filter from '../pages/filter.png';
import Click from '../pages/click.png';
import Cart from '../pages/cart.png';

export const Card = ({
    searches,
    clicks,
    bookings,
    price,
    period,

}) => {

    searches = searches ?? ''
    clicks = clicks ?? ''
    price = price ?? ''
    bookings = bookings ?? ''
    period = period ?? ''
    return (

        <div className='card_container' >

            <div className='card_form' >
                <img className='image' src={Filter} alt="..." />

                <div>
                    <p className='card_header' >Searches</p>
                    <p className='card_number' >{`${searches}  `}<span className='card_period' >{` ${period}`} </span></p>
                </div>
            </div>

            <div className='card_form' >
                <img className='image' src={Click} alt="..." />

                <div>
                    <p className='card_header' >Clicks</p>
                   <p className='card_number' >{`${clicks}  `}<span className='card_period' >{` ${period}`} </span></p>
                </div>

                
            </div>

            <div className='card_form' >
                <img className='image' src={Cart} alt="..." />

                <div>
                    <p className='card_header' >Bookings</p>
                    <p className='card_number' >{`${bookings}  `}<span className='card_period' >{` ${period}`} </span></p>
                </div>
            </div>


        </div>


    )

}