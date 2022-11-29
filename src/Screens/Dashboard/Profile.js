import React from 'react'
import Uploader from '../../Components/Uploader'
import SideBar from './SideBar'
import { Input } from "../../Components/UsedInputs";

function Profile() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold'>프로필</h2>
          <Uploader />
          <Input
            label="이름" 
            placeholder="이름" 
            type="text" 
            bg={true} 
          />
          <Input
            label="이메일" 
            placeholder="redflex@gmail.com" 
            type="email" 
            bg={true} 
          />
          <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
            <button className='bg-subMain transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
              계정 지우기
            </button>
            <button className='bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
              프로필 업데이트
            </button>
          </div>
        </div>
    </SideBar>
  )
}

export default Profile
