import React from 'react'
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi'
import Head from '../Components/Head'
import Layout from '../Layout/Layout'

function ContactUs() {
    const ContactData = [
        {
            id: 1,
            title: "이메일",
            info: "24/7 문의 가능",
            icon: FiMail,
            contact:"redflex@gmail.com"
        },
        {
            id: 2,
            title: "전화",
            info: "오후 6시까지 문의 가능",
            icon: FiPhoneCall,
            contact:"02123456"
        },
        {
            id: 2,
            title: "위치",
            info: "서울 종로구 우정국로 26 A동 20층",
            icon: FiMapPin,
            contact:""
        },
    ]
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="문의" />
        <div
          className="grid md:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8"
        >
            {
                ContactData.map((item) => (
                    <div key={item.id} className="border border-border flex-colo p-10 bg-dry rounded-lg text-center">
                        <span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl'>
                            <item.icon />
                        </span>
                        <h5 className='text-2xl font-semibold mb-2'>
                            {item.title}
                        </h5>
                        <p className='mb-0 text-sm text-text leading-7'>
                            <a 
                                href={`mailto:${item.contact}`}
                                className='text-blue-600'
                            >
                                {item.contact}
                            </a>{' '}
                            {item.info}
                        </p>
                    </div>
                ))
            }
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs
