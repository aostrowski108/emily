import React from 'react';

export default function ProduceDoodles() {
  return (
    <div className="produce-doodles" aria-hidden="true">
      <div className="doodle-wrap doodle-carrot">
        <svg className="doodle" viewBox="0 0 120 120" fill="none">
          <path d="M62 22C55 30 55 42 59 52C64 65 63 79 58 93C55 101 60 107 67 103C77 97 88 85 86 70C84 53 70 35 62 22Z" strokeWidth="3" />
          <path d="M57 20C47 9 36 8 26 13" strokeWidth="3" />
          <path d="M63 18C58 8 64 2 75 3" strokeWidth="3" />
        </svg>
      </div>

      <div className="doodle-wrap doodle-tomato">
        <svg className="doodle" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="66" r="31" strokeWidth="3" />
          <path d="M60 30L64 39L75 36L71 46L80 53L69 54L68 66L60 58L52 66L51 54L40 53L49 46L45 36L56 39L60 30Z" strokeWidth="3" />
        </svg>
      </div>

      <div className="doodle-wrap doodle-leaf">
        <svg className="doodle" viewBox="0 0 120 120" fill="none">
          <path d="M26 72C25 39 51 20 92 24C86 70 63 94 34 94" strokeWidth="3" />
          <path d="M36 84C48 69 62 57 79 46" strokeWidth="3" />
        </svg>
      </div>

      <div className="doodle-wrap doodle-garlic">
        <svg className="doodle" viewBox="0 0 120 120" fill="none">
          <path d="M57 23C50 31 53 42 57 50C43 52 33 63 34 77C35 93 47 102 60 102C73 102 85 93 86 77C87 63 77 52 63 50C67 41 70 30 63 23" strokeWidth="3" />
          <path d="M60 51V102" strokeWidth="3" />
        </svg>
      </div>

      <div className="doodle-wrap doodle-pepper">
        <svg className="doodle" viewBox="0 0 120 120" fill="none">
          <path d="M45 33C50 26 59 24 67 27C74 30 77 37 76 44C75 53 77 60 84 66C90 71 92 79 88 86C84 95 74 99 65 97C56 95 49 99 42 102C34 105 24 102 20 93C16 84 19 74 27 69C34 64 39 56 40 46C41 40 41 37 45 33Z" strokeWidth="3" />
          <path d="M60 25C61 17 69 13 77 15" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}
