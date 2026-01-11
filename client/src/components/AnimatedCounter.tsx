import { useEffect, useState, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract number and suffix (e.g., "99.9%" -> 99.9, "%")
  const numericMatch = value.match(/([0-9.]+)/);
  const suffix = value.replace(/[0-9.]/g, "");
  const targetValue = numericMatch ? parseFloat(numericMatch[0]) : 0;

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  const displayValue = useTransform(springValue, (current) => {
    // Determine decimal places from the original value
    const decimalPlaces = numericMatch?.[0].split(".")[1]?.length || 0;
    return current.toFixed(decimalPlaces) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(targetValue);
    }
  }, [isInView, springValue, targetValue]);

  return (
    <motion.span ref={ref}>
      {displayValue}
    </motion.span>
  );
}
