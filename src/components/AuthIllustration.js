import React from 'react';

function AuthIllustration() {
  return (
    <div className="auth-illustration">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circles */}
        <circle cx="200" cy="200" r="180" fill="var(--primary)" fillOpacity="0.1" />
        <circle cx="200" cy="200" r="140" fill="var(--primary)" fillOpacity="0.15" />
        <circle cx="200" cy="200" r="100" fill="var(--primary)" fillOpacity="0.2" />
        
        {/* Book Stack */}
        <g transform="translate(130, 140)">
          {/* Book 1 */}
          <rect
            x="0"
            y="0"
            width="140"
            height="30"
            rx="4"
            fill="var(--primary)"
            fillOpacity="0.9"
          />
          {/* Book 2 */}
          <rect
            x="10"
            y="35"
            width="120"
            height="30"
            rx="4"
            fill="var(--primary)"
            fillOpacity="0.7"
          />
          {/* Book 3 */}
          <rect
            x="5"
            y="70"
            width="130"
            height="30"
            rx="4"
            fill="var(--primary)"
            fillOpacity="0.8"
          />
        </g>

        {/* Stars */}
        <g transform="translate(200, 200)">
          <path
            d="M0 -40L10 -12L40 -12L15 5L25 35L0 15L-25 35L-15 5L-40 -12L-10 -12Z"
            fill="var(--primary)"
            fillOpacity="0.6"
          />
        </g>
        <g transform="translate(280, 160)">
          <path
            d="M0 -20L5 -6L20 -6L8 2L12 18L0 8L-12 18L-8 2L-20 -6L-5 -6Z"
            fill="var(--primary)"
            fillOpacity="0.4"
          />
        </g>
        <g transform="translate(120, 180)">
          <path
            d="M0 -15L4 -4L15 -4L6 2L9 13L0 6L-9 13L-6 2L-15 -4L-4 -4Z"
            fill="var(--primary)"
            fillOpacity="0.5"
          />
        </g>

        {/* Reading Person Silhouette */}
        <g transform="translate(160, 220)">
          {/* Head */}
          <circle cx="20" cy="20" r="15" fill="var(--primary)" fillOpacity="0.8" />
          {/* Body */}
          <path
            d="M10 35C10 35 0 50 0 60C0 70 40 70 40 60C40 50 30 35 30 35"
            fill="var(--primary)"
            fillOpacity="0.8"
          />
          {/* Book in hands */}
          <rect
            x="5"
            y="45"
            width="30"
            height="15"
            rx="2"
            fill="var(--primary)"
            fillOpacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
}

export default AuthIllustration; 