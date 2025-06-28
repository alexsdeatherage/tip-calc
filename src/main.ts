function calculateTip(bill: number, tipPercent: number): number {
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
const resultDisplay = document.getElementById('result') as HTMLParagraphElement;

calcButton.addEventListener('click', () => {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);

    if (bill > 0 && tipPercent > 0) {
        const tip = calculateTip(bill, tipPercent)
        resultDisplay.textContent = `Tip Amount: $${tip.toFixed(2)}`;
    } else {
        resultDisplay.textContent = `Please enter valid values for bill and tip percentage`
    }
});