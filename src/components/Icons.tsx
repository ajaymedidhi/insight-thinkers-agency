import React from "react";

export const Icons = {
  Logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Dark Navy Background */}
      <rect width="400" height="400" fill="#020B1A" />
      
      {/* Lightbulb / Head Silhouette */}
      <path 
        d="M 160,200 
           C 160,180 150,150 150,130 
           C 150,90 175,60 215,60 
           C 255,60 280,90 280,130 
           C 280,160 260,180 255,200
           L 255,215
           L 245,215
           L 245,225
           L 255,225
           L 255,235
           L 220,235
           L 220,215
           L 180,215
           L 180,235
           L 165,235
           Z" 
        fill="#FFFFFF" 
      />

      {/* Lightbulb Right Outline & Brain area (Blue) */}
      <path 
        d="M 215,60 
           C 255,60 280,90 280,130 
           C 280,160 260,180 255,200
           L 255,235
           L 220,235
           L 220,215
           L 215,215
           Z" 
        fill="transparent"
        stroke="#1877F2"
        strokeWidth="6"
      />

      {/* Brain Icon Inside (Blue) */}
      <path 
        d="M 185,120 
           C 175,115 175,100 185,95 
           C 195,85 210,85 215,95 
           C 220,85 235,85 245,95 
           C 255,100 255,115 245,120 
           C 255,130 255,145 245,150 
           C 235,155 220,155 215,145 
           C 210,155 195,155 185,150 
           C 175,145 175,130 185,120 
           Z" 
        fill="transparent" 
        stroke="#1877F2"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Brain Lines */}
      <line x1="215" y1="95" x2="215" y2="145" stroke="#1877F2" strokeWidth="4" />
      <path d="M 195,120 Q 205,120 215,115" stroke="#1877F2" strokeWidth="3" fill="none" />
      <path d="M 235,120 Q 225,120 215,115" stroke="#1877F2" strokeWidth="3" fill="none" />

      {/* Lightbulb Base Details */}
      <rect x="225" y="240" width="30" height="5" rx="2" fill="#1877F2" />
      <rect x="228" y="248" width="24" height="5" rx="2" fill="#1877F2" />
      
      {/* Text: INSIGHT THINKERS */}
      <text 
        x="200" 
        y="290" 
        fill="#F4F6FB" 
        fontFamily="Georgia, serif" 
        fontSize="34" 
        textAnchor="middle" 
        fontWeight="bold"
        letterSpacing="0.1em"
      >
        INSIGHT
      </text>
      <text 
        x="200" 
        y="330" 
        fill="#F4F6FB" 
        fontFamily="Georgia, serif" 
        fontSize="34" 
        textAnchor="middle" 
        fontWeight="bold"
        letterSpacing="0.1em"
      >
        THINKERS
      </text>

      {/* Text: AGENCY with lines */}
      <line x1="100" y1="350" x2="150" y2="350" stroke="#1877F2" strokeWidth="2" />
      <text 
        x="200" 
        y="355" 
        fill="#1877F2" 
        fontFamily="Inter, system-ui, sans-serif" 
        fontSize="16" 
        textAnchor="middle" 
        fontWeight="600"
        letterSpacing="0.3em"
      >
        AGENCY
      </text>
      <line x1="250" y1="350" x2="300" y2="350" stroke="#1877F2" strokeWidth="2" />

      {/* Text: TURNING INSIGHT INTO IMPACT */}
      <text 
        x="200" 
        y="385" 
        fill="#FFFFFF" 
        fontFamily="Inter, system-ui, sans-serif" 
        fontSize="14" 
        textAnchor="middle" 
        fontWeight="500"
        letterSpacing="0.1em"
      >
        TURNING <tspan fill="#1877F2">INSIGHT</tspan> INTO <tspan fill="#1877F2">IMPACT</tspan>
      </text>
      
      {/* Arrow Arc */}
      <path d="M 120,395 Q 200,385 280,395" fill="none" stroke="#1877F2" strokeWidth="1.5" />
      <polygon points="280,395 275,392 278,390" fill="#1877F2" />
    </svg>
  ),
  Arr: (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  Chk: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  Finance: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M7 15h.01M11 15h2" />
    </svg>
  ),
  Legal: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <path d="M12 1v22M4.5 6.5l15 11M19.5 6.5l-15 11" />
    </svg>
  ),
  Medical: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  AI: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 9h6M9 12h4M9 15h2" />
    </svg>
  ),
  Mail: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 8l10 6 10-6" />
    </svg>
  ),
  Phone: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.6A2 2 0 014 2.1h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" />
    </svg>
  ),
  Pin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Shield: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Globe: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  ),
};
