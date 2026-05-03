import React from 'react'
import { BsRobot } from 'react-icons/bs'

function Footer() {
    return (
        <div className='bg-[#f3f3f3] px-4 py-4'>
            <div className='max-w-6xl mx-auto'>

                <div className='bg-white rounded-3xl border border-gray-200 shadow-sm px-6 py-6 text-center'>

                    <div className='flex justify-center items-center gap-3 mb-6'>
                        <div className='bg-black text-white p-2.5 rounded-xl'>
                            <BsRobot size={18} />
                        </div>
                        <h2 className='font-semibold text-lg tracking-tight'>
                            InterviewPro.AI
                        </h2>
                    </div>


                    <p className='text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-4 leading-relaxed'>
                        Practice smarter with AI-powered mock interviews. Improve communication,
                        strengthen technical skills, and build real interview confidence with
                        personalized feedback and actionable insights.
                    </p>


                    <div className='w-full h-px bg-gray-200 mb-6'></div>


                    <p className='text-xs text-gray-400'>
                        © {new Date().getFullYear()} InterviewPro.AI — All rights reserved | Sohail Shaikh.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer