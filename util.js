function renderRecentTransactions(containerId, filterType = null, limit = 5) {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    let filtered = transactions;
    if (filterType) {
        filtered = filtered.filter(t => t.type === filterType);
    }

   filtered.sort((a, b) => {
    const dateDifference = new Date(b.date) - new Date(a.date);

    if (dateDifference !== 0) {
        return dateDifference;
    }

    return b.id - a.id;
});
    const recent = filtered.slice(0, limit);

    const container = document.getElementById(containerId);
    container.innerHTML = '';

    if (recent.length === 0) {
        container.innerHTML = '<p>No transactions found.</p>';
        return;
    }

    recent.forEach(t => {
        const item = document.createElement('div');
        item.classList.add('transaction-item');
        item.innerHTML = `
            <span class="t-name">${t.name}</span>
            <span class="t-category">${t.category}</span>
            <span class="t-date">${t.date}</span>
            <span class="t-amount ${t.type}">${t.type === 'expense' ? '-' : '+'}${t.amount.toFixed(2)} $</span>
        `;
        container.appendChild(item);
    });
}
