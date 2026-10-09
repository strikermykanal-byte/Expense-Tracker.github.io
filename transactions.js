const transContainer = document.getElementById('trans-container');
const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
function displayTransactions() {

    transContainer.innerHTML = '';

    const sortedTransactions = [...transactions].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    sortedTransactions.forEach(transaction => {

        const card = document.createElement('div');

        card.classList.add('transaction-card');

        let amount;
        let amountClass;

        if (transaction.type === 'income') {
            amount = `+$${transaction.amount.toFixed(2)}`;
            amountClass = 'income';
        } else {
            amount = `-$${transaction.amount.toFixed(2)}`;
            amountClass = 'expense';
        }

        card.innerHTML = `
            <div class="transaction-info">
                <h3>${transaction.name}</h3>
                <p>${transaction.category}</p>
                <span>${transaction.date}</span>
            </div>

            <div class="transaction-amount ${amountClass}">
                ${amount}
            </div>
        `;

        transContainer.appendChild(card);
    });
}
displayTransactions();
