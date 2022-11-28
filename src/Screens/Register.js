import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../Components/UsedInputs'
import Layout from '../Layout/Layout'
import { FiLogIn } from 'react-icons/fi'

function Register() {
  return (
    <Layout>
        <div className='container mx-auto px-2 my-24 flex-colo'>
            <div className='w-full 2xl:w-2/5 gap-8 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
                <img 
                    src="/images/logo.png"
                    alt="logo"
                    className='w-full h-12 object-contain'
                />
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
                <Input
                    label="비밀번호" 
                    placeholder="********" 
                    type="password" 
                    bg={true} 
                />
                <Link 
                    to="/login" 
                    className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'
                >
                    <FiLogIn /> 회원가입
                </Link>
                <p className='text-center text-border'>
                    계정이 있으십니까?
                    <Link 
                        to='/login'
                        className='text-dryGray font-semibold ml-2'
                    >
                        로그인
                    </Link>
                </p>
            </div>
        </div>
    </Layout>
  )
}

export default Register