import React from 'react'
import { FaFacebook, FaPinterest, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
import { FacebookShareButton, PinterestShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from 'react-share'
import MainModal from './MainModal'

function ShareMovieModal({ modalOpen, setModalOpen, movie}) {
    const shareData = [
        {
            icon:FaFacebook,
            shareButton:FacebookShareButton
        },
        {
            icon:FaTwitter,
            shareButton:TwitterShareButton
        },
        {
            icon:FaWhatsapp,
            shareButton:WhatsappShareButton
        },
        {
            icon: FaTelegram,
            shareButton:TelegramShareButton
        },
        {
            icon:FaWhatsapp,
            shareButton:WhatsappShareButton
        },
        {
            icon:FaPinterest,
            shareButton:PinterestShareButton
        },
        {
            icon:MdEmail,
            shareButton:EmailShareButton,
        },
    ];

    const url = `${window.location.protocol}//${window.location.protocol}/video/${movie.name}`
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block sm:4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white shadow-xl rounded-2xl'>
            <h2 className='text-2xl font-bold'>공유 <span className='text-xl font-bold'>"{movie?.name}"</span></h2>
            <form className='flex-rows flex-wrap gap-6 mt-6'>
                {
                    shareData.map((data, index) => (
                        <data.shareButton
                            key={index}
                            url={url}
                            quote="Redflex | Free Videos Site"
                        >
                            <div className='w-12 transitions hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30'>
                                <data.icon />
                            </div>
                        </data.shareButton>
                    ))
                }
            </form>
        </div>
    </MainModal>
  )
}

export default ShareMovieModal
