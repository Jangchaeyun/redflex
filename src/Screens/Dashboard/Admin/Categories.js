import React from 'react'
import { HiPlusCircle } from 'react-icons/hi'
import Table2 from '../../../Components/Table2'
import { CategoriesData } from '../../../Data/CategoriesData'
import SideBar from '../SideBar'

function Categories() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>좋아하는 비디오</h2>
                <button className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded w-full sm:w-auto'>
                    <HiPlusCircle /> 만들기
                </button>
            </div>

            <Table2 data={CategoriesData} users={false} />
        </div>
    </SideBar>
  )
}

export default Categories
