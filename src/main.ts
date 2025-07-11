function calculateTotalTip(bill: number, tipPercent: number): number {
    let tipAmount: number

    if (bill > 0 && tipPercent > 0) {
        tipAmount = bill * tipPercent / 100
        return tipAmount
    } else {
        throw new Error('Invalid Input')
    }
}

const billInput = document.getElementById('bill') as HTMLInputElement;
const tipInput = document.getElementById('tip') as HTMLInputElement;
const calcButton = document.getElementById('calc') as HTMLButtonElement;
const tipPerPersonDisplay = document.getElementById('tip-amount') as HTMLParagraphElement;
const peopleInput = document.getElementById('people') as HTMLInputElement;
const totalPerPersonDisplay = document.getElementById('total-amount') as HTMLParagraphElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;

const tipButtons = document.querySelectorAll('.tip-btn') as NodeListOf<HTMLButtonElement>;
tipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tipInput.value = btn.dataset.tip || '';
    });
});

calcButton.addEventListener('click', () => {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);
    const people = parseInt(peopleInput.value) || 1;

    if (bill > 0 && tipPercent > 0 && people >= 1) {
        const totalTip = calculateTotalTip(bill, tipPercent);
        const tipPerPerson = totalTip / people;
        const total = bill + totalTip;
        const totalPerPerson = total / people;

        tipPerPersonDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
        totalPerPersonDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
    } else {
        tipPerPersonDisplay.textContent = '$0.00';
        totalPerPersonDisplay.textContent = '$0.00';
    }
});

resetButton.addEventListener('click', () => {
    billInput.value = '';
    tipInput.value = '';
    peopleInput.value = '1';
    tipPerPersonDisplay.textContent = '$0.00';
    totalPerPersonDisplay.textContent = '$0.00';
});
