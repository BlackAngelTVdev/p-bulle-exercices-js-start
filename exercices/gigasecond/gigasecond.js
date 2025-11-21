//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) => {
  // (10^9 * 1000 = 10^12 ms)
  const GIGASECOND_IN_MS = 1e12; 

  const startTimeMs = startDate.getTime();

  const gigasecondTimeMs = startTimeMs + GIGASECOND_IN_MS;

  return new Date(gigasecondTimeMs);
};
