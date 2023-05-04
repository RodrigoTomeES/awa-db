const getUniqueData = (...args) => {
  const uniqueData = new Map();

  args.forEach((data) =>
    data.forEach((item) => {
      const exists = uniqueData.has(item.id);
      const uniqueItem = uniqueData.get(item.id);

      if (exists) uniqueData.set(item.id, { ...uniqueItem, ...item });
      else uniqueData.set(item.id, item);
    })
  );

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

const db = [];
const data = recoverData();
const uniqueData = getUniqueData(db, data);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const missingIDs = findMissingNumbers(uniqueData.ids);
