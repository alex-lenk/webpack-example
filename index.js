import './index.css'
import imgEL from './assets/achievements.png';

console.log('Hello World!');

const app = document.querySelector('#app')
const imgEl = document.createElement('img')
imgEl.classList.add('media')
imgEl.src = imgEL
app.append(imgEl)
