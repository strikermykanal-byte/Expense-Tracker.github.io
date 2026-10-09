const spendingCircle = document.getElementById("spending-circle");

function updateSpendingChart() {

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    const categories = [
        "Food",
        "Transport",
        "Shopping",
        "Entertainment",
        "Bills",
        "Others"
    ];

    const categoryTotals = categories.map(category => {
        return transactions
            .filter(t => t.type === 'expense' && t.category === category)
            .reduce((sum, t) => sum + t.amount, 0);
    });

    new Chart(spendingCircle, {
        type: "doughnut",

        data: {
            labels: categories,

            datasets: [{
                data: categoryTotals
            }]
        }
    });
}

updateSpendingChart();

 renderRecentTransactions('recent-transactions', null, 5);
 function updateSummary() {
     const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

     const totalIncome = transactions
         .filter(t => t.type === 'income')
         .reduce((sum, t) => sum + t.amount, 0);

     const totalExpense = transactions
         .filter(t => t.type === 'expense')
         .reduce((sum, t) => sum + t.amount, 0);

     const balance = totalIncome - totalExpense;

     document.getElementById('total-balance').textContent = `${balance.toFixed(2)} $`;
     document.getElementById('total-income').textContent = `${totalIncome.toFixed(2)} $`;
     document.getElementById('total-expense').textContent = `${totalExpense.toFixed(2)} $`;
 }

 function updateCategoryBreakdown() {
     const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

     const categoryAmounts = document.querySelectorAll('.cat-amount');

     categoryAmounts.forEach(el => {
         const category = el.dataset.category;

         const total = transactions
             .filter(t => t.type === 'expense' && t.category === category)
             .reduce((sum, t) => sum + t.amount, 0);

         el.textContent = `${total.toFixed(2)} $`;
     });
 }

 updateSummary();
 updateCategoryBreakdown();
