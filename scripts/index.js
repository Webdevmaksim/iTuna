import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

// Deactivation of active classes
const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
};

//Finding index of elements and adding an active class
playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    }));

videoPlayerInit();
radioPlayerInit();
musicPlayerInit();