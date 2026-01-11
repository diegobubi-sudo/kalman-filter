import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Server, Database, Share2, FileCode } from "lucide-react";
import { Link } from "wouter";

export default function Product() {
  return (
    <div className="pt-24 min-h-screen">
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
            The <span className="text-gradient">Platform</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive suite of tools for acquisition, processing, and analysis of biosignals.
            Built for developers, researchers, and clinicians.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "BioSignal API",
              desc: "RESTful endpoints for batch processing and analysis.",
              icon: Server,
              code: "POST /api/process/ecg"
            },
            {
              title: "Real-time Stream",
              desc: "WebSocket connections for live patient monitoring.",
              icon: Share2,
              code: "wss://stream.biosignal.labs"
            },
            {
              title: "Data Lake",
              desc: "Secure, compliant storage for longitudinal studies.",
              icon: Database,
              code: "Storage.query({ patientId })"
            },
            {
              title: "SDKs",
              desc: "Native libraries for iOS, Android, and Python.",
              icon: FileCode,
              code: "import biosignal"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-2xl group cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-12 w-12 bg-secondary rounded-xl flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <div className="font-mono text-xs bg-black/30 text-primary px-3 py-1 rounded border border-primary/20">
                  {item.code}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-primary/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-display text-white mb-6">Ready to integrate?</h2>
          <p className="text-muted-foreground mb-8">
            Our documentation is comprehensive and our support team is staffed by engineers.
            Start building with clinical-grade reliability today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-white text-background rounded-full font-bold hover:bg-gray-200 transition-colors">
              Read Documentation
            </button>
            <Link href="/contact">
              <button className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
