import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const birthdayWishes = [
  "Happy Birthday!",
  "Best wishes!",
  "Stay awesome!",
  "You're amazing!",
  "Party time!",
  "So proud of you!",
  "Many happy returns!",
  "Enjoy your day!",
  "You're the best!",
  "Wish you happiness!",
  "Cheers to you!",
  "Make a wish!",
  "Blow the candles!",
  "Have fun!",
  "You rock!",
  "Stay blessed!",
  "Lots of love!",
  "alagi",
  "model madam",
  "bot",
  "maths la puli ",
  "cute ga neega",
  "rowdism konjam kamiya panuga",
];

export const Home = () => {
  const [stage, setStage] = useState("initial");
  const [message, setMessage] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [showGun, setShowGun] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [cakeEaten, setCakeEaten] = useState(false);
  const [showBomb, setShowBomb] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [friendsCount, setFriendsCount] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showDancers, setShowDancers] = useState(false);
  const [showSpotlight, setShowSpotlight] = useState(false);

  const messages = {
    initial: "Click to start Pragathi's special day...",
    standoff: "Hands up! beautyyy!",
    heroArrives: "iruga bhai 💥",
    cakeReveal: "Surprise! For the most amazing Pragathi! 🎂",
    eatCake: "Click the cake to take a bite! 🍰",
    celebration: "Happy Birthday, Pragathi! Let's celebrate! 🎉",
    bombThreat: "Uh oh... what's this? 💣",
    final: "Wishing you the happiest of birthday, Pragathi! ✨",
  };

  useEffect(() => {
    setMessage(messages[stage]);

    if (stage === "standoff") {
      const timer = setTimeout(() => {
        setShowGun(true);
      }, 500);
      return () => clearTimeout(timer);
    }

    if (stage === "heroArrives") {
      const timer = setTimeout(() => {
        setShowHero(true);
      }, 500);
      const nextStageTimer = setTimeout(() => {
        setStage("cakeReveal");
      }, 2500);
      return () => {
        clearTimeout(timer);
        clearTimeout(nextStageTimer);
      };
    }

    if (stage === "cakeReveal") {
      const cakeTimer = setTimeout(() => {
        setShowCake(true);
      }, 1000);
      const nextStageTimer = setTimeout(() => {
        setStage("eatCake");
      }, 3000);
      return () => {
        clearTimeout(cakeTimer);
        clearTimeout(nextStageTimer);
      };
    }

    if (stage === "celebration") {
      setShowHero(false);
      setShowGun(false);

      const friendInterval = setInterval(() => {
        setFriendsCount((prev) => (prev < 30 ? prev + 1 : prev));
      }, 150);
      const prankTimer = setTimeout(() => {
        setStage("bombThreat");
      }, 5000);
      return () => {
        clearInterval(friendInterval);
        clearTimeout(prankTimer);
      };
    }

    if (stage === "bombThreat") {
      const bombTimer = setTimeout(() => {
        setShowBomb(true);
      }, 1000);
      const explosionTimer = setTimeout(() => {
        setShowBomb(false);
        setShowExplosion(true);
      }, 3000);
      const finalTimer = setTimeout(() => {
        setStage("final");
        setShowFinal(true);
        setShowHearts(true);
        setShowFireworks(true);
        setShowDancers(true);
        setShowSpotlight(true);
        setShowExplosion(false);
      }, 4000);
      return () => {
        clearTimeout(bombTimer);
        clearTimeout(explosionTimer);
        clearTimeout(finalTimer);
      };
    }

    if (stage === "initial") {
      setShowGun(false);
      setShowHero(false);
      setShowCake(false);
      setCakeEaten(false);
      setShowBomb(false);
      setShowExplosion(false);
      setShowFireworks(false);
      setFriendsCount(0);
      setClickCount(0);
      setShowFinal(false);
      setShowHearts(false);
      setShowDancers(false);
      setShowSpotlight(false);
    }
  }, [stage]);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);

    if (stage === "initial") {
      setStage("standoff");
    } else if (stage === "standoff" && clickCount >= 0) {
      setStage("heroArrives");
    }
  };

  const handleCakeClick = () => {
    if (stage === "eatCake" && !cakeEaten) {
      setCakeEaten(true);
      setMessage("Yummy! Now let the real party begin! 🎉");
      setTimeout(() => {
        setStage("celebration");
      }, 1500);
    }
  };

  const renderFriend = (index) => {
    const colors = ["#ff69b4", "#66ccff", "#99ff99", "#ffcc66", "#cc99ff", "#ff99e6", "#99ffcc"];
    const color = colors[index % colors.length];
    const danceMoves = [0, 10, -10, 0];
    const gifts = ["🌹", "👑", "🌸", "💐", "💖", "🎀", "🎁"];
    const gift = gifts[index % gifts.length];

    return (
      <motion.div
        key={index}
        className="absolute"
        style={{
          left: `${5 + (index * 6) % 90}%`,
          top: `${15 + Math.random() * 70}%`,
        }}
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          rotate: danceMoves,
          y: [0, -20, 0]
        }}
        transition={{
          duration: 2,
          delay: index * 0.1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <svg width="90" height="90" viewBox="0 0 100 100">
          <circle cx="50" cy="30" r="15" fill="#ffe0b2" stroke={color} strokeWidth="2" />
          <circle cx="40" cy="25" r="2" fill="#000" />
          <circle cx="60" cy="25" r="2" fill="#000" />
          <path d="M40,35 Q50,45 60,35" fill="none" stroke="#000" strokeWidth="2" />
          <line x1="50" y1="45" x2="50" y2="65" stroke={color} strokeWidth="2" />
          <line x1="50" y1="55" x2="35" y2="60" stroke={color} strokeWidth="2" />
          <line x1="50" y1="55" x2="65" y2="60" stroke={color} strokeWidth="2" />
          <line x1="50" y1="65" x2="40" y2="80" stroke={color} strokeWidth="2" />
          <line x1="50" y1="65" x2="60" y2="80" stroke={color} strokeWidth="2" />
          <text x={index % 2 === 0 ? "25" : "65"} y="55" fontSize="16">{gift}</text>
        </svg>
        <motion.div
  className="absolute -top-10 left-0 right-0 bg-white text-black p-2 rounded-lg text-xs font-bold shadow-lg"
  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{
    duration: 3,
    type: "spring",
    stiffness: 100,
    damping: 10,
    delay: 0.5, // slight delay before it pops in
  }}
>
  {birthdayWishes[index % birthdayWishes.length]}
</motion.div>

      </motion.div>
    );
  };

  const renderRoyalFriend = (index) => {
    const royalGifts = ["👑", "🌹", "💖", "🌸", "💐", "🏆"];
    const gift = royalGifts[index % royalGifts.length];

    return (
      <motion.div
        key={`royal-${index}`}
        className="absolute"
        style={{
          left: `${10 + (index * 15) % 80}%`,
          top: `${30 + Math.random() * 40}%`,
        }}
        animate={{
          rotate: [0, 5, -5, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 2 + Math.random(),
          repeat: Infinity,
          repeatType: "mirror",
          delay: index * 0.3
        }}
      >
        <svg width="120" height="120" viewBox="0 0 100 100">
          <circle cx="50" cy="30" r="18" fill="#ffe0b2" stroke="#ff69b4" strokeWidth="2" />
          <circle cx="40" cy="25" r="3" fill="#000" />
          <circle cx="60" cy="25" r="3" fill="#000" />
          <path d="M40,35 Q50,45 60,35" fill="none" stroke="#000" strokeWidth="2" />
          <line x1="50" y1="45" x2="50" y2="70" stroke="#ff69b4" strokeWidth="3" />
          <line x1="50" y1="55" x2="30" y2="45" stroke="#ff69b4" strokeWidth="3" />
          <line x1="50" y1="55" x2="70" y2="45" stroke="#ff69b4" strokeWidth="3" />
          <line x1="50" y1="70" x2="40" y2="90" stroke="#ff69b4" strokeWidth="3" />
          <line x1="50" y1="70" x2="60" y2="90" stroke="#ff69b4" strokeWidth="3" />
          <text x="30" y="65" fontSize="20">{gift}</text>
          {gift === "👑" && (
            <text x="50" y="15" textAnchor="middle" fontSize="12">👸</text>
          )}
        </svg>
      </motion.div>
    );
  };

  const renderFirework = (index) => {
    const colors = ["#ff0000", "#ffcc00", "#00ff00", "#00ccff", "#ff00ff", "#ffff00"];
    const color = colors[index % colors.length];
    const size = 15 + Math.random() * 25;

    return (
      <motion.div
        key={index}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: `radial-gradient(circle, ${color}, transparent)`,
          borderRadius: "50%"
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.8, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2 + Math.random(),
          delay: Math.random() * 0.5,
          repeat: Infinity,
          repeatDelay: Math.random() * 3
        }}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 overflow-hidden relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-purple-900 opacity-80"></div>

      {/* Spotlight effect */}
      {showSpotlight && (
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black opacity-30 pointer-events-none"></div>
      )}

      {/* Floating balloons with Pragathi's name */}
      {stage !== "initial" &&
        [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl z-10"
            style={{
              left: `${5 + i * 7}%`,
              top: `${5 + Math.random() * 30}%`,
            }}
            animate={{
              y: [0, -40, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {i % 3 === 0 ? "🎈" : i % 3 === 1 ? "P" : "🎉"}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-sm absolute -bottom-7 left-0 right-0 text-center text-white font-bold"
            >
              {i % 3 === 0 ? "Pragathi" : i % 3 === 1 ? "🎂" : "❤️"}
            </motion.span>
          </motion.div>
        ))}

      {/* Explosion animation */}
      <AnimatePresence>
        {showExplosion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-yellow-400 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 3 }}
              transition={{ duration: 0.3 }}
              className="text-9xl"
            >
              💥
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-20 text-black text-2xl font-bold bg-white p-4 rounded-lg"
            >
              SURPRISE CELEBRATION!!!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="z-10 text-center w-full">
        <motion.h1
  className="text-2xl md:text-3xl font-semibold mb-6 text-red-500 drop-shadow-sm"
  animate={{
    scale: stage === "final" ? [1, 1.05, 1] : 1,
    textShadow:
      stage === "final"
        ? "0 0 8px #f87171, 0 0 12px #f87171"
        : "0 0 4px #f87171",
  }}
  transition={{
    duration: stage === "final" ? 1.5 : 0.5,
    repeat: stage === "final" ? Infinity : 0,
  }}
>
  {message || "Hello there ❤️"}
</motion.h1>


        {/* Main characters */}
        <div className="flex justify-center items-center gap-16 mb-8 relative h-64">
          {/* Birthday person */}
          <motion.div
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer relative z-20"
            animate={{
              y: stage === "bombThreat" ? [0, -20, 0] : 0,
              rotate: stage === "bombThreat" ? [0, 10, -10, 0] : 0,
            }}
            transition={{
              duration: 2,
              repeat: stage === "bombThreat" ? Infinity : 0,
            }}
          >
            <svg width="200" height="200" viewBox="0 0 150 150">
  {/* Head with blush */}
  <circle cx="75" cy="40" r="25" fill="#ffe0b2" stroke="#ff69b4" strokeWidth="3" />
  <circle cx="65" cy="42" r="3" fill="#ff9999" /> {/* Blush left */}
  <circle cx="85" cy="42" r="3" fill="#ff9999" /> {/* Blush right */}

  {/* Eyes and smile per stage */}
  {(stage !== "bombThreat" && stage !== "standoff") && (
    <>
      {/* Cute smile */}
      <path d="M65,45 Q75,55 85,45" fill="none" stroke="#000" strokeWidth="2" />
      {/* Sparkly eyes */}
      <circle cx="65" cy="35" r="3.5" fill="#000" />
      <circle cx="85" cy="35" r="3.5" fill="#000" />
      <circle cx="64" cy="34" r="1.2" fill="#fff" />
      <circle cx="84" cy="34" r="1.2" fill="#fff" />
    </>
  )}

  {/* Shocked eyes and X marks for bombThreat */}
  {stage === "bombThreat" && (
    <>
      <path d="M60,40 Q75,30 90,40" fill="none" stroke="#000" strokeWidth="2" />
      <line x1="62" y1="33" x2="68" y2="37" stroke="#000" strokeWidth="2" />
      <line x1="68" y1="33" x2="62" y2="37" stroke="#000" strokeWidth="2" />
      <line x1="82" y1="33" x2="88" y2="37" stroke="#000" strokeWidth="2" />
      <line x1="88" y1="33" x2="82" y2="37" stroke="#000" strokeWidth="2" />
    </>
  )}

  {/* Body and limbs - slightly curvier */}
  <line x1="75" y1="65" x2="75" y2="100" stroke="#ff69b4" strokeWidth="4" />
  <line x1="75" y1="80" x2="50" y2="90" stroke="#ff69b4" strokeWidth="4" />
  <line x1="75" y1="80" x2="100" y2="90" stroke="#ff69b4" strokeWidth="4" />
  <line x1="75" y1="100" x2="60" y2="130" stroke="#ff69b4" strokeWidth="4" />
  <line x1="75" y1="100" x2="90" y2="130" stroke="#ff69b4" strokeWidth="4" />

  {/* Hair Bow or Crown */}
  {stage !== "final" && (
    <polygon points="50,20 75,0 100,20" fill="#ff69b4" stroke="#000" strokeWidth="1" />
  )}
  {stage === "final" && (
    <>
      <polygon points="55,15 75,0 95,15" fill="#ffd700" stroke="#000" strokeWidth="1" />
      <circle cx="75" cy="5" r="5" fill="#ffff00" />
    </>
  )}

  {/* Name label */}
  <rect x="45" y="110" width="60" height="25" rx="8" fill="white" stroke="#000" strokeWidth="1" />
  <text x="75" y="128" textAnchor="middle" fontSize="14" fill="black" fontWeight="bold">
    Doli
  </text>

  {/* Cute surprise icon in final stage */}
  {stage === "final" && (
    <text x="75" y="25" textAnchor="middle" fontSize="20">👑</text>
  )}
</svg>

            <p className="text-white mt-2 text-lg font-bold">
              {stage === "initial" && "Click me!"}
              {stage === "standoff" && "Help me!"}
              {stage === "heroArrives" && "Phew!"}
              {(stage === "cakeReveal" || stage === "eatCake") && "Cake!"}
              {stage === "celebration" && "Party time!"}
              {stage === "bombThreat" && "😱"}
              {stage === "final" && "Queen of the day! 👑"}
            </p>
          </motion.div>

          {/* Villain */}
          {(stage === "standoff" || stage === "heroArrives") && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute right-1/4 z-10"
            >
              <svg width="200" height="200" viewBox="0 0 150 150">
                <circle cx="75" cy="40" r="25" fill="#333" stroke="#666" strokeWidth="3" />
                <circle cx="65" cy="35" r="4" fill="#fff" />
                <circle cx="85" cy="35" r="4" fill="#fff" />
                <path d="M65,50 L85,50" stroke="#fff" strokeWidth="2" />
                <line x1="75" y1="65" x2="75" y2="100" stroke="#666" strokeWidth="4" />
                <line x1="75" y1="80" x2="50" y2="90" stroke="#666" strokeWidth="4" />
                <line x1="75" y1="80" x2="100" y2="90" stroke="#666" strokeWidth="4" />
                <line x1="75" y1="100" x2="60" y2="130" stroke="#666" strokeWidth="4" />
                <line x1="75" y1="100" x2="90" y2="130" stroke="#666" strokeWidth="4" />
                {showGun && (
                  <motion.text
                    x="30"
                    y="80"
                    fontSize="30"
                    fill="red"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    🔫
                  </motion.text>
                )}
              </svg>
              <p className="text-white mt-2 text-lg font-bold">I got this!</p>
            </motion.div>
          )}

          {/* Hero */}
          {showHero &&
            (stage === "heroArrives" || stage === "cakeReveal" || stage === "eatCake") && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="absolute left-1/4 z-10"
              >
                <svg width="200" height="200" viewBox="0 0 150 150">
                  <circle cx="75" cy="40" r="25" fill="#b0e0e6" stroke="#4682b4" strokeWidth="3" />
                  <circle cx="65" cy="35" r="4" fill="#000" />
                  <circle cx="85" cy="35" r="4" fill="#000" />
                  <path d="M65,45 Q75,55 85,45" fill="none" stroke="#000" strokeWidth="2" />
                  <line x1="75" y1="65" x2="75" y2="100" stroke="#4682b4" strokeWidth="4" />
                  <line x1="75" y1="80" x2="50" y2="90" stroke="#4682b4" strokeWidth="4" />
                  <line x1="75" y1="80" x2="100" y2="90" stroke="#4682b4" strokeWidth="4" />
                  <line x1="75" y1="100" x2="60" y2="130" stroke="#4682b4" strokeWidth="4" />
                  <line x1="75" y1="100" x2="90" y2="130" stroke="#4682b4" strokeWidth="4" />
                  <AnimatePresence>
                    {stage === "heroArrives" && (
                      <motion.rect
                        x="30"
                        y="10"
                        width="90"
                        height="30"
                        rx="8"
                        fill="yellow"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                      />
                    )}
                    {stage === "heroArrives" && (
                      <motion.text
                        x="75"
                        y="30"
                        textAnchor="middle"
                        fontSize="12"
                        fill="black"
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        ena thala
                      </motion.text>
                    )}
                  </AnimatePresence>
                </svg>
                <p className="text-white mt-2 text-lg font-bold">Take that! 😎</p>
              </motion.div>
            )}

          {/* Cake */}
          {(stage === "cakeReveal" ||
            stage === "eatCake" ||
            stage === "celebration" ||
            stage === "final") &&
            showCake && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute -bottom-20 z-0 cursor-pointer"
                onClick={handleCakeClick}
              >
                <svg width="350" height="350" viewBox="0 0 300 300">
    {/* Cake Base */}
    <rect x="50" y="150" width="200" height="60" rx="15" fill="url(#cakeBase)" stroke="#d2b48c" strokeWidth="4" />
    <rect x="75" y="100" width="150" height="50" rx="15" fill="url(#cakeMid)" stroke="#d2b48c" strokeWidth="4" />
    <rect x="100" y="50" width="100" height="50" rx="15" fill="url(#cakeTop)" stroke="#d2b48c" strokeWidth="4" />

    {/* Cream Layers */}
    <path d="M50,150 Q75,140 100,150 Q125,140 150,150 Q175,140 200,150 Q225,140 250,150" fill="#ffb6c1" />
    <path d="M75,100 Q100,90 125,100 Q150,90 175,100 Q200,90 225,100" fill="#ffb6c1" />
    <path d="M100,50 Q125,40 150,50 Q175,40 200,50" fill="#ffb6c1" />

    {/* Candles */}
    {!cakeEaten ? (
      <>
        <line x1="120" y1="50" x2="120" y2="30" stroke="#ffd700" strokeWidth="4" />
        <line x1="150" y1="50" x2="150" y2="20" stroke="#ffd700" strokeWidth="4" />
        <line x1="180" y1="50" x2="180" y2="30" stroke="#ffd700" strokeWidth="4" />
        {/* Flames */}
        <motion.circle cx="120" cy="25" r="6" fill="orange" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
        <motion.circle cx="150" cy="15" r="7" fill="orange" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 0.7, repeat: Infinity }} />
        <motion.circle cx="180" cy="25" r="6" fill="orange" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6, repeat: Infinity }} />
      </>
    ) : (
      <>
        {/* Blowing out candle particles */}
        <motion.circle cx="120" cy="30" r="5" fill="#fff" animate={{ opacity: [0, 1, 0], y: [30, 0] }} transition={{ duration: 1, delay: 0.1 }} />
        <motion.circle cx="150" cy="20" r="6" fill="#fff" animate={{ opacity: [0, 1, 0], y: [25, -5] }} transition={{ duration: 1, delay: 0.2 }} />
        <motion.circle cx="180" cy="30" r="5" fill="#fff" animate={{ opacity: [0, 1, 0], y: [30, 0] }} transition={{ duration: 1, delay: 0.3 }} />
      </>
    )}

    {/* Text */}
    <text x="150" y="80" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#fff" stroke="#000" strokeWidth="1">
      Happy Birthday
    </text>
    <text x="150" y="110" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#fff" stroke="#000" strokeWidth="1.2">
      Pragathi!
    </text>

    {/* Confetti (optional: more can be added) */}
    <circle cx="60" cy="60" r="4" fill="#e63946" />
    <circle cx="240" cy="80" r="5" fill="#2a9d8f" />
    <circle cx="90" cy="40" r="3" fill="#f4a261" />
    <circle cx="210" cy="50" r="4" fill="#e9c46a" />

    {/* Gradients */}
    <defs>
      <linearGradient id="cakeBase" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fceabb" />
        <stop offset="100%" stopColor="#f8b500" />
      </linearGradient>
      <linearGradient id="cakeMid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff5d7" />
        <stop offset="100%" stopColor="#f5c469" />
      </linearGradient>
      <linearGradient id="cakeTop" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#f1d3a2" />
      </linearGradient>
    </defs>
  </svg>
                {stage === "eatCake" && !cakeEaten && (
                  <p className="text-white mt-2 text-lg font-bold animate-pulse">Click to take a bite!</p>
                )}
              </motion.div>
            )}

          {/* Bomb */}
          {stage === "bombThreat" && showBomb && (
  <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-40 bg-black bg-opacity-80"
  >
    <motion.div
      animate={{
        rotate: [0, 5, -5, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="280" height="280" viewBox="0 0 220 220">
        <defs>
          <radialGradient id="bomb-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff0000" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="110" cy="110" r="60" fill="url(#bomb-glow)" />
        <circle cx="110" cy="110" r="50" fill="#222" stroke="#ff0000" strokeWidth="4" />
        <circle cx="110" cy="110" r="40" fill="#333" />
        <text x="110" y="125" textAnchor="middle" fontSize="48" fill="#ff4444">
          💣
        </text>

        <motion.text
          x="110"
          y="190"
          textAnchor="middle"
          fontSize="28"
          fill="yellow"
          fontWeight="bold"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          SURPRISE!!!
        </motion.text>
      </svg>
    </motion.div>
  </motion.div>
)}

        </div>
      </div>

      {/* Celebration friends */}
      {stage === "celebration" && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(friendsCount)].map((_, i) => renderFriend(i))}
        </div>
      )}

      {/* Final celebration elements */}
      {showFinal && (
        <>
          {/* Fireworks */}
          {showFireworks && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => renderFirework(i))}
            </div>
          )}
          {/* Friends appearing to celebrate */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(friendsCount)].map((_, i) => renderFriend(i))}
                    </div>

          {/* Royal friends with special gifts */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => renderRoyalFriend(i))}
          </div>

          {/* Regular friends with gifts */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => renderFriend(i))}
          </div>

          {/* Confetti with Pragathi's name */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-3xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  color: ["#ff0000", "#ffcc00", "#00ff00", "#00ccff", "#ff00ff", "#ffff00"][i % 6]
                }}
                initial={{ y: -100, rotate: 0 }}
                animate={{ y: "100vh", rotate: 360 }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  delay: Math.random() * 0.5
                }}
              >
                {i % 6 === 0 ? "Pragathi" :
                  i % 6 === 1 ? "🎊bot" :
                    i % 6 === 2 ? "✨model eh" :
                      i % 6 === 3 ? "🎈23rd!!" :
                        i % 6 === 4 ? "🎁" : "🎉"}
                {i % 6 === 0 && (
                  <span className="text-sm absolute -bottom-7 left-0 right-0 text-center text-white font-bold">
                    Pragathi
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Floating hearts with occasional messages */}
          {showHearts && [...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl sm:text-4xl text-pink-400 pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                y: [0, -200 - Math.random() * 100],
                opacity: [1, 0],
                scale: [1, 1.5 + Math.random()],
                rotate: [`${Math.random() * 360}deg`, `${Math.random() * 360 + 90}deg`]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity
              }}
            >
              {i % 5 === 0 ? "P" : ["❤️", "💖", "💘", "💕", "💓"][i % 5]}
              {i % 5 === 0 && (
                <span className="text-sm absolute -bottom-7 left-0 right-0 text-center text-white font-bold">
                  {i % 10 === 0 ? "Pragathi" : "🎂"}
                </span>
              )}
            </motion.div>
          ))}

          {/* Giant birthday message */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="fixed bottom-1/4 w-full text-center z-50"
          >
            
          </motion.div>

          {/* Floating hearts with occasional messages */}
          {showHearts && [...Array(15)].map((_, i) => (
            <motion.div
  key={i}
  className="absolute text-2xl md:text-3xl font-bold text-pink-400 drop-shadow-lg pointer-events-none"
  style={{
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    mixBlendMode: "screen",
    rotate: `${Math.random() * 360}deg`,
  }}
  animate={{
    y: [0, -120],
    opacity: [1, 0],
    scale: [1, 1.6],
    rotate: [0, 10, -10, 0]
  }}
  transition={{
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {i % 4 === 0 ? "P" : "💗"}
  {i % 4 === 0 && (
    <span className="text-xs md:text-sm absolute -bottom-5 left-0 right-0 text-center text-white font-semibold glow-text">
      {i % 8 === 0 ? "Pragathi" : "🎂"}
    </span>
  )}
</motion.div>

          ))}

          {/* Final birthday message */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.03 }}
  transition={{ delay: 2, duration: 1, type: "spring", stiffness: 100 }}
  className="fixed bottom-10 left-1/2 transform -translate-x-1/2 px-8 py-5 rounded-3xl z-50 text-center shadow-2xl bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 backdrop-blur-lg text-pink-900 font-semibold text-lg md:text-xl tracking-wide animate-pulse border-2 border-pink-500"
>
  <p className="text-shadow-pink text-xl md:text-2xl">
    🎉 <span className="text-pink-800 font-bold">Happy Birthday, Pragathi! 🎂</span>
  </p>
  <p className="mt-1">
    ✨ Hope your day’s as <span className="font-bold text-pink-700">extra</span> as you are 💖
  </p>
  <p className="mt-1">
    😳 Now stop blushing… <span className="italic">okay wait, don’t</span> 😜💗
  </p>
</motion.div>


        </>
      )}
    </div>
  );
};

