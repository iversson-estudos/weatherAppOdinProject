function filterData(data) {
  const address = data.resolvedAddress;
  const conditions = data.days[0].conditions;
  const maxTemp = data.days[0].tempmax;
  const minTemp = data.days[0].tempmin;
  const precProb = data.days[0].precipprob;
  const icon = data.days[0].icon;

  return { address, conditions, icon, maxTemp, minTemp, precProb };
}

export { filterData };
