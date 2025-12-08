'use client';

import './OfferBar.css';

export default function OfferBar() {
  return (
    <div className="offer-bar">
      <div className="offer-bar-content">
        <div className="offer-bar-scroll">
          <span className="offer-bar-text">
            Year-end drop: 20% off on all services till Dec 31st 🎁
          </span>
          <span className="offer-bar-text">
            Year-end drop: 20% off on all services till Dec 31st 🎁
          </span>
          <span className="offer-bar-text">
            Year-end drop: 20% off on all services till Dec 31st 🎁
          </span>
        </div>
      </div>
      <a
        href="https://cal.com/sasha-n8ndevelopers/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="offer-bar-cta"
      >
        Grab now
      </a>
    </div>
  );
}
