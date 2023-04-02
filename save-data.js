const getUniqueData = () => {
  const data = recoverData();
  const uniqueData = new Map();

  data.forEach((item) => {
    if (!uniqueData.has(item.id)) uniqueData.set(item.id, item);
  });

  return {
    data: [...uniqueData.values()].sort((a, b) => a.id - b.id),
    ids: [...uniqueData.keys()].sort((a, b) => a - b),
  };
};

const findMissingNumbers = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const all = Array.from(Array(max - min + 1), (e, i) => i + min);

  return all.filter((e) => !arr.includes(e));
};

const uniqueData = getUniqueData();
const missingIDs = findMissingNumbers(uniqueData.ids);
