const DITO = [
    '0895', '0896', '0897', '0898', '0991', '0992', '0993', '0994'
];

const GLOBE = [
    '0817', '0905', '0906', '0915', '0916', '0917', '0926', '0927',
    '0935', '0936', '0937', '0945', '0953', '0954', '0955', '0956',
    '0965', '0966', '0967', '0975', '0976', '0977', '0978', '0979',
    '0995', '0996', '0997',
];

const GLOBE_EXTRA = [
    '09253', '09255', '09256', '09257', '09258'
];

const SMART = [
    '0908', '0918', '0919', '0920', '0921', '0928', '0929', '0939',
    '0946', '0947', '0949', '0951', '0961', '0998', '0999'
];

const SUN = [
    '0922', '0923', '0924', '0925', '0931', '0932', '0933', '0934',
    '0940', '0941', '0942', '0943', '0973', '0974'
];

const TNT = [
    '0907', '0909', '0910', '0912', '0930', '0938', '0946', '0948',
    '0950'
];

function findProvider(prefix) {
    if (prefix.length === 4) {
        if (DITO.includes(prefix)) return 'Provider: DITO';
        if (GLOBE.includes(prefix)) return 'Provider: GLOBE';
        if (SMART.includes(prefix)) return 'Provider: SMART';
        if (SUN.includes(prefix)) return 'Provider: SUN';
        if (TNT.includes(prefix)) return 'Provider: TNT';
    }

    if (prefix.length === 5) {
        return (GLOBE_EXTRA.includes(prefix))
            ? 'Provider: GLOBE' : 'Provider: SUN';
    }
    
    return 'Invalid number';
}

const inputDisplay = document.getElementById('input');
const providerDisplay = document.getElementById('provider');
const numberField = document.getElementById('number');

document.querySelector('form').onsubmit = () => {
    let number = numberField.value;
    let valid = false;
    let provider;

    const country = /^\+63/;
    let check = number.replace(country, '0');

    const separator = /\s|-|\.|\(|\)/g;
    check = check.replace(separator, '');

    if (!check || !Number(check)) {
        provider = 'Please enter a number';
    } else if (check.length !== 11) {
        provider = 'Invalid number';
    } else {
        let prefix = check.substring(0, 4);
        if (prefix === '0925') prefix = check.substring(0, 5);
        provider = findProvider(prefix);
        valid = true;
    }

    inputDisplay.innerHTML = valid ? '📱 ' + number : '';
    providerDisplay.innerHTML = provider;
    numberField.value = '';

    return false;
}

const button = document.getElementById('submit');
const result = document.querySelector('.result');

button.addEventListener('click', () => {
    result.style.animationPlayState = 'running';
    result.addEventListener('animationend', () => {
        result.style.animationPlayState = 'paused';
    })

    result.classList.remove('animate');
    result.offsetWidth;
    result.classList.add('animate');
})