import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'motion/react'
import { BsRobot, BsCoin } from 'react-icons/bs'
import { HiOutlineLogout, HiMoon, HiSun } from 'react-icons/hi'
import { FaUserAstronaut } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ServerUrl } from "../App"
import { setUserData } from '../redux/userSlice'
import { toggleTheme } from '../redux/themeSlice'
import AuthModel from './AuthModel'

function Navbar() {
    const { userData } = useSelector((state) => state.user)
    const { mode } = useSelector((state) => state.theme)
    const [showCreditPopup, setShowCreditPopup] = useState(false);
    const [showUserPopup, setShowUserPopup] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [showAuth, setShowAuth] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.get(ServerUrl + "/api/auth/logout", { withCredentials: true })
            dispatch(setUserData(null));
            setShowCreditPopup(false);
            setShowUserPopup(false);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    const closeAll = () => { setShowCreditPopup(false); setShowUserPopup(false); }

    return (
        <div className='bg-[#f7f8fa] dark:bg-[#111113] flex justify-center px-4 pt-5'>
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className='w-full max-w-6xl bg-white dark:bg-[#1a1b1e] rounded-2xl border border-[#e2e4ea] dark:border-[#2e3038] px-6 py-3.5 flex items-center justify-between relative'
                style={{ boxShadow: '0 1px 3px rgba(13,15,20,0.06), 0 1px 2px rgba(13,15,20,0.04)' }}
            >
                {/* Logo */}
                <div className='flex items-center gap-2.5 cursor-pointer select-none' onClick={() => navigate('/')}>
                    <div className='bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-1.5 rounded-lg shadow-sm'>
                        <BsRobot size={22} />
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <span className='font-semibold text-[17px] text-[#0d0f14] dark:text-[#f1f2f5] hidden md:block tracking-tight'>
                            InterviewPro
                        </span>
                        <span className='hidden md:flex items-center gap-0.5 text-[13px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-1.5 py-0.5 rounded-full'>
                            <HiSparkles size={10} /> AI
                        </span>
                    </div>
                </div>

                {/* Right Controls */}
                <div className='flex items-center gap-2'>

                    {/* Theme Toggle */}
                    <motion.button
                        onClick={() => dispatch(toggleTheme())}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.92 }}
                        className='w-8 h-8 flex items-center justify-center rounded-lg bg-[#f0f1f5] dark:bg-[#222428] hover:bg-[#e8eaf0] dark:hover:bg-[#2a2d33] border border-[#e2e4ea] dark:border-[#2e3038] transition-colors'
                        title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {mode === 'dark'
                            ? <HiSun size={16} className='text-amber-400' />
                            : <HiMoon size={16} className='text-[#5f6370]' />
                        }
                    </motion.button>

                    {/* Credits */}
                    <div className='relative'>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => {
                                if (!userData) { setShowAuth(true); return; }
                                setShowCreditPopup(!showCreditPopup);
                                setShowUserPopup(false);
                            }}
                            className='flex items-center gap-1.5 bg-[#f0f1f5] dark:bg-[#222428] dark:text-[#f1f2f5] text-[#0d0f14] px-3 py-1.5 rounded-lg text-[15px] font-medium border border-[#e2e4ea] dark:border-[#2e3038] hover:bg-[#e8eaf0] dark:hover:bg-[#2a2d33] transition-colors'
                        >
                            <BsCoin size={14} className='text-amber-500' />
                            <span>{userData?.credits ?? 0}</span>
                        </motion.button>

                        <AnimatePresence>
                            {showCreditPopup && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.15 }}
                                    className='absolute right-0 mt-2 w-64 bg-white dark:bg-[#1a1b1e] border border-[#e2e4ea] dark:border-[#2e3038] rounded-xl p-4 z-50'
                                    style={{ boxShadow: '0 8px 24px rgba(13,15,20,0.12)' }}
                                >
                                    <div className='flex items-center gap-2 mb-3'>
                                        <BsCoin size={16} className='text-amber-500' />
                                        <p className='text-[15px] font-semibold text-[#0d0f14] dark:text-[#f1f2f5]'>
                                            {userData?.credits ?? 0} Credits Remaining
                                        </p>
                                    </div>
                                    <p className='text-[14px] text-[#5f6370] dark:text-[#5f6370] mb-3 leading-relaxed'>
                                        Credits are used for each AI interview session. Top up to continue practicing.
                                    </p>
                                    <button
                                        onClick={() => { navigate("/pricing"); closeAll(); }}
                                        className='w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-[15px] font-medium transition-colors'
                                    >
                                        Buy More Credits
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* User Avatar */}
                    <div className='relative'>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.92 }}
                            onClick={() => {
                                if (!userData) { setShowAuth(true); return; }
                                setShowUserPopup(!showUserPopup);
                                setShowCreditPopup(false);
                            }}
                            className='w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg flex items-center justify-center text-[15px] font-semibold shadow-sm'
                        >
                            {userData ? userData?.name.slice(0, 1).toUpperCase() : <FaUserAstronaut size={14} />}
                        </motion.button>

                        <AnimatePresence>
                            {showUserPopup && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.15 }}
                                    className='absolute right-0 mt-2 w-52 bg-white dark:bg-[#1a1b1e] border border-[#e2e4ea] dark:border-[#2e3038] rounded-xl p-3 z-50'
                                    style={{ boxShadow: '0 8px 24px rgba(13,15,20,0.12)' }}
                                >
                                    <div className='px-1 pb-2 mb-2 border-b border-[#e2e4ea] dark:border-[#2e3038]'>
                                        <p className='text-[15px] font-semibold text-[#0d0f14] dark:text-[#f1f2f5] truncate'>{userData?.name}</p>
                                        <p className='text-[13px] text-[#9499a8] truncate'>{userData?.email}</p>
                                    </div>
                                    <button
                                        onClick={() => { navigate('/history'); closeAll(); }}
                                        className='w-full text-left text-[15px] px-2 py-1.5 rounded-lg hover:bg-[#f0f1f5] dark:hover:bg-[#222428] text-[#4b5060] dark:text-[#9499a8] transition-colors'
                                    >
                                        Interview History
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className='w-full text-left text-[15px] px-2 py-1.5 rounded-lg flex items-center gap-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors mt-0.5'
                                    >
                                        <HiOutlineLogout size={14} /> Sign Out
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
        </div>
    )
}

export default Navbar

