import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='container my-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/images/facebook.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Facebook Services</h5>
                            <p className="card-text">All Facebook services along with their price list.</p>
                            <Link to="/facebook" type="button" className="btn btn-success">Check Prices</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/images/instagram.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Instagram Services</h5>
                            <p className="card-text">All instagram services along with their price list. </p>
                            <Link to="/instagram" type="button" className="btn btn-success">Check Prices</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/images/youtube.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Youtube Services</h5>
                            <p className="card-text">All youtube services along with their price list.</p>
                            <Link to="/youtube" type="button" className="btn btn-success">Check Prices</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/images/twitter.png`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Twitter Services</h5>
                            <p className="card-text">All twitter services along with their price list. </p>
                            <Link to="/twitter" type="button" className="btn btn-success">Check Prices</Link>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={`${process.env.PUBLIC_URL}/images/tiktok.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tiktok Services</h5>
                            <p className="card-text">All Tiktok services along with their price list. </p>
                            <Link to="/tiktok" type="button" className="btn btn-success">Check Prices</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
