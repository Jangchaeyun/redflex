import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'

function NotFound() {
  return (
    <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img
        className='w-full h-96 object-contain'
        src='/images/404.svg'
        alt='notfound'
      />
      <h1 className='lg:text-4xl font-bold'>페이지를 찾을 수 없습니다.</h1>
      <p className='font-semibold text-border leading-6'>
        이 페이지는 존재하지 않습니다. url을 잘못 입력하였습니다.
      </p>
      <Link
        to="/"
        className='bg-subMain text-white flex-rows gap-4 font-medium py-3 hover:text-main px-6 rounded-md'
      >
        <BiHomeAlt /> 홈으로 돌아가기
      </Link>
    </div>
  )
}

export default NotFound
