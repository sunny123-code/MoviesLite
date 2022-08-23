import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SinglePage from '../../Components/SinglePage';

function Trending() {

  const [trendingData, setTrendingData] = useState([]);


   // fetch trending api
  const getTrending = async () => {
    try {
      const { data } = await axios.
      get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
      setTrendingData(data.results)
      console.log(data.results);
    }
    catch (error) {
      console.log(error.message)
    }

  }

  useEffect(() => {

    getTrending();

  }, [])







  return (
      <>
     <div className="trendingTitle">Trending Today</div>
     <div className="trendingContent">
      {
        trendingData && trendingData.map((t)=>
          <SinglePage
           key={t.id}
           id={t.id}
           title={t.name || t.title}
           poster_path={t.poster_path}
           media_type={t.media_type}
           vote_average={t.vote_average}
           date={t.first_air_date || t.release_date}



          />
        
        )
      }

     </div>
     </>
      )
}

export default Trending