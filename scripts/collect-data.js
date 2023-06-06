const ALIENWARE_DATA = 'marketplace-alienware';

const recoverData = () => {
  const storageData = localStorage.getItem(ALIENWARE_DATA);

  return storageData ? JSON.parse(storageData) : [];
};

const saveData = (data) => {
  localStorage.setItem(ALIENWARE_DATA, JSON.stringify(data));
};

// This replace Ã­\uad to í. \uad is a hidden character.
const fixUTF8Encoding = (string) => string.replace(/Ã­/g, 'í');

const getData = () => {
  const elements = document.querySelectorAll('[data-product-id]:not(.timer)');

  return Array.from(elements).map((element) => ({
    id: parseInt(element.dataset.productId),
    image: element.dataset.productImage,
    name: fixUTF8Encoding(element.dataset.productName),
    description: fixUTF8Encoding(element.dataset.productDescription),
    price: parseInt(element.dataset.productPrice),
  }));
};

const getDataAllPages = () => {
  const data = recoverData();
  const linkToNextPage = document.getElementsByClassName('page-item next');
  const newData = getData();

  saveData([...data, ...newData]);

  if (linkToNextPage.length > 0) linkToNextPage[0].childNodes[0].click();
};

getDataAllPages();
