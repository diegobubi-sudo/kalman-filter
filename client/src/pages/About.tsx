import { motion } from "framer-motion";
import { Section } from "@/components/Section";

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-8">
            Science First.
          </h1>
          <div className="prose prose-invert prose-lg">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              BioSignal Labs was founded by a team of neuroscientists and signal processing engineers 
              frustrated by the quality of data available in clinical settings. 
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe that the future of diagnostics lies in the subtle patterns hidden within 
              biological noise. Our mission is to unveil these patterns through rigorous mathematics 
              and advanced machine learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are a research-focused organization. Every feature in our platform is backed by 
              peer-reviewed evidence and validated against gold-standard datasets.
            </p>
          </div>
        </div>
      </Section>
      
      <Section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-3 mb-8">
              <h2 className="text-3xl font-bold font-display text-white">Leadership</h2>
            </div>
            {[
              { 
                name: "Dr. Elena Rostova", 
                role: "Chief Science Officer",
                bg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
              },
              { 
                name: "James Chen", 
                role: "Head of Engineering",
                bg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
              },
              { 
                name: "Sarah Miller", 
                role: "Clinical Director",
                bg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
              },
            ].map((person, i) => (
              <div key={i} className="group">
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-secondary">
                  {/* Team member portrait */}
                  <img 
                    src={person.bg} 
                    alt={person.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                </div>
                <h3 className="text-xl font-bold text-white">{person.name}</h3>
                <p className="text-primary text-sm font-medium">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
