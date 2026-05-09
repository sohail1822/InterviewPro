import React from 'react'
import { VscRobot } from "react-icons/vsc";
import { RiSparkling2Fill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { motion } from "motion/react"
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import axios from 'axios';
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
import { HiSparkles } from 'react-icons/hi';

function Auth({ isModel = false }) {
    const dispatch = useDispatch();

    const handleGoogleAuth = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            let User = response.user;
            let name = User.displayName;
            let email = User.email;
            const result = await axios.post(ServerUrl + "/api/auth/google", { name, email }, { withCredentials: true });
            dispatch(setUserData(result.data));
        } catch (error) {
            console.log(error);
            dispatch(setUserData(null));
        }
    }

    return (
        <div className={`w-full 
            ${isModel ? "py-4" : "min-h-screen bg-[#f7f8fa] dark:bg-[#111113] flex items-center justify-center px-6 py-20"}
        `}>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full ${isModel ? "max-w-md p-8 rounded-2xl" : "max-w-md p-10 rounded-2xl"} bg-white dark:bg-[#1a1b1e] border border-[#e2e4ea] dark:border-[#2e3038]`}
                style={{ boxShadow: '0 8px 32px rgba(13,15,20,0.10)' }}
            >
                {/* Brand */}
                <div className='flex items-center justify-center gap-2 mb-8'>
                    <div className='bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-1.5 rounded-lg'>
                        <VscRobot size={22} />
                    </div>
                    <span className='font-semibold text-[18px] text-[#0d0f14] dark:text-[#f1f2f5]'>InterviewPro</span>
                    <span className='flex items-center gap-0.5 text-[13px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-1.5 py-0.5 rounded-full'>
                        <HiSparkles size={10} /> AI
                    </span>
                </div>

                {/* Heading */}
                <div className='text-center mb-2'>
                    <h1 className='text-2xl font-semibold text-[#0d0f14] dark:text-[#f1f2f5] leading-tight mb-1'>
                        Welcome back
                    </h1>
                    <div className='inline-flex items-center gap-1.5 text-[15px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full mt-1'>
                        <RiSparkling2Fill size={13} />
                        AI-Powered Interview Practice
                    </div>
                </div>

                <p className='text-[15px] text-[#8b909e] dark:text-[#5f6370] text-center leading-relaxed mb-8 mt-4'>
                    Master your interviews with personalized AI mock sessions, instant performance feedback, and a comprehensive question bank.
                </p>

                {/* Divider */}
                <div className='w-full h-px bg-[#e2e4ea] dark:bg-[#2e3038] mb-6' />

                {/* Google Button */}
                <motion.button
                    onClick={handleGoogleAuth}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className='w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-[#f7f8fa] dark:bg-[#222428] hover:bg-[#f0f1f5] dark:hover:bg-[#2a2d33] border border-[#e2e4ea] dark:border-[#2e3038] rounded-xl text-[16px] font-medium text-[#0d0f14] dark:text-[#f1f2f5] transition-colors'
                >
                    <FcGoogle size={18} />
                    Continue with Google
                </motion.button>

                <p className='text-center text-[13px] text-[#8b909e] dark:text-[#5f6370] mt-5'>
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </motion.div>
        </div>
    )
}

export default Auth

