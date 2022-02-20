import { click } from '@testing-library/user-event/dist/click';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';
import Anime from '../Anime/Anime/Anime';
import './Home.css';
import PieChart from '../Anime/PieChart/PieChart';

const Home = () => {
    const [search, setSearch] = useState([])
    // console.log(search.results)
    const typeOn = async (e) => {
        click = (e);
        // console.log(click)
        const result = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${click},reset()`)
        setSearch(result.data);

    }

    return (
        <div >
            <Nav></Nav>
            <div >
                <div className="dropdown">
                    <button className="btn btn-color dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Animes
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" onClick={() => typeOn('kekkai')} to=''> Kakei</Link>
                        <Link className="dropdown-item" onClick={() => typeOn('naruto')} to=''> Naruto</Link>
                        <Link className="dropdown-item" onClick={() => typeOn('monster')} to=''> Monster</Link>
                        <Link className="dropdown-item" onClick={() => typeOn('gintama')} to=''> Gintama</Link>
                        <Link className="dropdown-item" onClick={() => typeOn('kimetsu')} to=''> Kimetsu</Link>
                        <Link className="dropdown-item" onClick={() => typeOn('Clannad')} to=''> Clannad</Link>

                    </div>
                </div>
                <div className='home-block'>
                    <div className='container img-block'>
                        <div className="container row row-cols-1 pt-3  row-cols-md-3">
                            {
                                search?.results?.map(sr => <Anime sr={sr} key={sr.mal_id}></Anime>)
                            }
                        </div>
                    </div>
                    <div className='container'>
                        {/* pie chart  */}
                        <PieChart></PieChart>

                    </div>
                </div>
            </div>
            <div style={{ paddingTop: '38px' }}>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;