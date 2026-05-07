// src/components/Dashboard.tsx
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useGitHub } from '@/hooks/useGitHub';

const skillsData = [
  { skill: 'React', proficiency: 95 },
  { skill: 'TypeScript', proficiency: 90 },
  { skill: 'Next.js', proficiency: 92 },
  { skill: 'Node.js', proficiency: 88 },
  { skill: 'MongoDB', proficiency: 85 },
  { skill: 'AI/ML', proficiency: 80 },
];

export const Dashboard = () => {
  const { stats, loading } = useGitHub();

  const StatCard = ({ label, value, icon: Icon, gradient }: any) => (
    <motion.div
      className={`relative p-6 rounded-xl bg-gradient-to-br ${gradient} backdrop-blur-xl border border-white/10 overflow-hidden`}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <p className="text-slate-300 font-medium">{label}</p>
          <Icon className="text-2xl opacity-60" />
        </div>
        <p className="text-3xl font-bold text-white">{value}</p>
      </div>
      <div className="absolute inset-0 opacity-0 hover:opacity-10 bg-white transition-opacity" />
    </motion.div>
  );

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Analytics</span>
          </h2>
          <p className="text-slate-400">Real-time statistics & achievements</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            label="GitHub Repositories"
            value={stats?.repositories || '24'}
            icon={() => '📦'}
            gradient="from-blue-600/20 to-blue-400/5"
          />
          <StatCard
            label="Total Stars"
            value={stats?.stars || '1.2K'}
            icon={() => '⭐'}
            gradient="from-yellow-600/20 to-yellow-400/5"
          />
          <StatCard
            label="Contributions"
            value={stats?.contributions || '2.5K+'}
            icon={() => '🔥'}
            gradient="from-red-600/20 to-red-400/5"
          />
          <StatCard
            label="Followers"
            value={stats?.followers || '340'}
            icon={() => '👥'}
            gradient="from-purple-600/20 to-purple-400/5"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Skills Radar */}
          <motion.div
            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-6">Technical Skills</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="skill" stroke="rgba(255,255,255,0.5)" />
                <PolarRadiusAxis stroke="rgba(255,255,255,0.3)" />
                <Radar
                  name="Proficiency"
                  dataKey="proficiency"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-6">Experience Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { year: '2020', projects: 5 },
                { year: '2021', projects: 12 },
                { year: '2022', projects: 18 },
                { year: '2023', projects: 24 },
                { year: '2024', projects: 32 },
              ]}>
                <CartesianGrid stroke="rgba(255,255,255,0.1)" />
                <XAxis stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="projects" fill="#06b6d4" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
