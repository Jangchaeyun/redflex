import React from 'react'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import Table from '../../../Components/Table'
import { Videos } from '../../../Data/VideosData'
import SideBar from '../SideBar'

function Dashboard() {
  const DashboardData = [
    {
      bg:"bg-orange-600",
      icon: FaRegListAlt,
      title:"전체 비디오",
      total: 8
    },
    {
      bg:"bg-blue-700",
      icon: HiViewGridAdd,
      title:"전체 카테고리",
      total: 14,
    },
    {
      bg:"bg-green-600",
      icon: FaUser,
      title:"전체 사용자",
      total: 1
    },
  ]
  return (
    <SideBar>
        <h2 className='text-xl font-bold'>대시보드</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
          {DashboardData.map((data, index) => (
            <div 
              key={index}
              className='p-4 rounded bg-main border-border grid grid-cols-4 gap-2'
            >
              <div className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}>
                <data.icon />
              </div>
              <div className='col-span-3'>
                <h2>{data.title}</h2>
                <p className='mt-2 font-bold'>{data.total}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className='text-md font-medium my-6 text-border'>최근 비디오</h3>
        <Table data={Videos.slice(0,5)} admin={true} />
    </SideBar>
  )
}

export default Dashboard
