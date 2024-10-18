const dateArray = [
    '24-Apr-2024', '02-May-2024', '09-May-2024', '31-May-2024', '21-Jun-2024'
];

const strategyArray = [
    {
        'View': 'Bullish',
        'Value': {
            '24-Apr-2024': ['Bull Call Spread', 'Bull Put Spread', 'Bull Put Spread', 'Long Call'],
            '02-May-2024': ['Bull Call Spread', 'Long Call', 'Strategy1'],
            '09-May-2024': ['Strategy Call', 'Strategy Put'],
        }
    },
    {
        'View': 'Bearish',
        'Value': {
            '24-Apr-2024': ['Bear Call Spread', 'Long Put'],
            '31-May-2024': ['Long Put', 'Long Put'],
            '21-Jun-2024': ['Bear Put Spread', 'Long Put'],
        }
    },
    {
        'View': 'RangeBound',
        'Value': {
            '24-Apr-2024': ['Short Straddle', 'Iron Butterfly'],
            '02-May-2024': ['Short Straddle', 'Short Strangle'],
            '21-Jun-2024': ['Iron Condor'],
        }
    },
    {
        'View': 'Volatile',
        'Value': {
            '02-May-2024': ['Long Straddle', 'Strategy1'],
            '09-May-2024': ['Long Straddle', 'Strategy2'],
            '31-May-2024': ['Long Strangle'],
        }
    }
];

let currentView = "Bullish";
const dateDropdown = document.getElementById("date-dropdown");
const strategyContainer = document.getElementById("strategy-container");

function populateDateDropdown() {
    dateArray.forEach(index => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = index;
        dateDropdown.appendChild(option);
    });
            console.log(dateArray);
    dateDropdown.value = dateArray[0];
}

populateDateDropdown();

function changeView(view) {
    currentView = view;
    document.querySelectorAll(".toggle-btn").forEach(btn => {
        btn.classList.toggle("active", btn.textContent === view);
    });
    console.log(view); 
    renderStrategies();
}

function renderStrategies() {
    const selectedDate = dateDropdown.value;
    console.log(currentView);
    console.log('Selected date is:', selectedDate);
    
    const strategiesForView = strategyArray.find(strategy => strategy.View === currentView);
    console.log( strategiesForView);
    
    const strategiesForDate = strategiesForView ? strategiesForView.Value[selectedDate] : [];

    strategyContainer.innerHTML = '';

    if (strategiesForDate && strategiesForDate.length > 0) {
        const strategyCount = strategiesForDate.reduce((acc, strategy) => {
            acc[strategy] = (acc[strategy] || 0) + 1;
            return acc;
        }, {});

        console.log(strategyCount);

        Object.entries(strategyCount).forEach(([strategyName, count]) => {
            const card = document.createElement('div');
            card.className = 'strategy-card';
            card.innerHTML = `
                <div class="strategy-name">${strategyName}</div>
                <div>${count} ${count > 1 ? 'Strategies' : 'Strategy'}</div>
            `;
            strategyContainer.appendChild(card);
            
        });
    } else {
        console.log('No strategies found for selected date:', selectedDate);
        const emptyState = document.createElement('div');
        emptyState.className = "empty-state";
        emptyState.textContent = `No strategies available for ${selectedDate}`;
        strategyContainer.appendChild(emptyState);
    }
}
renderStrategies();