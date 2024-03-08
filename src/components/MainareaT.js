import React from 'react'
import PriceList from './PricelistMain';
import CSSM from '../componentCSS/MainArea.module.css'
import { Link } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";


export default function MainareaT() {


  const rate=[0.28,0.1,0.185]
  const rateD=[0.23,0.08,0.17]

  const options1 = [
    { value: '50k',label: '50k', price: '9,699' },
    { value: '100k',label: '100k', price: '17,899' },
  ];
  const options2 = [
    { value: '50k',label: '50k', price: '3,299' },
    { value: '100k',label: '100k', price: '6,299' }
  ];
  const options3 = [
    { value: '50k',label: '50k', price: '6,499' },
    { value: '100k',label: '100k', price: '10,899' },
  ];



  const type=['Follower','Likes',' Retweets']

  return (
    <div className='container'>
      <Link to='/' type="button" className="btn btn-warning my-3"><IoReturnUpBackOutline/> Back</Link>
 <h2 className={CSSM} style={{color:"skyblue"}}>Twitter Services</h2>

<PriceList options={options1} rate={rate[0]} type={type[0]} rateD={rateD[0]} />
<PriceList options={options2} rate={rate[1]} type={type[1]} rateD={rateD[1]} />
<PriceList options={options3} rate={rate[2]} type={type[2]} rateD={rateD[2]} />

    </div>
   
  )
}
