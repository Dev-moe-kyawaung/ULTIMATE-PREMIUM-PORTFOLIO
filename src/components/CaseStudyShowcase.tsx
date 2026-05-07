// src/components/CaseStudyShowcase.tsx
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export const CaseStudyShowcase = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      subtitle: 'Scaling to 10K+ Users',
      challenge: 'Build a scalable e-commerce platform handling high traffic with sub-second response times',
      solution: 'Implemented microservices architecture with Redis caching and optimized database queries',
      results: [
        { metric: '99.9%', description: 'Uptime' },
        { metric: '500ms', description: 'Avg Response' },
        { metric: '10K+', description: 'Concurrent Users' },
      ],
      image: '/case-studies/ecommerce.jpg',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      testimonial: {
        text: 'The team delivered a production-ready solution that exceeded our expectations.',
        author: 'CEO, TechCorp',
      },
    },
    {
      id: 2,
      title: 'AI-Powered Analytics',
      subtitle: 'Real-Time Insights Dashboard',
      challenge: 'Process 1M+ events daily and provide real-time insights to users',
      solution: 'Developed streaming pipeline with Apache Kafka and ML models for predictions',
      results: [
        { metric: '100ms', description: 'Latency' },
        { metric: '1M+', description: 'Events/Day' },
        { metric: '95%', description: 'Accuracy' },
      ],
      image: '/case-studies/analytics.jpg',
      technologies: ['Python', 'TensorFlow', 'Kafka', 'React', 'Recharts'],
      testimonial: {
        text: 'This platform transformed how we understand our customer data.',
        author: 'CTO, DataFlow Inc',
      },
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Case Studies</span>
          </h2>
          <p className="text-slate-400">Deep-dive into real-world projects</p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              {/* Content */}
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-cyan-400 font-semibold">Case Study #{study.id}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-xl text-slate-400">{study.subtitle}</p>
                </motion.div>

                {/* Challenge */}
                <motion.div
                  className="mb-8 p-6 rounded-lg bg-slate-800/50 border border-slate-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="text-purple-400 font-semibold mb-2">Challenge</h4>
                  <p className="text-slate-300">{study.challenge}</p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  className="mb-8 p-6 rounded-lg bg-slate-800/50 border border-slate-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-cyan-400 font-semibold mb-2">Solution</h4>
                  <p className="text-slate-300">{study.solution}</p>
                </motion.div>

                {/* Results */}
                <motion.div
                  className="grid grid-cols-3 gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {study.results.map((result, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-gradient-to-br from-cyan-600/20 to-purple-600/20 border border-cyan-500/20"
                    >
                      <p className="text-2xl font-bold text-cyan-400">{result.metric}</p>
                      <p className="text-sm text-slate-400">{result.description}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Testimonial */}
                <motion.div
                  className="p-6 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700/50 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-slate-300 italic mb-4">"{study.testimonial.text}"</p>
                  <p className="text-cyan-400 font-semibold">— {study.testimonial.author}</p>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm hover:border-cyan-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                className={`relative rounded-xl overflow-hidden h-96 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20" />
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Case Studies <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
