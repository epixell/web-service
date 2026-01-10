
const generateBtn = document.getElementById('generate-btn');
const menuElement = document.querySelector('.menu-display .menu');
const themeToggle = document.getElementById('theme-toggle');

const lunchMenus = [
    "돈까스", "제육볶음", "김치찌개", "된장찌개", "부대찌개",
    "비빔밥", "냉면", "칼국수", "수제비", "라면",
    "떡볶이", "순대", "튀김", "김밥", "쫄면",
    "초밥", "우동", "소바", "라멘", "카레",
    "햄버거", "피자", "파스타", "리조또", "샐러드",
    "샌드위치", "타코", "쌀국수", "분짜", "마라탕"
];

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * lunchMenus.length);
    const selectedMenu = lunchMenus[randomIndex];
    menuElement.textContent = selectedMenu;
});

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeToggle.checked = true;
    }
}

applyTheme();
