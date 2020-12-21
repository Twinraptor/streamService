import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from "../requests/axios";
import requests from "../requests/requests";
import "./Banner.css";


function Banner(props) {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const randomMovie = await axios.get(requests.fetchTrending);
            setMovie(
                randomMovie.data.results[Math.floor(Math.random()*randomMovie.data.results.length - 1)]
            );
            return randomMovie;
        }
        fetchData();
    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) +"..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                {/* background image */}
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <div  className="banner__description"><h1>{truncate(movie?.overview, 150)}</h1></div>
                
            </div>
            <div className="banner__fadebottom"></div>
        </header>
    )
}

Banner.propTypes = {

}

export default Banner

