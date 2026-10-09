const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const dateInput = document.getElementById('expense-date');
const nameInput = document.getElementById('expense-name');

const expenseBtn = document.getElementById('expenseBtn');
const panel = document.getElementById('expense-panel');
expenseBtn.addEventListener('click', () => {
    panel.classList.add('active');
});

const closeBtn = document.getElementById('close-expense');
closeBtn.addEventListener('click', () => {
    panel.classList.remove('active');
});

const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
function updateCategoryTotals() {
    const categoryAmounts = document.querySelectorAll('.amount');
    categoryAmounts.forEach(amountElement=>{
        const category = amountElement.dataset.category;
        const total = transactions
        .filter(transaction=>
            transaction.type === 'expense'&&
            transaction.category === category
        )
        .reduce((sum,transaction) => sum+transaction.amount, 0);
        amountElement.textContent = `${(total.toFixed(2))}$`;
    })

}
updateCategoryTotals();
function updateTotalExpense() {
    const totalExpense = transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((sum, transaction) => sum + transaction.amount, 0);
    document.getElementById('expense-totals').textContent = `${(totalExpense.toFixed(2))}$`;
}
updateTotalExpense();
renderRecentTransactions('recent-transactions', 'expense', 5);
const saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (!nameInput.value.trim() || !amountInput.value || !dateInput.value) {
        alert('Please fill in all fields');
        return;
    }

    const transaction = {
        id: Date.now(),
        name: nameInput.value.trim(),
        amount: Number(amountInput.value),
        category: categoryInput.value,
        date: dateInput.value,
        type: 'expense'
    };

    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
     updateCategoryTotals();
    nameInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
  panel.classList.remove('active');
renderRecentTransactions('recent-transactions', 'expense', 5);
});
