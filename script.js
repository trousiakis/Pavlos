function calculateResult(pointsWinner, pointsLoser) {
  console.log({ pointsWinner, pointsLoser });
  // Define the thresholds and results from the first table (winner has more points than loser)
  const firstTable = [
    { min: 750, winnerResult: 0, looserResult: 0 },
    { min: 500.1, winnerResult: 1, looserResult: 0.3 },
    { min: 400.1, winnerResult: 2, looserResult: 0.6 },
    { min: 300.1, winnerResult: 3, looserResult: 0.9 },
    { min: 200.1, winnerResult: 4, looserResult: 1.2 },
    { min: 150.1, winnerResult: 5, looserResult: 1.5 },
    { min: 100.1, winnerResult: 6, looserResult: 1.8 },
    { min: 50.1, winnerResult: 7, looserResult: 2.1 },
    { min: 25.1, winnerResult: 8, looserResult: 2.4 },
    { min: 0.1, winnerResult: 9, looserResult: 2.7 },
  ];

  // Define the thresholds and results from the second table (loser has more points than winner)
  const secondTable = [
    { min: 750, winnerResult: 40, looserResult: 12 },
    { min: 500, winnerResult: 36, looserResult: 10.8 },
    { min: 400, winnerResult: 32, looserResult: 9.6 },
    { min: 300, winnerResult: 28, looserResult: 8.4 },
    { min: 200, winnerResult: 24, looserResult: 7.2 },
    { min: 150, winnerResult: 20, looserResult: 6 },
    { min: 100, winnerResult: 16, looserResult: 4.8 },
    { min: 50, winnerResult: 14, looserResult: 4.2 },
    { min: 25, winnerResult: 12, looserResult: 3.6 },
    { min: 0, winnerResult: 10, looserResult: 3 },
  ];

  // Calculate the difference in points
  const pointsDifference = Math.abs(pointsWinner - pointsLoser);

  // Determine the result
  let result;
  if (pointsWinner > pointsLoser) {
    result = firstTable.find((item) => item.min <= pointsDifference);
    return [result.winnerResult, result.looserResult];
  } else {
    result = secondTable.find((item) => item.min <= pointsDifference);
    return [result.looserResult, result.winnerResult];
  }

  // Return the result

  return result;
}

function displayResult() {
  const pointsPlayerOne = parseFloat(document.getElementById("winner").value);
  const pointsPlayerTwo = parseFloat(document.getElementById("looser").value);

  // Determine who is the winner and who is the loser
  const isPlayerOneWinner = pointsPlayerOne > pointsPlayerTwo;
  const pointsWinner = isPlayerOneWinner ? pointsPlayerOne : pointsPlayerTwo;
  const pointsLoser = isPlayerOneWinner ? pointsPlayerTwo : pointsPlayerOne;

  // Get the result
  const result = calculateResult(pointsWinner, pointsLoser);

  // Display the result
  if (result) {
    document.getElementById("result").innerText = `Winner: ${result[0]}, Loser: ${result[1]}`;
  } else {
    document.getElementById("result").innerText = "No result found for the given points difference.";
  }
}

// displayResult();

// // Example usage:
try {
  const result = calculateResult(1910, 1528); // Winner has more points
  console.log(result);
} catch (error) {
  console.error(error);
}

