import React, { useState } from 'react'
import Titles from '../Titles'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { Message, Select } from '../UsedInputs'
import Rating from '../Stars';
import { UsersData } from '../../Data/VideosData';

function MovieRates({movie}) {
  const Ratings = [
    {
      title: "0점",
      value: 0,
    },
    {
      title: "1점",
      value: 1,
    },
    {
      title: "2점",
      value: 2,
    },
    {
      title: "3점",
      value: 3,
    },
    {
      title: "4점",
      value: 4,
    },
    {
      title: "5점",
      value: 5,
    }
  ];

  const [ rating, setRating ] = useState(0);

  return (
    <div className='my-12'>
      <Titles title="리뷰" Icon={BsBookmarkStarFill}/>
      <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded'>
        {/* write review */}
        <div className='xl:col-span-2 w-full flex flex-col gap-8'>
          <h3 
            className='text-xl text-text font-semibold'
          >
            "{movie?.name}" 리뷰
          </h3>
          <p className='text-sm leading-7 font-medium text-border'>
            이 영상에 대한 리뷰를 작성해 주세요!!
          </p>
          <div className='text-sm w-full'>
            <Select
              label="별점 선택" 
              options={Ratings} 
              onChange={(e) => setRating(e.target.value)}
            />
            <div className='flex mt-4 text-lg gap-2 text-star'>
              <Rating value={rating} />
            </div>
          </div>
          {/* message */}
          <Message
            label="메시지"
            placeholder="리뷰를 작성해주세요..."
          />
          {/* submit */}
          <button className='bg-subMain text-white py-3 w-full flex-colo rounded'>
            전송
          </button>
        </div>
        {/* REVIEWS */}
        <div className='col-span-3 flex flex-col gap-6'>
          <h3 className='text-xl text-text font-semibold'>
            리뷰(8)
          </h3>
          <div className='w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll'>
            {
              UsersData.map((user, i) => (
                <div className='md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg'>
                  <div className='col-span-2 bg-main hidden md:block'>
                    <img 
                      src={`/images/${user ?user.image : 'user.jpg'}`}
                      alt={user.fullName}
                      className='w-full h-24 rounded-lg object-cover'
                    />
                  </div>
                  <div className='col-span-7 flex flex-col gap-2'>
                    <h2>{user?.fullName}</h2>
                    <p className='text-xs leading-6 font-medium text-text'>
                      {user?.message}
                    </p>
                  </div>
                  {/* rates */}
                  <div className='col-span-3 flex-rows border-l border-border text-xs gap-1 text-star'>
                    <Rating value={user?.rate} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieRates
