import React from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi';

function Uploader() {
    const {getRootProps, getInputProps} = useDropzone({
        multiple: false,
        maxSize: 1000000,
        onDrop: (acceptedFiles) => {
            alert(acceptedFiles[0].name);
        },
    })
  return (
    <div className='w-full text-center'>
        <div
            {...getRootProps()} 
            className='px-6 pt-5 pb-6 border-border border-dashed bg-main rounded-md cursor-pointer'
            >
                <input {...getInputProps()}/>
                <span className='mx-auto flex-colo text-subMain text-3xl'>
                    <FiUploadCloud />
                </span>
                <p className='text-sm mt-2'>이미지를 여기에 드래그하세요</p>
                <em className='text-xs text-border'>
                    (오직.jpg와 .png 확장명만 가능합니다.)
                </em>
        </div>
    </div>
  )
}

export default Uploader
