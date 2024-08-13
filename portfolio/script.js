// script.js

document.addEventListener('DOMContentLoaded', () => {
    const hireMeBtn = document.getElementById('hire-me-btn');
    const skillsSection = document.getElementById('skills');
    const backBtn = document.getElementById('back-btn');
    const introductionSection = document.getElementById('introduction');

    hireMeBtn.addEventListener('click', () => {
        introductionSection.classList.add('hidden');
        skillsSection.classList.remove('hidden');
    });

    backBtn.addEventListener('click', () => {
        skillsSection.classList.add('hidden');
        introductionSection.classList.remove('hidden');
    });
});
