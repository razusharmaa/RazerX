import React from 'react'
import PriceList from './PricelistMain';
import CSSM from '../componentCSS/MainArea.module.css'
import { Link } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";


export default function MainareaY() {

    const max=10000;
  const rate=[0.899,0.17,0.23]
  const rateD=[0.77,0.125,0.15]

  const options1 = [
    { value: '25k',label: '25k', price: '15,699' },
    { value: '50k',label: '50k', price: '28,999' },
    { value: '100k',label: '100k', price: '55,499' }
  ];
  const options2 = [
      { value: '50k',label: '50k', price: '4,999' },
      { value: '100k',label: '100k', price: '8,999' }
    ];
    const options3 = [
      { value: '50k',label: '50k', price: '5,999' },
      { value: '100k',label: '100k', price: '10,499' }
    ];




  const type=['Subscriber','Likes',' Views']

  return (
    <div className='container'>
      <Link to='/' type="button" className="btn btn-warning my-3"><IoReturnUpBackOutline/> Back</Link>
 <h2 className={CSSM} style={{color:"#de3131"}}>YouTube Services</h2>

<PriceList options={options1} rate={rate[0]} type={type[0]} rateD={rateD[0]} max={max} />
<PriceList options={options2} rate={rate[1]} type={type[1]} rateD={rateD[1]} />
<PriceList options={options3} rate={rate[2]} type={type[2]} rateD={rateD[2]} />

    </div>
   
  )
}
