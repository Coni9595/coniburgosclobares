import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";

export function Landing() {
  const navigate = useNavigate();

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 5,
    size: 1 + Math.random() * 3
  }));

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Multi-layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-blue-950/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-950/20 via-transparent to-cyan-950/20" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"
      />

      {/* Floating particles */}
      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ x: `${el.x}vw`, y: `${el.y}vh`, opacity: 0 }}
          animate={{
            y: [`${el.y}vh`, `${el.y - 30}vh`, `${el.y}vh`],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut"
          }}
          className="absolute rounded-full bg-white"
          style={{ width: el.size, height: el.size }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl"
        >
          {/* Decorative icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-purple-400 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Subtle overline */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 0.6, width: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-gradient-to-r from-purple-400 via-white to-blue-400 mx-auto mb-8"
          />

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl mb-6 tracking-tight relative"
          >
            <span className="relative inline-block">
              Constanza Burgos Clobares
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-zinc-300 mb-4 tracking-wide"
          >
            Creando experiencias digitales que importan
          </motion.p>

          {/* Additional tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-base md:text-lg text-purple-300/70 mb-12 italic"
          >
            Donde la creatividad encuentra la innovación
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="relative h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-12 max-w-md mx-auto"
          >
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/3"
            />
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => navigate('/portfolio')}
            className="group relative inline-flex items-center gap-3 px-10 py-5 overflow-hidden
                     hover:scale-[1.05] transition-transform duration-300"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600" />

            {/* Shimmer effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />

            <span className="relative z-10 tracking-wider font-medium">Explorar mi trabajo</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

            {/* Glow effect */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur-xl -z-10"
            />
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] h-20 bg-gradient-to-b from-purple-400 via-pink-400 to-transparent"
          />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs text-purple-300 tracking-widest uppercase"
          >
            Descubre más
          </motion.div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-purple-500"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-blue-500"
      />
    </div>
  );
}
