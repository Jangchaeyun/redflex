import React from 'react'
import { Input } from '../../Components/UsedInputs'
import SideBar from './SideBar'

function Password() {
  return (
    <div>
      <SideBar>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold'>비밀번호 변경</h2>
          <Input
            label="현재 패스워드" 
            placeholder="*******" 
            type="password" 
            bg={true} 
          />
          <Input
            label="새로운 패스워드" 
            placeholder="*******" 
            type="password" 
            bg={true} 
          />
          <Input
            label="패스워드 확인" 
            placeholder="*******" 
            type="password" 
            bg={true} 
          />
          <div className='flex justify-end items-center my-4'>
            <button className='bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
              비밀번호 변경
            </button>
          </div>
        </div>
      </SideBar>
    </div>
  )
}

export default Password
