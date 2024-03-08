import React, { useState } from "react";
import CSSP from "../componentCSS/Pricelist.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Select from "react-select";

export default function PriceList({ options, rate, type, rateD, max, min }) {
  const [txt, setTxt] = useState(min || 1000);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [btnState, setBtnState] = useState({
    btn1: "Confirm",
    btn2: "Confirm",
    btnC1: "info",
    btnC2: "info",
  });

  const price20 = () => {
    const minQuantity = min || 1000;
    const maxQuantity = max || 20000;
    const rateRange = rateD - rate;
    const quantityRange = maxQuantity - minQuantity;
    let interpolatedRate = rate;

    if (txt > minQuantity) {
      const proportion = (txt - minQuantity) / quantityRange;
      interpolatedRate += proportion * rateRange;
    }

    return parseFloat(Number(txt * interpolatedRate).toFixed(3));
  };

  const handleClick = (btn, btnC, msg) => {
    if (min !== undefined && txt < min) {
      setBtnState((prevState) => ({
        ...prevState,
        [btn]: "Invalid input",
        [btnC]: "danger",
      }));

      setTimeout(() => {
        setBtnState((prevState) => ({
          ...prevState,
          [btn]: "Confirm",
          [btnC]: "info",
        }));
      }, 1000);
      return;
    }

    if (btnState[btn] === "Buy") {
      const encodedText = encodeURIComponent(msg);
      window.open(`https://wa.me/+9779746459031?text=${encodedText}`);
    } else {
      setBtnState((prevState) => ({
        ...prevState,
        [btn]: "Buy",
        [btnC]: "success",
      }));
      setTimeout(() => {
        setBtnState((prevState) => ({
          ...prevState,
          [btn]: "Confirm",
          [btnC]: "info",
        }));
      }, 4500);
    }
  };

  return (
    <>
      <div className="container my-3">
        <div className="container text-center mb-2">
          <div className="row row-cols-3" style={{ backgroundColor: "#c1c9c4" }}>
            {[type, "Manual order", "Bulk order"].map((title, index) => (
              <div key={index} className={CSSP.topAmt}>
                <strong>{title}</strong>
              </div>
            ))}
            <div className={CSSP.amt2}>
              <div>Amount</div>
              <div>
                Price <FaLongArrowAltRight />
              </div>
            </div>
            <div style={{ borderLeft: "1px solid black" }} className={CSSP.amt}>
              <input
                type="text"
                className="form-control mt-1"
                value={txt}
                onChange={(e) => {
                  let value = e.target.value;
                  if (
                    value === "" ||
                    (!isNaN(value) && value >= 0 && value <= (max || 20000))
                  ) {
                    setTxt(value);
                  }
                }}
              />
              <div className="form-text align-self-start" id="basic-addon4">
                {min !== undefined && `min: ${min} `}
                max: {max || 20000}
              </div>

              <div className={CSSP.amt}>Rs {price20()}</div>
            </div>
            <div
              style={{ borderLeft: "1px solid black" }}
              className={CSSP.amt}
            >
              <Select
                className="mt-1"
                options={options}
                isSearchable={false}
                arrowRenderer={null}
                defaultValue={options[0]}
                onChange={setSelectedOption}
              />
              <div className={CSSP.amt}>
                {selectedOption ? `Rs ${selectedOption.price}` : ""}
              </div>
            </div>
            <div className={CSSP.amt}></div>
            <div
              style={{ borderLeft: "1px solid black" }}
              className={CSSP.amt}
            >
              <button
                type="button"
                onClick={() =>
                  handleClick(
                    "btn1",
                    "btnC1",
                    `Type : ${type} \nQuantity : ${txt} \nPrice : ${price20()}`
                  )
                }
                className={`btn btn-${btnState.btnC1}`}
              >
                {btnState.btn1}
              </button>
            </div>
            <div
              style={{ borderLeft: "1px solid black" }}
              className={CSSP.amt}
            >
              <button
                type="button"
                onClick={() =>
                  handleClick(
                    "btn2",
                    "btnC2",
                    `Type : ${type} \nQuantity : ${selectedOption.value} \nPrice : ${selectedOption.price}`
                  )
                }
                className={`btn btn-${btnState.btnC2}`}
              >
                {btnState.btn2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
