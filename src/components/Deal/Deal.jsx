import React, { useEffect, useState } from 'react'
import './Deal.css'

const Deal = () => {

    const [days,setDays] = useState(0)
    const [hours,setHours] = useState(0)
    const [mins,setMinutes] = useState(0)
    const [secs,setSeconds] = useState(0)

    const deadline = "July, 9, 2023";
    const getTime = () => {
        const time = Date.parse(deadline)-Date.now()
        setDays(Math.floor(time/(1000*60*60*24 )))
        setHours(Math.floor(time/(1000*60*60)%24 ))
        setMinutes(Math.floor(time/1000/60)%60)
        setSeconds(Math.floor((time/1000)%60))
    }

    useEffect( ()=>{
        const interval = setInterval(()=>getTime(deadline),1000)
        return ()=> clearInterval(interval)
    },[])
  return (
    <>
      <section className="deal" id='deal'>
      <h1 className="heading"> deal of the day </h1>

      <div className="row">

        <div className="content">
            <h3 className="title">don't miss the deal</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem eligendi repudiandae pariatur. Aut, esse molestias laborum sunt reprehenderit repellat officiis aspernatur consequatur nemo! Veritatis, ex architecto! Eligendi, iste nulla.</p>
            <div className="count-down">
                <div className="box">
                    <h3 id="day">{days}</h3>
                    <span>day</span>
                </div>
                <div className="box">
                    <h3 id="hour">{hours}</h3>
                    <span>hour</span>
                </div>
                <div className="box">
                    <h3 id="minute">{mins}</h3>
                    <span>minute</span>
                </div>
                <div className="box">
                    <h3 id="second">{secs}</h3>
                    <span>second</span>
                </div>
            </div>



            <a href="#" className="btn">check out deal</a>
        </div>

        <div className="image">
            <img src="../images/deal-img.jpg" alt=""/>
        </div>

    </div>
      </section>
    </>
  )
}

export default Deal
