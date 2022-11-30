import React from 'react'
import { BsFillGridFill } from "react-icons/bs"
import { FaHeart, FaListAlt, FaUsers } from "react-icons/fa"
import { RiLockPasswordFill, RiMovie2Fill } from "react-icons/ri"
import { HiViewGridAdd } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"
import Layout from '../../Layout/Layout'
import { NavLink } from 'react-router-dom'

function SideBar({children}) {
    const SideLinks = [
        {
            name: "대시보드",
            link: "/dashboard",
            icon: BsFillGridFill
        },
        {
            name: "비디오 리스트",
            link: "/videoslist",
            icon: FaListAlt
        },
        {
            name: "비디오 추가",
            link: "/addvideo",
            icon: RiMovie2Fill,
        },
        {
            name: "카테고리",
            link: "/categories",
            icon: HiViewGridAdd,
        },
        {
            name: "사용자",
            link: "/users",
            icon: FaUsers,
        },
        {
            name: "프로필 업데이트",
            link: "/profile",
            icon: FiSettings,
        },
        {
            name: "좋아하는 비디오",
            link: "/favorites",
            icon: FaHeart,
        },
        {
            name: "비밀번호 변경",
            link: "/password",
            icon: RiLockPasswordFill,
        },
    ]

    const active = "bg-dryGray text-subMain"
    const hover = "hover:text-white hover:bg-main"
    const inActive = "rounded font-medium text-sm transitions flex gap-3 items-center p-4"
    const Hover = ({ isActive }) => 
        isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <Layout>
        <div className='min-h-screen container mx-auto px-2'>
            <div className='xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
                <div className='col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5'>
                    {
                        // Sidebar Links
                        SideLinks.map((link, index) => (
                            <NavLink to={link.link} key={index} className={Hover}>
                                <link.icon /> <p>{link.name}</p>
                            </NavLink>
                        ))
                    }
                </div>
                <div
                    data-aos='fade-up' 
                    data-aos-duration="1000"
                    data-aos-delay="10"
                    data-aos-offset="200"
                    className='col-span-6 rounded bg-dry border-gray-800 p-6'
                >
                    {children}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default SideBar
