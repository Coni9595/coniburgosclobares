import { motion } from "motion/react";
import { ArrowLeft, Briefcase, GraduationCap, Award, Mail, Linkedin, Github } from "lucide-react";
import { useNavigate } from "react-router";

export function Portfolio() {
  const navigate = useNavigate();

  const experience = [
    {
      role: "Senior Developer",
      company: "Empresa Tecnológica",
      period: "2023 - Presente",
      description: "Liderando el desarrollo de aplicaciones web modernas con React y TypeScript."
    },
    {
      role: "Full Stack Developer",
      company: "Startup Innovadora",
      period: "2021 - 2023",
      description: "Desarrollo de arquitecturas escalables y experiencias de usuario excepcionales."
    },
    {
      role: "Frontend Developer",
      company: "Agencia Digital",
      period: "2019 - 2021",
      description: "Creación de interfaces responsivas y accesibles para clientes internacionales."
    }
  ];

  const education = [
    {
      degree: "Ingeniería en Sistemas",
      institution: "Universidad Tecnológica",
      year: "2019"
    }
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker",
    "GraphQL", "PostgreSQL", "MongoDB", "Figma", "Git", "CI/CD"
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-950/30 via-black to-blue-950/20 -z-10" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-[150px] -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="fixed bottom-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] -z-10"
      />

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-purple-900/30"
      >
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="tracking-wide">Volver</span>
          </button>

          <div className="flex items-center gap-6">
            <a href="mailto:tu@email.com"
               className="text-zinc-400 hover:text-purple-400 transition-colors group relative">
              <Mail className="w-5 h-5" />
              <span className="absolute inset-0 bg-purple-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-zinc-400 hover:text-blue-400 transition-colors group relative">
              <Linkedin className="w-5 h-5" />
              <span className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="text-zinc-400 hover:text-pink-400 transition-colors group relative">
              <Github className="w-5 h-5" />
              <span className="absolute inset-0 bg-pink-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
            </a>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-5xl">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24 relative"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 mb-8"
          />
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight relative inline-block">
            Mi Historia
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-400/50 to-transparent origin-left"
            />
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl leading-relaxed mb-4">
            Desarrollador apasionado con más de 5 años de experiencia creando soluciones
            digitales que combinan diseño elegante con código limpio y eficiente.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg text-purple-300/70 italic max-w-xl"
          >
            Cada proyecto es una oportunidad para transformar ideas en realidad
          </motion.p>
        </motion.div>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-12 group">
            <div className="relative">
              <Briefcase className="w-7 h-7 text-purple-400" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-purple-400 rounded-full blur-md"
              />
            </div>
            <h2 className="text-4xl tracking-tight bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Experiencia
            </h2>
          </div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="border-l-2 border-purple-900/40 pl-8 relative group hover:border-purple-500/60 transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute left-0 top-2 w-3 h-3 -translate-x-[7px] bg-gradient-to-br from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-500/50"
                />
                <div className="text-purple-400 text-sm mb-2 tracking-wider font-medium">{job.period}</div>
                <h3 className="text-2xl md:text-3xl mb-1 group-hover:text-purple-300 transition-colors">{job.role}</h3>
                <div className="text-zinc-300 mb-3 font-medium">{job.company}</div>
                <p className="text-zinc-400 leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="relative">
              <GraduationCap className="w-7 h-7 text-blue-400" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 bg-blue-400 rounded-full blur-md"
              />
            </div>
            <h2 className="text-4xl tracking-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              Educación
            </h2>
          </div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="border-l-2 border-blue-900/40 pl-8 relative group hover:border-blue-500/60 transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.5 }}
                className="absolute left-0 top-2 w-3 h-3 -translate-x-[7px] bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50"
              />
              <div className="text-blue-400 text-sm mb-2 tracking-wider font-medium">{edu.year}</div>
              <h3 className="text-2xl md:text-3xl mb-1 group-hover:text-blue-300 transition-colors">{edu.degree}</h3>
              <div className="text-zinc-300 font-medium">{edu.institution}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="relative">
              <Award className="w-7 h-7 text-pink-400" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 bg-pink-400 rounded-full blur-md"
              />
            </div>
            <h2 className="text-4xl tracking-tight bg-gradient-to-r from-white to-pink-300 bg-clip-text text-transparent">
              Habilidades
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                className="px-5 py-3 bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-purple-900/30 text-zinc-200
                         hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all relative group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
