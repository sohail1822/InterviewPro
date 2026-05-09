import React from 'react'
import { BsRobot } from 'react-icons/bs'
import { HiSparkles } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate();
    return (
        <div className='bg-[#f7f8fa] dark:bg-[#111113] px-4 pt-2 pb-5'>
            <div className='max-w-6xl mx-auto'>
                <div className='bg-white dark:bg-[#1a1b1e] rounded-2xl border border-[#e2e4ea] dark:border-[#2e3038] px-8 py-8'
                    style={{ boxShadow: '0 1px 3px rgba(13,15,20,0.05)' }}
                >
                    <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                        {/* Brand */}
                        <div className='flex items-center gap-2.5 cursor-pointer' onClick={() => navigate('/')}>
                            <div className='bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-1.5 rounded-lg'>
                                <BsRobot size={18} />
                            </div>
                            <div className='flex items-center gap-1.5'>
                                <span className='font-semibold text-[17px] text-[#0d0f14] dark:text-[#f1f2f5] tracking-tight'>
                                    InterviewPro
                                </span>
                                <span className='flex items-center gap-0.5 text-[13px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-1.5 py-0.5 rounded-full'>
                                    <HiSparkles size={10} /> AI
                                </span>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className='text-[15px] text-[#8b909e] dark:text-[#5f6370] text-center max-w-sm leading-relaxed'>
                            Enhance your preparation with AI-driven mock interviews. Elevate your communication,
                            solidify your technical expertise, and build authentic interview confidence.
                        </p>

                        {/* Copyright */}
                        <p className='text-[14px] text-[#8b909e] dark:text-[#5f6370] text-nowrap'>
                            © {new Date().getFullYear()} InterviewPro.AI
                        </p>
                    </div>

                    <div className='w-full h-px bg-[#e2e4ea] dark:bg-[#2e3038] mt-6 mb-4' />

                    <p className='text-center text-[13px] text-[#8b909e] dark:text-[#5f6370]'>
                        Built for developers who take their career seriously · All rights reserved · Sohail Shaikh
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

