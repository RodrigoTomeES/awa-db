// Get marketplace data snippet
const ALIENWARE_DATA = "marketplace-alienware";

const recoverData = () => {
  const storageData = localStorage.getItem(ALIENWARE_DATA);

  return storageData ? JSON.parse(storageData) : [];
};

const saveData = (data) => {
  localStorage.setItem(ALIENWARE_DATA, JSON.stringify(data));
};

const getData = () => {
  const elements = document.querySelectorAll("[data-product-id]:not(.timer)");

  return Array.from(elements).map((element) => ({
    id: element.dataset.productId,
    name: element.dataset.productName,
  }));
};

const getDataAllPages = () => {
  const data = recoverData();
  const linkToNextPage = document.getElementsByClassName("page-item next");
  const newData = getData();

  saveData([...data, ...newData]);

  if (linkToNextPage) linkToNextPage[0].childNodes[0].click();
};

getDataAllPages();

// Save data snippet
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
