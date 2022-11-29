import React from 'react'
import Table from '../../../Components/Table'
import { Videos } from '../../../Data/VideosData'
import SideBar from '../SideBar'

function VideosList() {
  return (
    <SideBar>
      <div className='flex flex-col gap-6'>
          <div className='flex-btn gap-2'>
              <h2 className='text-xl font-bold'>좋아하는 비디오</h2>
              <button className='bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                  모두 지우기
              </button>
          </div>

          <Table data={Videos} admin={false} />
      </div>
    </SideBar>
  )
}

export default VideosList
