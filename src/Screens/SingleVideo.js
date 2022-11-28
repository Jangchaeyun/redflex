import React from 'react'
import { useParams } from 'react-router-dom'
import MovieCasts from '../Components/Single/MovieCasts'
import MovieInfo from '../Components/Single/MovieInfo'
import MovieRates from '../Components/Single/MovieRates'
import Titles from '../Components/Titles'
import { Videos } from '../Data/VideosData'
import Layout from '../Layout/Layout'
import { BsCollectionFill } from "react-icons/bs";
import Video from '../Components/Video'

function SingleVideo() {
    const {id} = useParams()
    const movie = Videos.find((movie) => movie.name === id)
    const RelatedMovies = Videos.filter(
      (m) => m.category === movie.category
    );
  return (
    <Layout>
        <MovieInfo movie={movie} />
        <div className='container mx-auto min-h-screen px-2 my-6'>
            <MovieCasts />
            {/* rate */}
            <MovieRates movie={movie} />
            {/* related */}
            <div className='my-16'>
              <Titles title="관련 비디오" Icon={BsCollectionFill} />
              <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {RelatedMovies.map((movie, index) => (
                  <Video key={index} movie={movie} />
                ))}
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default SingleVideo
