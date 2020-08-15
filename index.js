import dvaImg from './images/dva.png';
import './style/base.css';
let img = new Image()
img.src = dvaImg;
img.classList.add = 'dva';

document.body.appendChild(img);
console.log(img);