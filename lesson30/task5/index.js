import { addImage } from './addImage.js';

// export const addImageV2 = url => {
//   const promise = new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.setAttribute('alt', 'User avatar');
//     img.src = url;

//     const pageElem = document.querySelector('.page');
//     pageElem.append(img);

//     const onImageLoaded = () => {
//       const { width, height } = img;
//       resolve({ width, height });
//     };
//     const onImageLoadError = () => reject(new Error('Image load failed'));
//     img.addEventListener('load', onImageLoaded);
//     img.addEventListener('error', onImageLoadError);
//   });
//   return promise;
// };

export const addImageV2 = url => {
  const promise = new Promise((resolve, reject) => {
    addImage(url, resolve);
  });
  return promise;
};

// // examples
// const imgSrc =
//   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

// const res = addImageV2(imgSrc);

// console.log(res);

// res.then(data => console.log(data)); // ==> { width: 200, height: 100 }
// res.catch(error => console.log(error)); // ==> 'Image load failed'
