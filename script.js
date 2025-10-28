// Game data
let balance = 1000.00;

// Rarity colors
const rarityColors = {
    common: '#718096',
    uncommon: '#4299e1',
    rare: '#9f7aea',
    epic: '#ed64a6',
    legendary: '#f6ad55',
    mythical: '#fc8181'
};

// Case items database
const caseItems = {
    classic: [
        { name: 'AK-47 | Redline', price: 25.50, rarity: 'rare', image: '🔫' },
        { name: 'M4A4 | Howl', price: 850.00, rarity: 'legendary', image: '🔫' },
        { name: 'AWP | Dragon Lore', price: 1500.00, rarity: 'mythical', image: '🔫' },
        { name: 'Glock-18 | Water Elemental', price: 8.50, rarity: 'uncommon', image: '🔫' },
        { name: 'Desert Eagle | Blaze', price: 180.00, rarity: 'epic', image: '🔫' },
        { name: 'USP-S | Kill Confirmed', price: 45.00, rarity: 'rare', image: '🔫' },
        { name: 'P250 | Sand Dune', price: 0.50, rarity: 'common', image: '🔫' },
        { name: 'MAC-10 | Fade', price: 3.20, rarity: 'common', image: '🔫' },
        { name: 'Nova | Bloomstick', price: 1.80, rarity: 'common', image: '🔫' },
        { name: 'FAMAS | Spitfire', price: 2.50, rarity: 'common', image: '🔫' }
    ],
    premium: [
        { name: 'Butterfly Knife | Fade', price: 1200.00, rarity: 'mythical', image: '🔪' },
        { name: 'Karambit | Doppler', price: 800.00, rarity: 'legendary', image: '🔪' },
        { name: 'M4A1-S | Hyper Beast', price: 35.00, rarity: 'rare', image: '🔫' },
        { name: 'AWP | Asiimov', price: 65.00, rarity: 'epic', image: '🔫' },
        { name: 'AK-47 | Fire Serpent', price: 450.00, rarity: 'legendary', image: '🔫' },
        { name: 'Glock-18 | Fade', price: 280.00, rarity: 'epic', image: '🔫' },
        { name: 'P90 | Asiimov', price: 12.00, rarity: 'uncommon', image: '🔫' },
        { name: 'MP7 | Fade', price: 5.50, rarity: 'uncommon', image: '🔫' },
        { name: 'Five-SeveN | Monkey Business', price: 3.80, rarity: 'common', image: '🔫' },
        { name: 'Tec-9 | Fuel Injector', price: 4.20, rarity: 'common', image: '🔫' }
    ],
    knife: [
        { name: 'Karambit | Gamma Doppler', price: 1800.00, rarity: 'mythical', image: '🔪' },
        { name: 'M9 Bayonet | Marble Fade', price: 950.00, rarity: 'legendary', image: '🔪' },
        { name: 'Butterfly Knife | Tiger Tooth', price: 1100.00, rarity: 'legendary', image: '🔪' },
        { name: 'Bayonet | Doppler', price: 600.00, rarity: 'epic', image: '🔪' },
        { name: 'Huntsman Knife | Fade', price: 450.00, rarity: 'epic', image: '🔪' },
        { name: 'Flip Knife | Autotronic', price: 380.00, rarity: 'rare', image: '🔪' },
        { name: 'Gut Knife | Damascus Steel', price: 220.00, rarity: 'rare', image: '🔪' },
        { name: 'Shadow Daggers | Fade', price: 280.00, rarity: 'rare', image: '🔪' },
        { name: 'Stiletto Knife | Slaughter', price: 350.00, rarity: 'epic', image: '🔪' },
        { name: 'Navaja Knife | Fade', price: 180.00, rarity: 'uncommon', image: '🔪' }
    ],
    budget: [
        { name: 'AK-47 | Elite Build', price: 2.50, rarity: 'uncommon', image: '🔫' },
        { name: 'M4A4 | Desert-Strike', price: 3.20, rarity: 'uncommon', image: '🔫' },
        { name: 'AWP | Phobos', price: 4.80, rarity: 'rare', image: '🔫' },
        { name: 'Desert Eagle | Conspiracy', price: 1.50, rarity: 'common', image: '🔫' },
        { name: 'USP-S | Torque', price: 2.80, rarity: 'uncommon', image: '🔫' },
        { name: 'P250 | Cartel', price: 1.20, rarity: 'common', image: '🔫' },
        { name: 'Galil AR | Eco', price: 0.80, rarity: 'common', image: '🔫' },
        { name: 'FAMAS | Pulse', price: 1.00, rarity: 'common', image: '🔫' },
        { name: 'Nova | Hyper Beast', price: 2.30, rarity: 'uncommon', image: '🔫' },
        { name: 'MAC-10 | Neon Rider', price: 3.50, rarity: 'uncommon', image: '🔫' }
    ]
};

