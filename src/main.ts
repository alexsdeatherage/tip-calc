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
const totalTipDisplay = document.getElementById('result') as HTMLParagraphElement;
const tipPerPersonDisplay = document.getElementById('tip-amount') as HTMLParagraphElement;
const peopleInput = document.getElementById('people') as HTMLInputElement;

calcButton.addEventListener('click', () => {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);

    if (bill > 0 && tipPercent > 0) {
        const tip = calculateTotalTip(bill, tipPercent)
        const people = parseInt(peopleInput.value)
        const tipPerPerson = tip / people
        totalTipDisplay.textContent = `Tip Amount: $${tip.toFixed(2)}`;
        tipPerPersonDisplay.textContent = tipPerPerson.toString();

    } else {
        totalTipDisplay.textContent = `Please enter valid values for bill and tip percentage`
    }
});