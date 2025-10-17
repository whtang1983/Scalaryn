'use client';

import { useEffect } from 'react';

export default function CalendlyBadge() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({ 
          url: 'https://calendly.com/benjamin-tang-scalaryn/30min', 
          text: 'Schedule time with me', 
          color: '#6366f1', 
          textColor: '#ffffff', 
          branding: false 
        });
      }
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}