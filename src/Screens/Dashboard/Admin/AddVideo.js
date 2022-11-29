import React from 'react'
import Uploader from '../../../Components/Uploader'
import { Input, Message, Select } from '../../../Components/UsedInputs'
import { CategoriesData } from '../../../Data/CategoriesData'
import { UsersData } from '../../../Data/VideosData'
import SideBar from '../SideBar'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { ImUpload } from 'react-icons/im'

function AddVideo() {
  return (
      <SideBar>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold'>비디오 추가</h2>
          <div className='w-full grid md:grid-cols-2 gap-6'>
            <Input
                label="비디오 이름" 
                placeholder="비디오 이름" 
                type="text" 
                bg={true} 
            />
            <Input
                label="시간" 
                placeholder="1 부작/시간" 
                type="text" 
                bg={true} 
            />
          </div>
          <div className='w-full grid md:grid-cols-2 gap-6'>
            <Input
                label="언어" 
                placeholder="한국어" 
                type="text" 
                bg={true} 
            />
            <Input
                label="개봉년도" 
                placeholder="2022" 
                type="number" 
                bg={true} 
            />
        </div>
        {/* IMAGES */}
        <div className='w-full grid md:grid-cols-2 gap-6'>
            {/* img without title */}
            <div className='flex flex-col gap-2'>
                <p className='text-border font-semibold text-sm'>
                    제목 없는 이미지
                </p>
                <Uploader />
                <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                    <img
                        src='/images/videos/9a.png' 
                        alt='' 
                        className='w-full h-full object-cover rounded'
                    />
                </div>
            </div>
            {/* image with title */}
            <div className='flex flex-col gap-2'>
                <p className='text-border font-semibold text-sm'>
                    제목 있는 이미지
                </p>
                <Uploader />
                <div className='w-32 h-32 p-2 bg-main border border-border rounded'>
                    <img
                        src='/images/videos/8a.png' 
                        alt='' 
                        className='w-full h-full object-cover rounded'
                    />
                </div>
            </div>
        </div>
        {/* DESCRIPTION */}
        <Message
            label="비디오 설명" 
            placeholder="비디오 설명 입력" 
        />
        {/* CATEGORY */}
        <div className='text-sm w-full'>
            <Select label="비디오 카테고리" options={CategoriesData}/>
        </div>
        {/* VIDEO */}
        <div className='flex flex-col gap-2 w-full '>
            <label className='text-border font-semibold text-sm'>
                영상
            </label>
            <Uploader />
        </div>
          {/* CASTS */}
          <div className='w-full grid lg:grid-cols-2 gap-6 items-start'>
            <button className='w-full py-4 bg-main border border-subMain border-dashed text-white rounded'>
                주인공 추가
            </button>
            <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4'>
                {
                    UsersData.map((user, i) => (
                        <div
                            key={i}
                            className='p-2 italic text-xs text-text rounded flex-colo bg-main border border-border'
                        >
                            <img
                                src={`/images/${user.image ? user.image : "user.png"}`}
                                alt={user.fullName}
                                className='w-full h-24 object-cover rounded mb-2'
                            />
                            <p>{user.fullName}</p>
                            <div className='flex-rows mt-2 w-full gap-2'>
                                <button className='w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded'>
                                    <MdDelete />
                                </button>
                                <button className='w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded'>
                                    <FaEdit />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
          </div>
          {/* SUBMIT */}
          <button className='bg-subMain w-full flex-rows gap-6 font-medium text-white py-4 rounded'>
              <ImUpload />비디오 추가
            </button>
        </div>
      </SideBar>
  )
}

export default AddVideo
