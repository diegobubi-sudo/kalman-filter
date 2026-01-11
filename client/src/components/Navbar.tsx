import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/solution", label: "Solution" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "Company" },
];

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-white">
              BioSignal<span className="text-primary">Labs</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className={`relative px-1 py-2 text-sm font-medium cursor-pointer transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}>
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <Link href="/contact">
              <button className="bg-white text-background px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-background transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-primary/25">
                Get a Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
