import React from 'react'
import Wrapper from './Wrapper'
import DetailsInfo from './DetailsInfo'

const Details = () => {
    return (
        <section className=''>
            <Wrapper>
                <div className="w-[60em]  h-[34em] bg-slate-900 text-white backdrop-blur-lg shadow-xl shadow-[#989A98] rounded-md  border-slate-900 overflow-auto">
                    <div className='mr-4'>
                        <DetailsInfo />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Details
