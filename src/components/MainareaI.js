import React from 'react'
import PriceList from './PricelistMain';
import CSSM from '../componentCSS/MainArea.module.css'
import { Link } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";


export default function MainareaF() {


  const rate=[0.17,0.05,0.05]
  const rateD=[0.13,0.04,0.04]

  const options1 = [
    { value: '50k',label: '50k', price: '5,499' },
    { value: '100k',label: '100k', price: '6,499' },
    { value: '1M',label: '1M', price: '84,999' }
  ];
  const options2 = [
    { value: '50k',label: '50k', price: '1,799' },
    { value: '100k',label: '100k', price: '2,799' },
    { value: '1M',label: '1M', price: '15,499' }
  ];
  const options3 = [
    { value: '50k',label: '50k', price: '1,799' },
    { value: '100k',label: '100k', price: '2,799' },
    { value: '1M',label: '1M', price: '15,499' }
  ];



  const type=['Follower','Likes',' Views']

  return (
    <div className='container'>
      <Link to='/' type="button" className="btn btn-warning my-3"><IoReturnUpBackOutline/> Back</Link>
 <h2 className={CSSM} style={{color:"#de3131"}}>Instagram Services</h2>

<PriceList options={options1} rate={rate[0]} type={type[0]} rateD={rateD[0]} />
<PriceList options={options2} rate={rate[1]} type={type[1]} rateD={rateD[1]} />
<PriceList options={options3} rate={rate[2]} type={type[2]} rateD={rateD[2]} />

    </div>
   
  )
}
