import React from 'react'
import Titles from '../Titles'
import { BsCollectionFill } from 'react-icons/bs';
import Video from '../Video';
import { Videos } from '../../Data/VideosData';

function PopularVideos() {
  return (
    <div className="my-16">
      <Titles title="Top 8" Icon={BsCollectionFill} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid- cols-1 gap-10">
        {
          Videos.slice(0, 8).map((movie, index) => (
            <Video key={index} movie={movie} />
          ))
        }
      </div>
    </div>
  )
}

export default PopularVideos
