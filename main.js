
const generateBtn = document.getElementById('generate-btn');
const menuElement = document.querySelector('.menu-display .menu');
const themeToggle = document.getElementById('theme-toggle');
const drawTarotBtn = document.getElementById('draw-tarot-btn');
const tarotCardImg = document.getElementById('tarot-card-img');
const tarotCardName = document.getElementById('tarot-card-name');
const tarotCardMeaning = document.getElementById('tarot-card-meaning');

const lunchMenus = [
    "돈까스", "제육볶음", "김치찌개", "된장찌개", "부대찌개",
    "비빔밥", "냉면", "칼국수", "수제비", "라면",
    "떡볶이", "순대", "튀김", "김밥", "쫄면",
    "초밥", "우동", "소바", "라멘", "카레",
    "햄버거", "피자", "파스타", "리조또", "샐러드",
    "샌드위치", "타코", "쌀국수", "분짜", "마라탕"
];

const tarotCards = [
  {
    "name": "The Fool",
    "meaning": "Beginnings, innocence, spontaneity, a free spirit."
  },
  {
    "name": "The Magician",
    "meaning": "Manifestation, resourcefulness, power, inspired action."
  },
  {
    "name": "The High Priestess",
    "meaning": "Intuition, sacred knowledge, divine feminine, the subconscious mind."
  },
  {
    "name": "The Empress",
    "meaning": "Femininity, beauty, nature, nurturing, abundance."
  },
  {
    "name": "The Emperor",
    "meaning": "Authority, establishment, structure, a father figure."
  },
  {
    "name": "The Hierophant",
    "meaning": "Spiritual wisdom, religious beliefs, conformity, tradition, institutions."
  },
  {
    "name": "The Lovers",
    "meaning": "Love, harmony, relationships, values alignment, choices."
  },
  {
    "name": "The Chariot",
    "meaning": "Control, willpower, success, action, determination."
  },
  {
    "name": "Strength",
    "meaning": "Strength, courage, persuasion, influence, compassion."
  },
  {
    "name": "The Hermit",
    "meaning": "Soul-searching, introspection, being alone, inner guidance."
  },
  {
    "name": "Wheel of Fortune",
    "meaning": "Good luck, karma, life cycles, destiny, a turning point."
  },
  {
    "name": "Justice",
    "meaning": "Justice, fairness, truth, cause and effect, law."
  },
  {
    "name": "The Hanged Man",
    "meaning": "Pause, surrender, letting go, new perspectives."
  },
  {
    "name": "Death",
    "meaning": "Endings, change, transformation, transition."
  },
  {
    "name": "Temperance",
    "meaning": "Balance, moderation, patience, purpose."
  },
  {
    "name": "The Devil",
    "meaning": "Shadow self, attachment, addiction, restriction, sexuality."
  },
  {
    "name": "The Tower",
    "meaning": "Sudden change, upheaval, chaos, revelation, awakening."
  },
  {
    "name": "The Star",
    "meaning": "Hope, faith, purpose, renewal, spirituality."
  },
  {
    "name": "The Moon",
    "meaning": "Illusion, fear, anxiety, subconscious, intuition."
  },
  {
    "name": "The Sun",
    "meaning": "Positivity, fun, warmth, success, vitality."
  },
  {
    "name": "Judgement",
    "meaning": "Judgement, rebirth, inner calling, absolution."
  },
  {
    "name": "The World",
    "meaning": "Completion, integration, accomplishment, travel."
  }
];


generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * lunchMenus.length);
    const selectedMenu = lunchMenus[randomIndex];
    menuElement.textContent = selectedMenu;
});

drawTarotBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const selectedCard = tarotCards[randomIndex];
    tarotCardName.textContent = selectedCard.name;
    tarotCardMeaning.textContent = selectedCard.meaning;
    tarotCardImg.src = `https://www.trustedtarot.com/img/cards/${selectedCard.name.toLowerCase().replace(/ /g, '-')}.png`;
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