// Available cases
const cases = [
    {
        id: 'classic',
        name: 'Классический кейс',
        price: 10.00,
        image: '📦',
        items: caseItems.classic
    },
    {
        id: 'premium',
        name: 'Премиум кейс',
        price: 25.00,
        image: '💎',
        items: caseItems.premium
    },
    {
        id: 'knife',
        name: 'Ножевой кейс',
        price: 50.00,
        image: '🔪',
        items: caseItems.knife
    },
    {
        id: 'budget',
        name: 'Бюджетный кейс',
        price: 5.00,
        image: '🎁',
        items: caseItems.budget
    },
    {
        id: 'classic2',
        name: 'Военный кейс',
        price: 15.00,
        image: '🎖️',
        items: caseItems.classic
    },
    {
        id: 'premium2',
        name: 'Золотой кейс',
        price: 30.00,
        image: '🏆',
        items: caseItems.premium
    }
];

// Current opened case
let currentCase = null;
let isSpinning = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCases();
    updateBalance();
    generateLiveDrops();
    setInterval(generateLiveDrops, 5000);
});

// Render cases grid
function renderCases() {
    const grid = document.getElementById('casesGrid');
    grid.innerHTML = cases.map(caseData => `
        <div class="case-card" onclick="openCaseModal('${caseData.id}')">
            <div class="case-image" style="font-size: 6rem; display: flex; align-items: center; justify-content: center;">
                ${caseData.image}
            </div>
            <div class="case-info">
                <div class="case-name">${caseData.name}</div>
                <div class="case-price">$${caseData.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
}

// Update balance display
function updateBalance() {
    document.getElementById('balance').textContent = balance.toFixed(2);
}

// Open case modal
function openCaseModal(caseId) {
    currentCase = cases.find(c => c.id === caseId);
    if (!currentCase) return;

    document.getElementById('modalCaseName').textContent = currentCase.name;
    document.getElementById('modalCasePrice').textContent = `$${currentCase.price.toFixed(2)}`;
    document.getElementById('openCasePrice').textContent = `$${currentCase.price.toFixed(2)}`;
    
    // Reset state
    document.getElementById('wonItem').style.display = 'none';
    document.getElementById('btnOpenCase').disabled = false;
    isSpinning = false;
    
    // Generate roulette items
    generateRouletteItems();
    
    // Show modal
    document.getElementById('caseModal').classList.add('active');
    
    // Add event listener for open button
    document.getElementById('btnOpenCase').onclick = openCase;
}

// Close modal
function closeModal() {
    document.getElementById('caseModal').classList.remove('active');
    currentCase = null;
}

// Generate roulette items
function generateRouletteItems() {
    const track = document.getElementById('rouletteTrack');
    track.innerHTML = '';
    track.style.transform = 'translateX(0)';
    
    // Generate 50 items for smooth scrolling
    for (let i = 0; i < 50; i++) {
        const item = getRandomItem(currentCase.items);
        const itemEl = document.createElement('div');
        itemEl.className = 'roulette-item';
        itemEl.style.setProperty('--item-rarity-color', rarityColors[item.rarity]);
        itemEl.innerHTML = `
            <div style="font-size: 3rem;">${item.image}</div>
            <div class="roulette-item-name">${item.name}</div>
            <div class="roulette-item-price">$${item.price.toFixed(2)}</div>
        `;
        track.appendChild(itemEl);
    }
}

// Get random item based on rarity weights
function getRandomItem(items) {
    const weights = {
        common: 50,
        uncommon: 25,
        rare: 15,
        epic: 7,
        legendary: 2.5,
        mythical: 0.5
    };
    
    const weightedItems = [];
    items.forEach(item => {
        const weight = weights[item.rarity] || 1;
        for (let i = 0; i < weight * 10; i++) {
            weightedItems.push(item);
        }
    });
    
    return weightedItems[Math.floor(Math.random() * weightedItems.length)];
}

// Open case
function openCase() {
    if (isSpinning) return;
    
    if (balance < currentCase.price) {
        alert('Недостаточно средств!');
        return;
    }
    
    // Deduct balance
    balance -= currentCase.price;
    updateBalance();
    
    isSpinning = true;
    document.getElementById('btnOpenCase').disabled = true;
    document.getElementById('wonItem').style.display = 'none';
    
    const track = document.getElementById('rouletteTrack');
    const isFastOpen = document.getElementById('fastOpen').checked;
    
    // Add spinning class
    track.classList.remove('spinning', 'fast-spin');
    if (isFastOpen) {
        track.classList.add('fast-spin');
    } else {
        track.classList.add('spinning');
    }
    
    // Calculate winning item
    const wonItem = getRandomItem(currentCase.items);
    const itemWidth = 150; // 140px width + 10px margin
    const totalItems = 50;
    const winningIndex = Math.floor(totalItems / 2) + Math.floor(Math.random() * 5) - 2;
    
    // Position winning item in center
    track.children[winningIndex].style.setProperty('--item-rarity-color', rarityColors[wonItem.rarity]);
    track.children[winningIndex].innerHTML = `
        <div style="font-size: 3rem;">${wonItem.image}</div>
        <div class="roulette-item-name">${wonItem.name}</div>
        <div class="roulette-item-price">$${wonItem.price.toFixed(2)}</div>
    `;
    
    // Calculate scroll position
    const scrollDistance = -(winningIndex * itemWidth - (track.parentElement.offsetWidth / 2) + itemWidth / 2);
    
    // Reset position first
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    
    // Force reflow
    track.offsetHeight;
    
    // Start spin
    setTimeout(() => {
        track.style.transition = '';
        track.style.transform = `translateX(${scrollDistance}px)`;
    }, 50);
    
    // Show won item after animation
    const animationDuration = isFastOpen ? 1500 : 5000;
    setTimeout(() => {
        showWonItem(wonItem);
        isSpinning = false;
        document.getElementById('btnOpenCase').disabled = false;
    }, animationDuration);
}

// Show won item
function showWonItem(item) {
    const wonItemDiv = document.getElementById('wonItem');
    document.getElementById('wonItemImage').textContent = item.image;
    document.getElementById('wonItemImage').style.fontSize = '4rem';
    document.getElementById('wonItemName').textContent = item.name;
    document.getElementById('wonItemPrice').textContent = `$${item.price.toFixed(2)}`;
    wonItemDiv.style.display = 'block';
    
    // Store won item for selling
    wonItemDiv.dataset.wonPrice = item.price;
}

// Sell item
function sellItem() {
    const wonItemDiv = document.getElementById('wonItem');
    const price = parseFloat(wonItemDiv.dataset.wonPrice);
    
    balance += price;
    updateBalance();
    
    wonItemDiv.style.display = 'none';
    
    // Show success message
    const badge = wonItemDiv.querySelector('.won-badge');
    const originalText = badge.textContent;
    badge.textContent = `Продано за $${price.toFixed(2)}!`;
    badge.style.background = '#10b981';
    
    setTimeout(() => {
        badge.textContent = originalText;
        badge.style.background = '';
    }, 2000);
}

// Generate live drops
function generateLiveDrops() {
    const container = document.getElementById('dropsContainer');
    
    // Random user names
    const users = ['Player1', 'ProGamer', 'LuckyOne', 'SkinsLover', 'CaseKing', 'DropsHunter', 'WinnerCS', 'MegaLuck'];
    
    // Random items from all cases
    const allItems = Object.values(caseItems).flat();
    
    // Generate 1-3 new drops
    const dropCount = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < dropCount; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        const item = allItems[Math.floor(Math.random() * allItems.length)];
        
        const dropEl = document.createElement('div');
        dropEl.className = 'drop-item';
        dropEl.style.opacity = '0';
        dropEl.innerHTML = `
            <div class="drop-avatar"></div>
            <div class="drop-info">
                <div class="drop-user">${user}</div>
                <div class="drop-item-name">${item.name}</div>
            </div>
            <div class="drop-price">$${item.price.toFixed(2)}</div>
        `;
        
        container.insertBefore(dropEl, container.firstChild);
        
        // Fade in animation
        setTimeout(() => {
            dropEl.style.transition = 'opacity 0.5s';
            dropEl.style.opacity = '1';
        }, i * 200);
    }
    
    // Remove old drops (keep max 20)
    while (container.children.length > 20) {
        container.removeChild(container.lastChild);
    }
}

// Filter cases
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // In a real app, you would filter cases here
        // For now, we just show all cases
    });
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

