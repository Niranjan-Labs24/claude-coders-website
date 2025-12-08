'use client';

import './OfferBar.css';

export default function OfferBar() {
  return (
    <div className="offer-bar">
      <div className="offer-bar-content">
        <div className="offer-bar-scroll">
          <span className="offer-bar-text">
            🎄 Christmas Sale Live! Flat 20% OFF – Limited Time Offer! 🎁
          </span>
          <span className="offer-bar-text">
            🎄 Christmas Sale Live! Flat 20% OFF – Limited Time Offer! 🎁
          </span>
          <span className="offer-bar-text">
            🎄 Christmas Sale Live! Flat 20% OFF – Limited Time Offer! 🎁
          </span>
        </div>
      </div>
      <a
        href="https://cal.com/sasha-n8ndevelopers/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="offer-bar-cta"
      >
        Claim It Now
      </a>
    </div>
  );
}
