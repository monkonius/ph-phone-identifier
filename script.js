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
        if (DITO.indexOf(prefix) >= 0) return 'Provider: DITO';
        if (GLOBE.indexOf(prefix) >= 0) return 'Provider: GLOBE';
        if (SMART.indexOf(prefix) >= 0) return 'Provider: SMART';
        if (SUN.indexOf(prefix) >= 0) return 'Provider: SUN';
        if (TNT.indexOf(prefix) >= 0) return 'Provider: TNT';
    }

    if (prefix.length === 5) {
        return (GLOBE_EXTRA.indexOf(prefix) >= 0)
            ? 'Provider: GLOBE' : 'Provider: SUN';
    }
    
    return 'Invalid number';
}

const submit = document.querySelector('#submit');
const numberField = document.querySelector('#number');

document.querySelector('form').onsubmit = () => {
    let number = numberField.value;
    let result;

    const country = /^\+63/
    number = number.replace(country, '0');

    const separator = /\s|-|\./g
    number = number.replace(separator, '');

    if (!number || !Number(number)) {
        result = 'Please enter a number'
    } else if (number.length !== 11) {
        result = 'Invalid number';
    } else {
        let prefix = number.substring(0, 4);
        if (prefix === '0925') prefix = number.substring(0, 5);
        result = findProvider(prefix);
    }

    document.querySelector('#result').innerHTML = result;

    return false;
}