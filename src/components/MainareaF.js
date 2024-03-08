import React from 'react'
import PriceList from './PricelistMain';
import CSSM from '../componentCSS/MainArea.module.css'
import { Link } from 'react-router-dom';
import { IoReturnUpBackOutline } from "react-icons/io5";
import Monetisation from './Monetisation';


export default function MainareaF() {


  const rate=[0.15,0.07,0.12]
  const rateD=[0.11,0.05,0.095]

  const options1 = [
    { value: '50k',label: '50k', price: '4,599' },
    { value: '100k',label: '100k', price: '8,399' },
    { value: '1M',label: '1M', price: '69,999' }
  ];
  const options2 = [
    { value: '50k',label: '50k', price: '1,799' },
    { value: '100k',label: '100k', price: '2,799' },
    { value: '1M',label: '1M', price: '18,999' }
  ];
  const options3 = [
    { value: '50k',label: '50k', price: '3,999' },
    { value: '100k',label: '100k', price: '6,999' },
    { value: '1M',label: '1M', price: '52,999' }
  ];
  const optionsM1 = [
    { value: '1hrs video length',label: '1hrs video length', price: '1,899' },
    { value: '2hrs video length',label: '2hrs video length', price: '1,799' },
    { value: '3hrs video length',label: '3hrs video length', price: '1,699' }
  ];
  const optionsM2 = [
    { value: '2hrs video length',label: '2hrs video length', price: '2,899' },
    { value: '3hrs video length',label: '3hrs video length', price: '2,799' }
  ];


  const type=['Like + Follower','Post Reacts',' Profile/Page follower','Monetisation Pack']

  return (
    <div className='container'>
      <Link to='/' type="button" className="btn btn-warning my-3"><IoReturnUpBackOutline/> Back</Link>
 <h2 className={CSSM}>Facebook Services</h2>

<PriceList options={options1} rate={rate[0]} type={type[0]} rateD={rateD[0]} />
<PriceList options={options2} rate={rate[1]} type={type[1]} rateD={rateD[1]} />
<PriceList options={options3} rate={rate[2]} type={type[2]} rateD={rateD[2]} />
<Monetisation optionM1={optionsM1} optionM2={optionsM2} type={type[3]} />

    </div>
   
  )
}
