import React from "react";

export const Icons = {
  Logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Dark Navy Square Background */}
      <rect width="200" height="200" fill="#0D2146" />
      
      {/* Head Profile facing left (Accent Blue #2563EB) */}
      <path 
        d="M 132,115 
           C 132,108 128,96 128,88 
           C 128,74 138,64 138,50 
           C 138,29 122,15 102,15 
           C 81,15 72,29 72,50 
           C 72,55 73,58 75,62 
           L 67,65 
           L 73,69 
           L 69,72 
           L 74,75 
           L 71,78 
           C 75,84 81,88 88,88 
           L 95,88 
           L 95,115 
           Z" 
        fill="#2563EB" 
      />
      
      {/* Brain Cutout inside head (Dark Navy #0D2146) */}
      <path 
        d="M 94,40 
           C 90,38 90,32 94,29 
           C 98,25 104,25 106,29 
           C 109,25 115,25 117,29 
           C 121,32 121,38 117,41 
           C 121,45 121,50 116,53 
           C 112,55 106,55 104,51 
           C 102,55 96,55 93,51 
           C 90,49 90,44 94,40 
           Z" 
        fill="#0D2146" 
      />
      
      {/* Framed Text Box */}
      {/* Outer Border */}
      <rect x="12" y="128" width="176" height="52" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
      
      {/* Divider line */}
      <line x1="12" y1="162" x2="188" y2="162" stroke="#FFFFFF" strokeWidth="2.5" />
      
      {/* Bottom Compartment Background (White) */}
      <rect x="13.25" y="163.25" width="173.5" height="15.5" fill="#FFFFFF" />
      
      {/* Top Text: "Insight Thinkers Agency" */}
      <text 
        x="100" 
        y="151.5" 
        fill="#FFFFFF" 
        fontFamily="Georgia, serif" 
        fontSize="14.5" 
        textAnchor="middle" 
        fontWeight="bold"
        letterSpacing="0.2"
      >
        Insight Thinkers Agency
      </text>
      
      {/* Bottom Text: "Marketing with a Thinker's Touch" */}
      <text 
        x="100" 
        y="174" 
        fill="#0D2146" 
        fontFamily="Inter, system-ui, sans-serif" 
        fontSize="7.5" 
        textAnchor="middle" 
        fontWeight="800"
        letterSpacing="0.4"
      >
        Marketing with a Thinker's Touch
      </text>
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
