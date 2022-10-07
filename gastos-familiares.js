console.log('SALDO FAMILIAR-------');

const balance = {
    incomes: [
        100, 20, 30, 50
    ],
    expenses: [
        10, 100, 20
    ],
};

const sum = (array) => {
    let total = 0;  

    array.map((value) => {
        total += value;
    })

    return total;
}
 
const calculateBalance = () => {
    const totalIncomes = sum(balance.incomes);
    const totalExpenses = sum(balance.expenses);
    let finalBalance = {
        balanceValue: 0,
        balanceRating: '',
    };

    finalBalance.balanceValue = totalIncomes - totalExpenses;
    finalBalance.balanceValue >= 0 ? finalBalance.balanceRating = 'positivo' : finalBalance.balanceRating = 'negativo';

    return finalBalance;
}

console.log(`Saldo ${calculateBalance().balanceRating}: R$ ${calculateBalance().balanceValue.toFixed(2)}`);