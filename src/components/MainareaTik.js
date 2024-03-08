import React from 'react'
import PriceList from './PricelistMain';
import CSSM from '../componentCSS/MainArea.module.css'
import { Link } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";


export default function MainareaTik() {
    const min=50000
  const rate=[0.37,0.12,0.001]
  const rateD=[0.349,0.095,0.0007]

  const options1 = [
      { value: '25k',label: '25k', price: '7,499' },
    { value: '50k',label: '50k', price: '13,399' },
  ];
  const options2 = [
    { value: '50k',label: '50k', price: '3,899' },
    { value: '100k',label: '100k', price: '6,499' },
  ];
  const options3 = [
    { value: '10M',label: '10M', price: '2,499' },
    { value: '50M',label: '50M', price: '4,999' },
    { value: '100M',label: '100M', price: '7,999' }
  ];



  const type=['Follower','Likes',' Views']

  return (
    <div className='container'>
      <Link to='/' type="button" className="btn btn-warning my-3"><IoReturnUpBackOutline/> Back</Link>
 <h2 className={CSSM} style={{color:"black"}}>TikTok Services</h2>

<PriceList options={options1} rate={rate[0]} type={type[0]} rateD={rateD[0]} max={10000} />
<PriceList options={options2} rate={rate[1]} type={type[1]} rateD={rateD[1]} />
<PriceList options={options3} rate={rate[2]} type={type[2]} rateD={rateD[2]} min={min} max={1000000} />

    </div>
   
  )
}
