import { Activity, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-display text-white">
                BioSignal<span className="text-primary">Labs</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Clinical-grade signal intelligence for the next generation of diagnostics.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/solution" className="hover:text-primary transition-colors">Signal Processing</Link></li>
              <li><Link href="/product" className="hover:text-primary transition-colors">AI Diagnostics</Link></li>
              <li><Link href="/product" className="hover:text-primary transition-colors">Integration API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">Mission</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Research</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© 2024 BioSignal Labs Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
