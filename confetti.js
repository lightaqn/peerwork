// import confetti from "canvas-confetti";

// export const runFireworks = () => {
//   var duration = 15 * 1000;
//   var animationEnd = Date.now() + duration;
//   var defaults = {
//     startVelocity: 30,
//     spread: 360,
//     ticks: 60,
//     zIndex: 0,
//   };
//   function randomInRange(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   var interval = setInternal(function () {
//     var timeLeft = amimationEnd - Date.now();
//     if (timeLeft <= 0) {
//       return clearInterval(interval);
//     }

//     var particleCount = 50 * (timeLeft / duration);
//     // since particles descend start a bit higher than

//     confetti(
//       Object.assign({}, defaults, {
//         particleCount,
//         origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.19 },
//       })
//     );
//     confetti(
//       Object.assign({}, defaults, {
//         particleCount,
//         origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.19 },
//       })
//     );
//   }, 250);
// };
