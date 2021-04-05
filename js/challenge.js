
let counter = document.getElementById('counter');
const welcome = document.getElementById('welcome');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const heartBtn = document.getElementById('heart');
const pauseBtn = document.getElementById('pause');
pauseBtn.innerHTML = 'pause';
const likesUl = document.getElementsByClassName('likes')[0];
const userComment = document.getElementById('comment-input');
const commentsDiv = document.getElementById('list');
const commentForm = document.getElementById('comment-form');
const submitBtn = document.getElementById('submit');

let pausedNumber = 0;

let number = 0;
let countUp = setInterval( function() {
    if (pauseBtn.innerHTML === 'pause') ++number;
    counter.innerHTML = number;
}, 1000);

const plusOne = () => { counter.innerHTML = ++number; }
const minusOne = () => { counter.innerHTML = --number; }
const pause = () => {
    if (pauseBtn.innerHTML === 'pause') {
        minusBtn.disabled = true;
        plusBtn.disabled = true;
        heartBtn.disabled = true;
        submitBtn.disabled = true;
        pauseBtn.innerHTML = 'resume';
    } else {
        minusBtn.disabled = false;
        plusBtn.disabled = false;
        heartBtn.disabled = false;
        submitBtn.disabled = false;
        pauseBtn.innerHTML = 'pause';
    }
}

const like = () => {
    let nStr = number;
    if(!!!document.getElementById(nStr)) {
        let li = document.createElement('li');
        li.id = nStr;
        li.innerHTML = `${nStr} has been liked 1 time`;
        likesUl.appendChild(li);
    } else {
        let li = document.getElementById(nStr);
        let strArr = li.innerHTML.split(' ');
        let n = strArr.length;
        strArr[n-2] = parseInt(strArr[n-2]) + 1;
        strArr[n-1] = 'times';
        let str = strArr.join(' ');
        li.innerHTML = str;
    }
}

const comment = event => {
    event.preventDefault();
    let p = document.createElement('p');
    console.log(userComment.value);
    p.innerText = userComment.value;
    commentsDiv.appendChild(p);
    userComment.value = '';
}

plusBtn.addEventListener('click', plusOne);
minusBtn.addEventListener('click', minusOne);
pauseBtn.addEventListener('click', pause);
heartBtn.addEventListener('click', like);
submitBtn.addEventListener('click', comment);
