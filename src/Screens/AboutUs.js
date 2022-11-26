import React from 'react'
import Head from '../Components/Head'
import Layout from './../Layout/Layout'

function AboutUs() {
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="우리에 대해서" />
        <div
          className="xl:py-20 py-10 px-4"
        >
          <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
            <div>
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                Redflex에 오신것을 환영합니다!!
              </h3>
              <div
                className='mt-3 text-sm leading-8 text-text'
              >
                <p>
                  전 세계 190개국 이상의, 실제로 4억 명 이상의 고객들이 시청하는 2억 2300만 명의 직접 회원을 보유한 스트리밍 엔터테인먼트 기업으로서 영화와 드라마, TV 프로그램, 다큐멘터리, 애니메이션 등의 매우 다양한 장르의 컨텐츠들을 언제, 어디서나 무제한으로 모든 기기에서 볼 수 있는 플랫폼이다. 레드플릭스에서 만든 것과 다른 곳에서 가져온 컨텐츠들을 광고나 약정 같은 조건이나 제한 없이, 모든 컨텐츠들을 무제한으로 볼 수 있다.
                </p>
                <p>
                  넷플릭스는 다수의 드라마를 자체 제작하고 있다. 일반적인 방송사에서 한 시즌을 방송할 때 일주일에 한두 개의 에피소드를 방영하는데, 넷플릭스는 하루에 한 시즌을 모두 공개하고 있다.
                </p>
              </div>
              <div
                className='grid md:grid-cols-2 gap-6 mt-8'  
              >
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold mt-4'>
                    10K
                  </span>
                  <h4 className='text-lg font-semibold mb-1'>영화 리스트</h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
                    원하시는 많은 영화들을 보실 수 있습니다.
                  </p>
                </div>
                <div className='p-8 bg-dry rounded-lg'>
                  <span className='text-3xl block font-extrabold mt-4'>
                    8K
                  </span>
                  <h4 className='text-lg font-semibold mb-1'>사용자</h4>
                  <p className='mb-0 text-text leading-7 text-sm'>
                    가입 없이 완전 무료
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-10 lg:mt-0'>
              <img
                src='/images/about2.jpg'
                alt='aboutus'
                className='w-full xl:block hidden h-header rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs
