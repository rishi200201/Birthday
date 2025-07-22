import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [lightOn, setLightOn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const runSequence = async () => {
      setLightOn(false); // initial dim/off state
      await delay(1000);

      setLightOn(true); // show stickman with cake
      await delay(2500);

      setLightOn(false); // hide stickman
      await delay(500);

      setFadeOut(true);
      await delay(600);

      onComplete();
    };
    runSequence();
  }, [onComplete]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // Handler to toggle light manually
  const toggleLight = () => setLightOn((prev) => !prev);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      } ${lightOn ? "bg-yellow-100" : "bg-black"}`}
    >
      {/* Stickman + cake (only if lightOn) */}
      {lightOn && (
        <div className="flex flex-col items-center text-black relative">
          <svg viewBox="0 0 100 100" className="w-32 h-32">
            {/* Head */}
            <circle
              cx="50"
              cy="20"
              r="6"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
            {/* Body */}
            <line
              x1="50"
              y1="26"
              x2="50"
              y2="60"
              stroke="black"
              strokeWidth="2"
            />
            {/* Left arm (holding cake, extended forward) */}
            <line
              x1="50"
              y1="40"
              x2="70"
              y2="35"
              stroke="black"
              strokeWidth="2"
            />
            {/* Right arm down */}
            <line
              x1="50"
              y1="35"
              x2="30"
              y2="40"
              stroke="black"
              strokeWidth="2"
            />
            {/* Legs */}
            <line
              x1="50"
              y1="60"
              x2="40"
              y2="80"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="50"
              y1="60"
              x2="60"
              y2="80"
              stroke="black"
              strokeWidth="2"
            />

            {/* Cake in left hand: a simple rectangle + layers + cherry */}
            <rect
              x="67"
              y="28"
              width="10"
              height="8"
              fill="#F4A261"
              stroke="black"
              strokeWidth="1"
              rx="2"
            />
            <rect
              x="67"
              y="33"
              width="10"
              height="3"
              fill="#E76F51"
              stroke="black"
              strokeWidth="1"
              rx="1"
            />
            <circle
              cx="72"
              cy="27"
              r="2"
              fill="#E63946"
              stroke="black"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      )}

      {/* Switch button */}
      <label className="relative inline-flex items-center cursor-pointer mt-6">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={lightOn}
          onChange={toggleLight}
        />
        <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:bg-yellow-400 transition-colors"></div>
        <div
          className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md 
                     peer-checked:translate-x-6 transition-transform"
        ></div>
      </label>
    </div>
  );
};
