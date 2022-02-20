import React from 'react';
import { Link } from 'react-router-dom';
import './Anime.css';

const Anime = (props) => {
    const { title, image_url } = props.sr;
    // console.log(props.sr)
    return (
        <div>
            <div className="row ">
                <div className="col-md-4 gap-3 py-3 col-sm-6">
                    <div className="box container">
                        <Link to={`/sa/${title}`}>
                            <img className='anime-img' src={image_url} width={130} height={100} alt='' />
                        </Link>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Anime;