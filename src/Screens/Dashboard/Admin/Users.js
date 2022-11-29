import React from 'react'
import Table2 from '../../../Components/Table2'
import { UsersData } from '../../../Data/VideosData'
import SideBar from '../SideBar'

function Users() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold'>사용자</h2>

            <Table2 data={UsersData} users={true} />
        </div>
    </SideBar>
  )
}

export default Users
