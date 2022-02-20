import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Nav/Nav';

const SingleAnime = () => {
    const [single, setSingle] = useState();
    const { SingleId } = useParams()
    useEffect(() => {
        fetch(`https://api.jikan.moe/v3/search/anime?q=/${SingleId}&limit=1`)
            .then(res => res.json())
            .then(data => setSingle(data.results))
    }, [])
    return (
        <div>
            <Nav></Nav>
            {
                single?.map(sg => <div sg={sg} >

                    <div className="container mt-5 card pt-3 pb-3 " style={{ maxWidth: '840px' }}>
                        <div className="row no-gutters">
                            <div className="col-md-4  text-center">
                                <h4>{sg.title}</h4>
                                <img src={sg.image_url} className="card-img" height={300} alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="text-left card-title">ANALYTICS</h5>
                                    <p className="card-text  text-center"><b>synopsis : </b>" {sg.synopsis}" </p>
                                    <div className="px-3 card-text card-info">
                                        <p className=''><b>Total Episodes : </b> {sg.episodes}</p>
                                        <p><b>Score : </b> {sg.score}</p>
                                        <p><b>type : </b> {sg.type}</p>
                                        <div className='date-card'>
                                            <p><b>Start Date : </b> {sg.start_date.slice(0, 10)}</p>
                                            <p className='px-5'><b >End Date : </b> {sg.end_date.slice(0, 10)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>)
            }
            <div style={{ paddingTop: '2rem' }}> <Footer></Footer></div>
        </div>
    );
};

export default SingleAnime;