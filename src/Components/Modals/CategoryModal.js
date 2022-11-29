import React from 'react'
import { Input } from '../UsedInputs'
import MainModal from './MainModal'

function CategoryModal({ modalOpen, setModalOpen, category}) {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block sm:4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white shadow-xl rounded-2xl'>
            <h2 className='text-3xl font-bold'>{category ? "업데이트" : "만들기"}</h2>
            <form className='flex flex-col gap-6 text-left mt-6'>
                <Input
                    label="카테고리 이름" 
                    placeholder={category ? category.title : "액션"} 
                    type="text" 
                    bg={false} 
                />
                <button
                    onClick={() => setModalOpen(false)}
                    className='w-full flex-rows gap-4 py-3 text-lg font-bold hover:bg-transparent hover:bg-dry border-2 border-subMain rounded bg-subMain text-white'
                >
                    {
                        category ? "업데이트" : "추가하기"
                    }
                </button>
            </form>
        </div>
    </MainModal>
  )
}

export default CategoryModal
