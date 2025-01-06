function filterData(data) {
  const address = data.resolvedAddress;
  const conditions = data.days[0].conditions;
  const maxTemp = data.days[0].tempmax;
  const minTemp = data.days[0].tempmin;
  const precProb = data.days[0].precipprob;

  return { address, conditions, maxTemp, minTemp, precProb };
}

export { filterData };
