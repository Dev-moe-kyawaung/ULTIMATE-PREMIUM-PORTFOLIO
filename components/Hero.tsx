// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255,0,255,.1) 25%, rgba(255,0,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,0,255,.1) 75%, rgba(255,0,255,.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255,0,255,.1) 25%, rgba(255,0,255,.1) 26%, transparent 27%, transparent 74%, rgba(255,0,255,.1) 75%, rgba(255,0,255,.1) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Glassmorphic Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="mb-8 relative"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-xl opacity-50" />
          <img
            src="/profile.jpg"
            alt="Dev Moe"
            className="relative w-32 h-32 rounded-full border-4 border-slate-300/20 object-cover"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white text-center mb-4"
          variants={itemVariants}
        >
          Moe Kyawaung
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {' '}
            Dev
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl text-slate-300 text-center mb-8 max-w-2xl"
          variants={itemVariants}
        >
          Full-Stack Developer | AI Enthusiast | Open Source Contributor
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-slate-400 text-center mb-12 max-w-3xl leading-relaxed"
          variants={itemVariants}
        >
          Building elegant digital solutions with cutting-edge technologies. 
          Passionate about creating impactful applications that solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className="px-8 py-3 border-2 border-slate-400 text-slate-300 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex gap-6" variants={itemVariants}>
          {[
            { icon: FaGithub, href: 'https://github.com/Dev-moe-kyawaung' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/moe-kyawaung' },
            { icon: FaTwitter, href: 'https://twitter.com/dev_moe' },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-purple-600/50 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="text-2xl text-cyan-400" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-slate-400 text-sm mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 text-cyan-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
