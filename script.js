

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


const dateDropdown = document.getElementById("date-dropdown");
// const strategyContainer = document.getElementById("strategy-container");

function populateDateDropdown(){
    dateArray.forEach(date => {
        const option = document.createElement('option')
        option.value = date;
        option.textContent = date;
        dateDropdown.appendChild(option)
    });
    dateDropdown.value = dateArray[0];
}

populateDateDropdown();
renderStrategies();


