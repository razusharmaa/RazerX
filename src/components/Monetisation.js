import React, { useState } from 'react';
import CSSP from "../componentCSS/Pricelist.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Select from 'react-select';

export default function Monetisation({ optionM1, optionM2, type, }) {
    const [selectedOption1, setSelectedOption1] = useState(optionM1[0]);
    const [selectedOption2, setSelectedOption2] = useState(optionM2[0]);
    const [btnState, setBtnState] = useState({ btn1: 'Confirm', btn2: 'Confirm', btnC1: 'info', btnC2: 'info' });


    const handleClick = (btn, btnC, msg) => {
        if (btnState[btn] === 'Buy') {
            const encodedText = encodeURIComponent(msg);
            window.open(`https://wa.me/+9779746459031?text=${encodedText}`);
            setTimeout(() => {
                setBtnState(prevState => ({ ...prevState, [btn]: 'Confirm', [btnC]: 'info' }));
            }, 2000);
        }
        else {
            setBtnState(prevState => ({ ...prevState, [btn]: 'Buy', [btnC]: 'success' }));
        }
    };

    return (
        <>
            <div className='container my-3'>
                <div className="container text-center mb-2">
                    <div className="row row-cols-3" style={{ backgroundColor: "#c1c9c4" }}>
                        {[type, '60k Package', '600k Package'].map((title, index) =>
                            <div key={index} className={CSSP.topAmt}><strong>{title}</strong></div>
                        )}
                        <div className={CSSP.amt2}>
                            <div>Amount</div>
                            <div>Price <FaLongArrowAltRight/></div>
                        </div>
                        <div style={{ borderLeft: "1px solid black" }} className={CSSP.amt}>
                            <Select className='mt-1'
                                options={optionM1}
                                defaultValue={optionM1[0]}
                                onChange={setSelectedOption1}
                            />
                            <div className="mb-1">{selectedOption1 ? `Rs ${selectedOption1.price}` : ''}</div>
                        </div>
                        <div style={{ borderLeft: "1px solid black" }} className={CSSP.amt}>
                            <Select className='mt-1'
                                options={optionM2}
                                defaultValue={optionM2[0]}
                                onChange={setSelectedOption2}
                            />
                            <div className='mb-1'>{selectedOption2 ? `Rs ${selectedOption2.price}` : ''}</div>
                        </div>
                        <div className={CSSP.amt}></div>
                        <div style={{ borderLeft: "1px solid black" }} className={CSSP.amt}><button type="button" onClick={() => handleClick('btn1', 'btnC1', `Type : ${type} \nQuantity : ${selectedOption1.value} \nPrice : ${selectedOption1.price}`)} className={`btn btn-${btnState.btnC1}`}>{btnState.btn1}</button></div>
                        <div style={{ borderLeft: "1px solid black" }} className={CSSP.amt}><button type="button" onClick={() => handleClick('btn2', 'btnC2', `Type : ${type} \nQuantity : ${selectedOption2.value} \nPrice : ${selectedOption2.price}`)} className={`btn btn-${btnState.btnC2}`}>{btnState.btn2}</button></div>
                    </div>
                </div>
            </div>
        </>
    );
}
