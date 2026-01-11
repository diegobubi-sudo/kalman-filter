import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Activity, Zap, Layers } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function Solution() {
  return (
    <div className="pt-24 min-h-screen">
      <Section className="pb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
            The Signal <span className="text-gradient">Problem</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Biological signals are inherently noisy. Motion artifacts, electromagnetic interference, 
            and baseline wander obscure the truth. Traditional filters fail to adapt.
          </p>
        </div>

        {/* Abstract visual representation of noisy vs clean signal */}
        <div className="relative h-64 md:h-80 w-full max-w-5xl mx-auto bg-secondary/20 rounded-2xl overflow-hidden border border-white/5 mb-24">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Using SVG for a programmatic signal wave animation */}
            <svg className="w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M0,150 Q100,100 200,150 T400,150 T600,150 T800,150 T1000,150"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
              />
              <motion.path
                d="M0,150 Q50,50 100,150 T200,150 T300,50 T400,150 T500,250 T600,150"
                stroke="hsl(180, 70%, 50%)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </svg>
            <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur px-4 py-2 rounded text-xs text-primary font-mono">
              REAL-TIME DENOISING ACTIVE
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold font-display text-white mb-6">Adaptive Filtering Core</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our proprietary Kalman filtering algorithm dynamically adjusts to the signal environment. 
              It distinguishes between physiological variability and environmental noise in real-time.
            </p>
            <ul className="space-y-4">
              {[
                "Sub-millisecond latency",
                "Motion artifact rejection",
                "Baseline wander correction",
                "Power line interference removal"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card p-8 rounded-2xl border-t border-primary/20">
            <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
            <div className="space-y-6">
                { [
                  { label: "Signal-to-Noise Ratio Improvement", value: "24dB" },
                  { label: "Latency", value: "1.2ms" },
                  { label: "Classification Accuracy", value: "99.8%" },
                ].map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{metric.label}</span>
                      <span className="text-primary font-mono">
                        <AnimatedCounter value={metric.value} />
                      </span>
                    </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
