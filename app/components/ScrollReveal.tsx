"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Component
 * Lightweight intersection observer to animate elements on enter.
 * Uses CSS transitions for "low motion" / high performance.
 */
export default function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Slight delay before making it visible
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    // Once visible, stop observing to keep it revealed
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
            }
        );

        const currentRef = elementRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, [delay]);

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-1000 ease-out transform will-change-[opacity,transform] ${
                isVisible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-8 scale-[0.98]"
            }`}
        >
            {children}
        </div>
    );
}
