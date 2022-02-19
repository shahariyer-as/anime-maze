import { click } from '@testing-library/user-event/dist/click';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';
import './Home.css';

const Home = () => {
    const [search, setSearch] = useState('')
    console.log(search)
    const typeOn = async (e) => {
        click = (e);
        console.log(click)
        const result = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${click},reset()`)
        setSearch(result.data);

    }
    // useEffect(() => {
    //     axios.get(`https://api.jikan.moe/v3/search/anime?q=${search}`)
    //         .then(res => {
    //             setSingleData(res.result)
    //         })

    // }, [search])

    // const typeOn = (e) => {
    //     console.log(e)
    // }
    return (
        <div>
            <Nav></Nav>
            <div>

                <div>
                    <button onClick={() => typeOn('kekkai')}> kakei</button>
                    <button onClick={() => typeOn('kekkai')}> kakei</button>
                </div>


                {/* <div className="container">
                    <button type="button" class="drop-button">
                        ☰
                    </button>
                    <div class="dropdown">
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                    </div>
                </div> */}
            </div>
            <div style={{ paddingTop: '420px' }}>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;