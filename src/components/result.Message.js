// resultMessage.js
export const getRapidfireFeedback = (score) => {
  switch (true) {
    case score === 5:
      return "🌟 Outstanding! You’re lightning sharp.";
    case score >= 3:
      return "⚡ Great job!";
    case score >= 1:
      return "🌀 Try again to improve!";
    default:
      return "🚫 Time to refresh those facts!";
  }
};
