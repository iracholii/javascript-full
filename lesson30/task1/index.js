export const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const { width, height } = imgElem;

    imgElem.addEventListener('load', () => resolve({ width, height }));
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });

  return p;
};

const res = addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
);

// console.log(res);
// res.then(data => console.log(data));

res.then(data => {
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${data.width} x ${data.height}`;
});
