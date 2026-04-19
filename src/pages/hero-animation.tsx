import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import clsx from "clsx";
import styles from "@site/src/pages/index.module.css";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import Link from '@docusaurus/Link';
import {useColorMode} from "@docusaurus/theme-common";

// 模拟汇聚的 Logo 数据
const LOGOS = [
  {id: 1, icon: "🎨", name: "Design", color: "#FF5C00", pos: {top: '15%', left: '10%'}, delay: 0},
  {id: 2, icon: "📊", name: "Data", color: "#00C2FF", pos: {top: '10%', right: '15%'}, delay: 0.1},
  {id: 3, icon: "📝", name: "Docs", color: "#00E096", pos: {bottom: '20%', left: '12%'}, delay: 0.2},
  {id: 4, icon: "🤖", name: "AI", color: "#8B5CF6", pos: {bottom: '15%', right: '10%'}, delay: 0.15},
  {id: 5, icon: "📅", name: "Plan", color: "#F43F5E", pos: {top: '40%', left: '5%'}, delay: 0.3},
  {id: 6, icon: "💬", name: "Chat", color: "#3B82F6", pos: {bottom: '40%', right: '5%'}, delay: 0.25},
];

const lightImg = require('@site/static/img/whiteboard-light.png').default;
const darkImg = require('@site/static/img/whiteboard-dark.png').default;

const HeroAnimation = () => {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode} = useColorMode();
  const [stage, setStage] = useState('scattered'); // scattered -> merging -> stable

  useEffect(() => {
    // const timer1 = setTimeout(() => setStage('merging'), 1500);
    const timer2 = setTimeout(() => setStage('stable'), 500);
    return () => {
      // clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#050505] flex items-center justify-center overflow-hidden">

      {/* 阶段 1 & 2：Logo 汇聚动画 */}
      <AnimatePresence>
        {/*{stage !== 'stable' && (*/}
        {/*  <div className="absolute inset-0 z-50 pointer-events-none">*/}
        {/*    {LOGOS.map((logo) => (*/}
        {/*      <motion.div*/}
        {/*        key={logo.id}*/}
        {/*        initial={{opacity: 0, scale: 0, ...logo.pos}}*/}
        {/*        animate={stage === 'scattered' ? {*/}
        {/*          opacity: [0, 0.6, 0.4],*/}
        {/*          scale: 1,*/}
        {/*          y: [0, -10, 0],*/}
        {/*          transition: {*/}
        {/*            opacity: {duration: 0.5},*/}
        {/*            y: {duration: 3, repeat: Infinity, ease: "easeInOut"}*/}
        {/*          }*/}
        {/*        } : {*/}
        {/*          // 阶段 2：向中心 App 汇聚*/}
        {/*          top: '50%',*/}
        {/*          left: '50%',*/}
        {/*          x: '-50%',*/}
        {/*          y: '-50%',*/}
        {/*          scale: 0.2,*/}
        {/*          opacity: 0,*/}
        {/*          filter: "blur(10px)",*/}
        {/*          transition: {*/}
        {/*            duration: 0.7,*/}
        {/*            delay: logo.delay,*/}
        {/*            ease: [0.45, 0, 0.55, 1]*/}
        {/*          }*/}
        {/*        }}*/}
        {/*        className="absolute flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl"*/}
        {/*      >*/}
        {/*        <span className="text-2xl">{logo.icon}</span>*/}
        {/*        <span className="text-white/80 font-medium text-sm">{logo.name}</span>*/}
        {/*      </motion.div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*)}*/}
      </AnimatePresence>

      {/* 阶段 3：Nexthena App 主界面 */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Slogan 部分 */}
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={stage === 'stable' ? {opacity: 1, y: 0} : {}}
          className="text-center mb-12"
        >
          <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container" style={{
              display: "flex"
            }}>
              <div style={{
                marginTop: "50px",
                marginRight: "50px",
                width: "400px",
              }}>
                <Heading as="h1" className="hero__title">
                  {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    Tutorial - 1min ⏱️
                  </Link>
                </div>
              </div>
              <div className="">
                <img src={colorMode === 'dark' ? darkImg : lightImg} alt={"whiteboard home"}/>
              </div>

            </div>
          </header>
        </motion.div>

        {/* App Mockup */}
        <motion.div
          initial={{scale: 0.9, opacity: 0}}
          animate={
            stage === 'merging' ? {scale: [0.9, 1.02, 1], opacity: 1} :
              stage === 'stable' ? {scale: 1, opacity: 1} : {}
          }
          transition={{duration: 0.8}}
          className="relative group"
        >
          {/* 汇聚时的光效回馈 */}
          {stage === 'merging' && (
            <motion.div
              initial={{opacity: 0, scale: 0.5}}
              animate={{opacity: [0, 0.8, 0], scale: [0.5, 1.5]}}
              className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"
            />
          )}

          {/* Mockup 窗口 */}
          <div
            className="w-[320px] h-[200px] md:w-[800px] md:h-[500px] bg-[#0A0A0A] rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="w-full h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10"/>
                <div className="w-3 h-3 rounded-full bg-white/10"/>
              </div>
            </div>
            <div className="p-8">
              <motion.div
                initial={{opacity: 0}}
                animate={stage === 'stable' ? {opacity: 1} : {}}
                className="space-y-4"
              >
                <div className="h-4 w-1/3 bg-white/10 rounded"/>
                <div className="h-24 w-full bg-white/5 rounded-xl border border-white/5"/>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-white/5 rounded-lg"/>
                  <div className="h-20 bg-white/5 rounded-lg"/>
                  <div className="h-20 bg-white/5 rounded-lg"/>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAnimation;
