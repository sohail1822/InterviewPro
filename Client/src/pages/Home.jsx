import React from 'react'
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { motion } from 'motion/react'
import {
    BsRobot,
    BsMic,
    BsClock,
    BsBarChart,
    BsFileEarmarkText,
    BsArrowRight,
    BsShieldCheck,
    BsLightning
} from "react-icons/bs"
import { HiSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthModel from '../components/AuthModel';
import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import Footer from '../components/Footer';

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
}

function Home() {
    const { userData } = useSelector((state) => state.user)
    const [showAuth, setShowAuth] = useState(false);
    const navigate = useNavigate();

    const handleStart = () => {
        if (!userData) { setShowAuth(true); return; }
        navigate("/interview")
    }
    const handleHistory = () => {
        if (!userData) { setShowAuth(true); return; }
        navigate("/history")
    }

    return (
        <div className='min-h-screen bg-[#f7f8fa] dark:bg-[#111113] flex flex-col'>
            <Navbar />

            <div className='flex-1 px-5 py-16 md:py-24'>
                <div className='max-w-5xl mx-auto'>

                    {/* ── Hero ───────────────────────────── */}
                    <div className='text-center mb-24'>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='inline-flex items-center gap-2 text-[14px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 px-3 py-1.5 rounded-full mb-8'
                        >
                            <HiSparkles size={12} />
                            AI-Powered Interview Preparation Platform
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className='text-4xl md:text-6xl font-semibold leading-[1.12] tracking-tight text-[#0d0f14] dark:text-[#f1f2f5] max-w-3xl mx-auto mb-6'
                        >
                            Master Your Next Interview with{' '}
                            <span className='bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent'>
                                AI
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className='text-[18px] text-[#4b5060] dark:text-[#9499a8] max-w-xl mx-auto leading-relaxed mb-10'
                        >
                            Experience hyper-realistic mock interviews tailored to your target role. Receive instant, actionable feedback to land your dream job.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='flex flex-wrap justify-center gap-3'
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={handleStart}
                                className='flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-[16px] font-medium transition-colors shadow-sm shadow-emerald-500/20'
                            >
                                Start Mock Interview <BsArrowRight size={14} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={handleHistory}
                                className='flex items-center gap-2 bg-white dark:bg-[#1a1b1e] hover:bg-[#f0f1f5] dark:hover:bg-[#222428] border border-[#e2e4ea] dark:border-[#2e3038] text-[#0d0f14] dark:text-[#f1f2f5] px-6 py-2.5 rounded-xl text-[16px] font-medium transition-colors'
                            >
                                View Performance History
                            </motion.button>
                        </motion.div>

                        {/* Social Proof Strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className='flex flex-wrap justify-center items-center gap-6 mt-10 text-[14px] text-[#8b909e] dark:text-[#5f6370]'
                        >
                            {[
                                { icon: <BsShieldCheck size={13} className='text-emerald-500' />, label: 'Secure & Private' },
                                { icon: <BsLightning size={13} className='text-amber-500' />, label: 'Real-time AI Feedback' },
                                { icon: <HiSparkles size={13} className='text-indigo-400' />, label: 'Resume-tailored Questions' },
                            ].map((item, i) => (
                                <div key={i} className='flex items-center gap-1.5'>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── How It Works ───────────────────── */}
                    <motion.div {...fadeUp} transition={{ duration: 0.5 }} className='mb-24'>
                        <div className='text-center mb-12'>
                            <span className='text-[13px] font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase'>How It Works</span>
                            <h2 className='text-2xl md:text-3xl font-semibold text-[#0d0f14] dark:text-[#f1f2f5] mt-2 tracking-tight'>
                                Three steps to interview mastery
                            </h2>
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-stretch gap-4'>
                            {[
                                {
                                    icon: <BsRobot size={18} />,
                                    step: "01",
                                    title: "Role & Experience Configuration",
                                    desc: "Specify your target position and experience level. Our AI dynamically adjusts difficulty and interview format to match."
                                },
                                {
                                    icon: <BsMic size={18} />,
                                    step: "02",
                                    title: "Interactive Voice Interview",
                                    desc: "Participate in a lifelike voice interview featuring intelligent, adaptive follow-up questions based on your responses."
                                },
                                {
                                    icon: <BsClock size={18} />,
                                    step: "03",
                                    title: "Timed Pressure Simulation",
                                    desc: "Experience authentic interview constraints with timed sessions designed to enhance articulation and confidence."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -3 }}
                                    className='flex-1 bg-white dark:bg-[#1a1b1e] border border-[#e2e4ea] dark:border-[#2e3038] rounded-2xl p-6 relative'
                                    style={{ boxShadow: '0 1px 3px rgba(13,15,20,0.05)' }}
                                >
                                    <div className='flex items-center gap-3 mb-4'>
                                        <div className='w-8 h-8 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center'>
                                            {item.icon}
                                        </div>
                                        <span className='text-[13px] font-bold tracking-widest text-[#8b909e] dark:text-[#5f6370]'>STEP {item.step}</span>
                                    </div>
                                    <h3 className='font-semibold text-[17px] text-[#0d0f14] dark:text-[#f1f2f5] mb-2 leading-snug'>{item.title}</h3>
                                    <p className='text-[15px] text-[#8b909e] dark:text-[#5f6370] leading-relaxed'>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── AI Features ────────────────────── */}
                    <motion.div {...fadeUp} className='mb-24'>
                        <div className='text-center mb-12'>
                            <span className='text-[13px] font-semibold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase'>Capabilities</span>
                            <h2 className='text-2xl md:text-3xl font-semibold text-[#0d0f14] dark:text-[#f1f2f5] mt-2 tracking-tight'>
                                Advanced AI Features
                            </h2>
                        </div>

                        <div className='grid md:grid-cols-2 gap-4'>
                            {[
                                { image: evalImg, icon: <BsBarChart size={16} />, title: "Comprehensive Answer Evaluation", desc: "Receive immediate, actionable feedback assessing your communication skills, technical accuracy, and overall confidence." },
                                { image: resumeImg, icon: <BsFileEarmarkText size={16} />, title: "Resume-Tailored Questions", desc: "Answer dynamically generated questions based on your resume, emphasizing your past projects and professional experience." },
                                { image: pdfImg, icon: <BsFileEarmarkText size={16} />, title: "In-Depth Performance Reports", desc: "Export comprehensive PDF reports detailing your strengths, areas for improvement, and an actionable roadmap for growth." },
                                { image: analyticsImg, icon: <BsBarChart size={16} />, title: "Progress Analytics", desc: "Monitor your improvement over time with visual progress trends and detailed topic-by-topic breakdowns." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    whileHover={{ y: -2 }}
                                    className='bg-white dark:bg-[#1a1b1e] border border-[#e2e4ea] dark:border-[#2e3038] rounded-2xl p-6 flex items-center gap-5'
                                    style={{ boxShadow: '0 1px 3px rgba(13,15,20,0.05)' }}
                                >
                                    <div className='w-16 h-16 flex-shrink-0'>
                                        <img src={item.image} alt={item.title} className='w-full h-full object-contain' />
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-2 mb-1.5'>
                                            <div className='w-6 h-6 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-500 dark:text-indigo-400 rounded-md flex items-center justify-center'>
                                                {item.icon}
                                            </div>
                                            <h3 className='font-semibold text-[16px] text-[#0d0f14] dark:text-[#f1f2f5]'>{item.title}</h3>
                                        </div>
                                        <p className='text-[14px] text-[#8b909e] dark:text-[#5f6370] leading-relaxed'>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Interview Modes ─────────────────── */}
                    <motion.div {...fadeUp} className='mb-16'>
                        <div className='text-center mb-12'>
                            <span className='text-[13px] font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase'>Versatile</span>
                            <h2 className='text-2xl md:text-3xl font-semibold text-[#0d0f14] dark:text-[#f1f2f5] mt-2 tracking-tight'>
                                Multiple Interview Modes
                            </h2>
                        </div>

                        <div className='grid md:grid-cols-2 gap-4'>
                            {[
                                { img: hrImg, title: "Behavioral (HR) Mode", desc: "Prepare for behavioral assessments with constructive feedback on your communication style, clarity, and cultural alignment." },
                                { img: techImg, title: "Technical Evaluation Mode", desc: "Tackle role-specific technical questions engineered to rigorously test your problem-solving abilities and core knowledge." },
                                { img: confidenceImg, title: "Delivery & Tone Analysis", desc: "Gain insights into your vocal tone, pacing, and speaking patterns to project maximum confidence during interviews." },
                                { img: creditImg, title: "Flexible Credit System", desc: "Access premium interview sessions through a transparent, pay-as-you-go credit model with no hidden fees." }
                            ].map((mode, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    whileHover={{ y: -2 }}
                                    className='bg-white dark:bg-[#1a1b1e] border border-[#e2e4ea] dark:border-[#2e3038] rounded-2xl p-6 flex items-center justify-between gap-4'
                                    style={{ boxShadow: '0 1px 3px rgba(13,15,20,0.05)' }}
                                >
                                    <div>
                                        <h3 className='font-semibold text-[17px] text-[#0d0f14] dark:text-[#f1f2f5] mb-1.5'>{mode.title}</h3>
                                        <p className='text-[14px] text-[#8b909e] dark:text-[#5f6370] leading-relaxed'>{mode.desc}</p>
                                    </div>
                                    <img src={mode.img} alt={mode.title} className='w-16 h-16 object-contain flex-shrink-0 opacity-90' />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>

            {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
            <Footer />
        </div>
    )
}

export default Home

