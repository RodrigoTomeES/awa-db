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
    id: parseInt(element.dataset.productId),
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
