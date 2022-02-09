import React, { useEffect, useState } from 'react';
import Data from '../data.json';
import { useSelector, useDispatch } from "react-redux";
import { setMetricDataAction, setMetricPeriodAction, storemetricAction } from '../store/actions/metricActions';
import { Card } from '../reusables/card'

export const Pages = () => {

    const dispatch = useDispatch()


    const metricState = useSelector(state => state.metric)

    const [index, setIndex] = useState()

    useEffect(() => {
        dispatch(storemetricAction({ Data }))
        dispatch(setMetricPeriodAction('yesterday'))
    }, [])

    useEffect(() => {

        const data = metricState.metricData.Data
        dispatch(setMetricDataAction(data, metricState.metricPeriod))

    }, [metricState.metricPeriod])

    console.log(metricState)

    return (

        <div className='container_card' >
            <p>Main Metrics</p>

            <div className='card_section' >

                <div onClick={() => { setIndex('1'); dispatch(setMetricPeriodAction('hour')) }} className={index === '1' ? 'class_active' : ''} >Last Hour</div>
              
                <div onClick={() => { setIndex('2'); dispatch(setMetricPeriodAction('yesterday')) }} className={index === '2' ? 'class_active' : ''} >Yesterday</div>
              
                <div onClick={() => { setIndex('3'); dispatch(setMetricPeriodAction('days')) }} className={index === '3' ? 'class_active' : ''}  >Last 3 days</div>


            </div>

            <div className='error_section' >
                <p className='error_text' >Error 502: <span>{`${metricState.error502 ?? '--'}`}</span></p>
                <p className='error_text' >Error 599: <span>{`${metricState.error599 ?? '--'}`}</span> </p>
                <p className='error_text' >No errors: <span>{`${metricState.otherError ?? '--'}`}</span> </p>
            </div>

            <div>
                <p>Average Price :  <span>  {`${metricState.data.avg_price ? Math.round(metricState.data.avg_price * 0.01) : '--'}%`} </span> </p>

            </div>

            <Card
                searches={metricState.data.searches}
                bookings={metricState.data.bookings}
                clicks={metricState.data.clicks}
                period={metricState.metricPeriod}
            />

        </div>

    )

}