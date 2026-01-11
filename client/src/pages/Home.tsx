import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Brain, Activity, Cpu, ShieldCheck } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            BioSignal Engine v2.0 Now Available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white mb-8"
          >
            Signal Intelligence <br />
            <span className="text-gradient">Redefined</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Clinical-grade biosignal processing powered by advanced Kalman filtering and neural networks. 
            Cleaner data, faster insights, better outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link href="/contact">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-background rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300 flex items-center justify-center group">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/solution">
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Explore Technology
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats/Social Proof */}
      <section className="py-12 border-y border-white/5 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            { [
              { label: "Data Accuracy", value: "99.9%" },
              { label: "Processing Speed", value: "<10ms" },
              { label: "Clinical Partners", value: "15+" },
              { label: "Signals Processed", value: "50M+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-display text-white mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Neural Analysis",
              desc: "Deep learning models trained on millions of clinical datasets to identify anomalies instantly."
            },
            {
              icon: Activity,
              title: "Signal Denoising",
              desc: "Proprietary adaptive filtering removes artifacts while preserving critical biomarkers."
            },
            {
              icon: ShieldCheck,
              title: "Clinical Grade",
              desc: "HIPAA-compliant infrastructure designed for mission-critical healthcare applications."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
