import React from 'react'
import { img_300, unavailable } from '../config/config'
function SinglePage(props) {
    const { title, poster_path, media_type, vote_average, date } = props
    return (
        <>
            <div className="card">

                <img className="card-img" src={poster_path ? `${img_300}/${poster_path}` : unavailable} alt={title} />

                <span className="card-heading">{title}</span>
                <div className="card-content">
                    <span className="media-type">{media_type == "tv" ? "Tv Series" : "Movie"}</span>
                    <span className="date">{date}</span>
                </div>

            </div>



        </>
    )
}

export default SinglePage