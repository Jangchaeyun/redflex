import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const Links = [
    {
      title:'연락처',
      links:[
        {
          name: '홈',
          link: '/'
        },
        {
          name: '우리에 대해서',
          link: '/about-us'
        },
        {
          name: '문의',
          link: '/contact-us'
        },
        {
          name: '비디오',
          link: '/videos'
        },
      ]
    },
    {
      title:'Top 카테고리',
      links:[
        {
          name: '액션',
          link: '#'
        },
        {
          name: '로맨틱',
          link: '#'
        },
        {
          name: '드라마',
          link: '#'
        },
        {
          name: '역사',
          link: '#'
        },
      ]
    },
    {
      title:'나의 계정',
      links:[
        {
          name: '대시보드',
          link: '/dashboard'
        },
        {
          name: '내가 좋아하는 것',
          link: '/favortie'
        },
        {
          name: '프로필',
          link: '/profile'
        },
        {
          name: '비밀번호 변경',
          link: '/password'
        },
      ]
    }
  ]
  return (
    <div className="bg-dry py-4 border-t-2 border-black">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
          {Links.map((link, index) => (
            <div 
              key={index} 
              className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0"
            >
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6">
                {link.title}
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((text, index) => (
                  <li 
                    key={index}
                    className="flex items-baseline"
                  >
                    <Link 
                      to={text.link}
                      className="text-border inline-block w-full hover:text-subMain"
                    >
                        {text.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link
              to="/"
            >
              <img
                src="/images/logo.png" 
                alt="logo" 
                className="w-2/4 object-contain h-12"
              />
            </Link>
            <p className="leading-7 text-sm text-border mt-3">
              <span>
                서울 종로구 우정국로 26 A동 20층
              </span>
              <br />
              <span>전화번호: 02 1234 5678</span>
              <br />
              <span>이메일:  redflex@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
