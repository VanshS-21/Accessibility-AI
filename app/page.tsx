"use client"

import HeroSection from "../hero-section"
import HowItWorksSection from "../how-it-works-section"
import FeaturesSection from "../features-section"
import TestimonialSection from "../testimonial-section"
import CTASection from "../cta-section"
import Footer from "../footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 relative">
      {/* Subtle Mesh Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Very Subtle Base Grid */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.08) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px, 40px 40px, 80px 80px, 80px 80px",
          }}
        />

        {/* Dynamic Spotlight Effect */}
        <div className="absolute inset-0">
          {/* Main Spotlight */}
          <div
            className="absolute w-96 h-96 pointer-events-none"
            style={{
              background: `radial-gradient(circle, 
                rgba(147, 51, 234, 0.4) 0%, 
                rgba(147, 51, 234, 0.3) 20%, 
                rgba(147, 51, 234, 0.15) 40%, 
                rgba(147, 51, 234, 0.05) 60%, 
                transparent 80%
              )`,
              filter: "blur(2px)",
              animation: "spotlightMove 20s ease-in-out infinite",
              transformOrigin: "center",
            }}
          />

          {/* Secondary Spotlight */}
          <div
            className="absolute w-64 h-64 pointer-events-none"
            style={{
              background: `radial-gradient(circle, 
                rgba(59, 130, 246, 0.3) 0%, 
                rgba(59, 130, 246, 0.2) 25%, 
                rgba(59, 130, 246, 0.1) 50%, 
                rgba(59, 130, 246, 0.03) 70%, 
                transparent 85%
              )`,
              filter: "blur(1px)",
              animation: "spotlightMove2 25s ease-in-out infinite",
              transformOrigin: "center",
            }}
          />

          {/* Focused Beam Effect */}
          <div
            className="absolute w-32 h-32 pointer-events-none"
            style={{
              background: `radial-gradient(circle, 
                rgba(255, 255, 255, 0.1) 0%, 
                rgba(147, 51, 234, 0.2) 30%, 
                rgba(147, 51, 234, 0.1) 60%, 
                transparent 80%
              )`,
              filter: "blur(0.5px)",
              animation: "spotlightFocus 18s ease-in-out infinite",
              transformOrigin: "center",
            }}
          />
        </div>

        {/* Enhanced Mesh Lines with Spotlight Interaction */}
        <div className="absolute inset-0">
          {/* Diagonal Mesh Lines */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`diag1-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
              style={{
                top: `${i * 16.67}%`,
                transform: "rotate(15deg)",
                transformOrigin: "left center",
                animation: `flowDiagonal1 ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1.2}s`,
              }}
            />
          ))}

          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`diag2-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent"
              style={{
                top: `${i * 16.67}%`,
                transform: "rotate(-15deg)",
                transformOrigin: "right center",
                animation: `flowDiagonal2 ${10 + i * 1.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}

          {/* Curved Mesh Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <defs>
              <linearGradient id="meshGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
              </linearGradient>
              <linearGradient id="meshGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
              </linearGradient>
            </defs>

            {/* Flowing Curved Lines */}
            <path
              d="M0,100 Q400,50 800,100 T1600,100"
              fill="none"
              stroke="url(#meshGrad1)"
              strokeWidth="1"
              style={{ animation: "flowCurve1 12s ease-in-out infinite" }}
            />
            <path
              d="M0,200 Q400,250 800,200 T1600,200"
              fill="none"
              stroke="url(#meshGrad2)"
              strokeWidth="1"
              style={{ animation: "flowCurve2 15s ease-in-out infinite" }}
            />
            <path
              d="M0,300 Q400,250 800,300 T1600,300"
              fill="none"
              stroke="url(#meshGrad1)"
              strokeWidth="1"
              style={{ animation: "flowCurve3 18s ease-in-out infinite" }}
            />
            <path
              d="M0,400 Q400,450 800,400 T1600,400"
              fill="none"
              stroke="url(#meshGrad2)"
              strokeWidth="1"
              style={{ animation: "flowCurve1 20s ease-in-out infinite reverse" }}
            />
          </svg>

          {/* Subtle Moving Horizontal Lines */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"
              style={{
                top: `${(i + 1) * 20}%`,
                animation: `slideRight ${15 + i * 3}s linear infinite`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}

          {/* Subtle Moving Vertical Lines */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-400/8 to-transparent"
              style={{
                left: `${(i + 1) * 20}%`,
                animation: `slideDown ${18 + i * 2}s linear infinite`,
                animationDelay: `${i * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced Intersection Points with Spotlight Response */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
              style={{
                left: `${(i % 5) * 20 + 10}%`,
                top: `${Math.floor(i / 5) * 25 + 12.5}%`,
                animation: `subtlePulse ${4 + (i % 3) * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                filter: "drop-shadow(0 0 2px rgba(147, 51, 234, 0.5))",
              }}
            />
          ))}
        </div>

        {/* Floating Gradient Orbs - Enhanced with Spotlight */}
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 bg-gradient-radial from-purple-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl"
            style={{
              top: "15%",
              left: "10%",
              animation: "floatSlow1 25s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-80 h-80 bg-gradient-radial from-blue-500/6 via-blue-500/3 to-transparent rounded-full blur-2xl"
            style={{
              top: "60%",
              right: "15%",
              animation: "floatSlow2 30s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-72 h-72 bg-gradient-radial from-purple-400/5 via-purple-400/2 to-transparent rounded-full blur-3xl"
            style={{
              top: "40%",
              left: "45%",
              animation: "floatSlow3 20s ease-in-out infinite",
            }}
          />
        </div>

        {/* Spotlight Reflection Effects */}
        <div className="absolute inset-0">
          <div
            className="absolute w-24 h-24 bg-white/5 rounded-full blur-xl"
            style={{
              animation: "spotlightReflection1 20s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-16 h-16 bg-purple-300/10 rounded-full blur-lg"
            style={{
              animation: "spotlightReflection2 25s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialSection />
        <CTASection />
        <Footer />
      </div>

      {/* Enhanced Animations with Spotlight Effects */}
      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        
        @keyframes flowDiagonal1 {
          0%, 100% { transform: rotate(15deg) translateX(-10px); opacity: 0.3; }
          50% { transform: rotate(15deg) translateX(10px); opacity: 0.8; }
        }
        
        @keyframes flowDiagonal2 {
          0%, 100% { transform: rotate(-15deg) translateX(10px); opacity: 0.2; }
          50% { transform: rotate(-15deg) translateX(-10px); opacity: 0.6; }
        }
        
        @keyframes flowCurve1 {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(20px) scaleY(1.1); }
        }
        
        @keyframes flowCurve2 {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-15px) scaleY(0.9); }
        }
        
        @keyframes flowCurve3 {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(10px) scaleY(1.05); }
        }
        
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        
        @keyframes floatSlow1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15px, -10px) scale(1.05); }
          66% { transform: translate(-10px, 15px) scale(0.95); }
        }
        
        @keyframes floatSlow2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-12px, 8px) scale(1.03); }
          66% { transform: translate(10px, -12px) scale(0.97); }
        }
        
        @keyframes floatSlow3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(8px, 12px) scale(1.04); }
          66% { transform: translate(-15px, -8px) scale(0.96); }
        }

        /* Spotlight Movement Animations */
        @keyframes spotlightMove {
          0% { 
            left: 10%; 
            top: 20%; 
            transform: scale(0.5); 
            opacity: 0.8; 
          }
          25% { 
            left: 70%; 
            top: 15%; 
            transform: scale(2.5); 
            opacity: 1; 
          }
          50% { 
            left: 80%; 
            top: 60%; 
            transform: scale(0.3); 
            opacity: 0.9; 
          }
          75% { 
            left: 30%; 
            top: 70%; 
            transform: scale(2.0); 
            opacity: 0.95; 
          }
          100% { 
            left: 10%; 
            top: 20%; 
            transform: scale(0.5); 
            opacity: 0.8; 
          }
        }

        @keyframes spotlightMove2 {
          0% { 
            left: 60%; 
            top: 40%; 
            transform: scale(0.4); 
            opacity: 0.6; 
          }
          30% { 
            left: 20%; 
            top: 30%; 
            transform: scale(2.2); 
            opacity: 0.8; 
          }
          60% { 
            left: 15%; 
            top: 75%; 
            transform: scale(0.6); 
            opacity: 0.7; 
          }
          90% { 
            left: 75%; 
            top: 80%; 
            transform: scale(1.8); 
            opacity: 0.75; 
          }
          100% { 
            left: 60%; 
            top: 40%; 
            transform: scale(0.4); 
            opacity: 0.6; 
          }
        }

        @keyframes spotlightFocus {
          0% { 
            left: 45%; 
            top: 35%; 
            transform: scale(0.3) rotate(0deg); 
            opacity: 0.9; 
          }
          33% { 
            left: 55%; 
            top: 25%; 
            transform: scale(2.8) rotate(120deg); 
            opacity: 1; 
          }
          66% { 
            left: 35%; 
            top: 55%; 
            transform: scale(0.2) rotate(240deg); 
            opacity: 0.8; 
          }
          100% { 
            left: 45%; 
            top: 35%; 
            transform: scale(0.3) rotate(360deg); 
            opacity: 0.9; 
          }
        }

        @keyframes spotlightReflection1 {
          0% { 
            left: 15%; 
            top: 25%; 
            opacity: 0.3; 
          }
          25% { 
            left: 75%; 
            top: 20%; 
            opacity: 0.6; 
          }
          50% { 
            left: 85%; 
            top: 65%; 
            opacity: 0.4; 
          }
          75% { 
            left: 35%; 
            top: 75%; 
            opacity: 0.5; 
          }
          100% { 
            left: 15%; 
            top: 25%; 
            opacity: 0.3; 
          }
        }

        @keyframes spotlightReflection2 {
          0% { 
            left: 65%; 
            top: 45%; 
            opacity: 0.4; 
          }
          30% { 
            left: 25%; 
            top: 35%; 
            opacity: 0.7; 
          }
          60% { 
            left: 20%; 
            top: 80%; 
            opacity: 0.5; 
          }
          90% { 
            left: 80%; 
            top: 85%; 
            opacity: 0.6; 
          }
          100% { 
            left: 65%; 
            top: 45%; 
            opacity: 0.4; 
          }
        }
      `}</style>
    </div>
  )
}
