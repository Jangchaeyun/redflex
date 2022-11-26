import React from 'react'
import { FiUser } from 'react-icons/fi'

function Promos() {
  return (
    <div
      className='my-20 py-10 md:px-20 px-8 bg-dry'
    >
      <div
        className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'
      >
        <div
          className='flex lg:gap-10 gap-6 flex-col'
        >
          <h1
            className='xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed'
          >
            오프라인 재생 시 다운로드하세요 <br /> 모바일에서 이용해보세요
          </h1>
          <p className='text-text text-sm xl"text-base leading-6 xl:leading-8'>
            다운로드한 TV 프로그램 및 영화는 다운로드에 사용된 장치에서 사용할 수 있으며 계정의 모든 프로필에서 볼 수 있습니다. 다운로드는 일정 기간이 지나면 만료 되며 일부는 연간 다운로드할 수 있는 횟수에 제한이 있습니다. 시청을 마치면 기기에서 다운로드 항목을 삭제 하세요.
          </p>
          <div
            className='flex gap-4 md:text-lg text-sm'
          >
            <div
              className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold"
            >
              HD 4K
            </div>
            <div
              className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold"
            >
              <FiUser /> 2K
            </div>
          </div>
        </div>
        <div>
          <img 
            src='/images/mobile.png'
            alt='Mobile app'
            className='w-full object-conatin'
          />
        </div>
      </div>
    </div>
  )
}

export default Promos
