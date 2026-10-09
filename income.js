const incomeBtn = document.getElementById('incomeBtn');
const panel = document.getElementById('income-panel');

incomeBtn.addEventListener('click', () => {
    panel.classList.add('active');
});

const closeBtn = document.getElementById('close-income');

closeBtn.addEventListener('click', () => {
    panel.classList.remove('active');
});

const amountInput = document.getElementById('income-amount');
const sourceInput = document.getElementById('income-source');
const dateInput = document.getElementById('income-date');
const nameInput = document.getElementById('income-name');

const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function userCategoryTotals() {
    const categoryAmounts = document.querySelectorAll('.amount');

    categoryAmounts.forEach(amountElement => {
        const category = amountElement.dataset.category;

        const total = transactions
            .filter(transaction =>
                transaction.type === 'income' &&
                transaction.category === category
            )
            .reduce((sum, transaction) => sum + transaction.amount, 0);

        amountElement.textContent = `${total.toFixed(2)} $`;
    });
}
userCategoryTotals();

function updateCategoryTotals() {
    const totalIncome = transactions
        .filter(transaction => transaction.type === 'income')
        .reduce((sum, transaction) => sum + transaction.amount, 0);
    document.getElementById('income-total').textContent = `${totalIncome.toFixed(2)}$`;
}
updateCategoryTotals();

// ← вот эта строка добавлена: показывает список сразу при открытии страницы
renderRecentTransactions('recent-transactions', 'income', 5);

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
        category: sourceInput.value,
        date: dateInput.value,
        type: 'income'
    };

    transactions.push(transaction);

    localStorage.setItem(
        'transactions',
        JSON.stringify(transactions)
    );

    userCategoryTotals();
    updateCategoryTotals();

    nameInput.value = '';
    amountInput.value = '';
    dateInput.value = '';

    renderRecentTransactions('recent-transactions', 'income', 5); // ← и здесь, после сохранения
    panel.classList.remove('active');
});
