import React, { useEffect, useMemo, useState } from "react";
import "./Basis.css";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";

function Basis() {
  const navigate = useNavigate();
  const DURATION = 5000; // 5 Sekunden
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    let rafId;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / DURATION, 1);
      setProgress(p);

      if (p < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        navigate("/home", { replace: true });
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [navigate]);

  const secondsLeft = Math.max(
    0,
    Math.ceil((DURATION * (1 - progress)) / 1000),
  );

  // Ring-Values
  const { size, stroke, r, c } = useMemo(() => {
    const size = 120;
    const stroke = 8;
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    return { size, stroke, r, c };
  }, []);

  const dashOffset = c * (1 - progress);

  return (
    <div className="videocontainer">
      <video
        className="bgvideo"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/backgroundvideo.mp4" type="video/mp4" />
      </video>

      <div className="text">
        <Nav.Link
          as={NavLink}
          to="/home"
          className="welcomeLink"
          aria-label="Go to Home"
        >
          <div className="headline">
            <span className="kicker">Samir Schabel - Portfolio</span>

            <h1 className="title shimmer">WELCOME</h1>

            <div className="progressRow">
              <div className="ringWrap" aria-hidden="true">
                <svg
                  className="ring"
                  width={size}
                  height={size}
                  viewBox={`0 0 ${size} ${size}`}
                >
                  <circle
                    className="ringBg"
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    strokeWidth={stroke}
                  />
                  <circle
                    className="ringFg"
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    strokeWidth={stroke}
                    strokeDasharray={c}
                    strokeDashoffset={dashOffset}
                  />
                </svg>
                <div className="ringText">{secondsLeft}s</div>
              </div>

              <span className="sub" aria-live="polite">
                Weiterleitung in {secondsLeft} Sekunden…
              </span>
            </div>
          </div>
        </Nav.Link>
      </div>
    </div>
  );
}

export default Basis;
