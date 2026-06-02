import React from "react";

export const Icons = {
  Logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Logo Dark Navy Background Square (rx=4 for rounded corners) */}
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#07152B" />
      {/* Head Profile facing left (Accent Blue #2563EB) */}
      <path d="M14.5 17.5c0-1-.3-1.9-.8-2.6-.5-.8-1-1.2-1.5-1.7-.5-.5-.7-.9-.5-1.5.1-.4.3-.8.6-1.1.3-.4.7-.7 1.1-.9.4-.2.8-.3 1.3-.3.5 0 1 .2 1.4.5s.6.8.6 1.3v5.1H14.5zm-5.8-9c-.7 0-1.3.5-1.5 1.1-.2.8-.1 1.6-.5 2.2-.3.5-1 .7-1.5 1.1-.5.5-.3 1.3.3 1.7l.5.3c.3.2.4.6.2.9-.2.3-.5.5-.8.6l-.3.1c-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4l.5-.2c.3-.1.7.1.8.4.2.4.1.9-.3 1.2-.2.2-.3.6-.2 1 .2.3.5.5.9.5h2.5c.5 0 1-.3 1.1-.8l.2-.7a3.5 3.5 0 00-3.3-3.9" fill="#2563EB" />
      {/* Brain Cutout inside head (Primary Navy #07152B) */}
      <path d="M12.2 11c-.5 0-1 .4-1 1 0 .6.2 1.1.6 1.5.1.1.2.3.2.5s.2.5.5.5h1.5c.3 0 .5-.3.5-.5s.1-.4.2-.5c.4-.4.6-.9.6-1.5 0-.6-.5-1-1.1-1z" fill="#07152B" />
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
