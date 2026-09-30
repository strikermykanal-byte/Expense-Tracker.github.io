const sidebar = document.getElementById('side-bar');


sidebar.innerHTML = `
<aside class = "sidebar">
<div class = "profile">
 <i class="fa-solid fa-user"></i>
<span>  Profile </span>
</div>
<nav>
            <a href = "index.html">
             <i class="fa-solid fa-house"></i>
            <span> Dashboard </span>
            </a>
            <a href="expense.html">
             <i class="fa-solid fa-wallet"></i>
            <span>Expenses</span>
            </a>
            <a href="income.html">
             <i class="fa-solid fa-money-bill"></i>
            <span>Income</span>
            </a>
            
            <a href = "transactions.html">
            <i class="fa-solid fa-receipt"></i>
            <span> Transactions</span>
            </a>
            <a href="statistics.html">
             <i class="fa-solid fa-chart-pie"></i>
            <span>Statistics</span>
            </a>

            <a href="settings.html">
            <i class="fa-solid fa-gear"></i>
            <span>Settings</span>
            </a>
</nav>
<button id="toggle-sidebar">
            <i class="fa-solid fa-chevron-left"></i>
            <span>Collapse sidebar</span>
        </button>
</aside>
`;
const sidebarElement = document.querySelector(".sidebar");
const toggleBtn = document.getElementById("toggle-sidebar");
toggleBtn.addEventListener("click", () =>{
    sidebarElement.classList.toggle('collapsed');
});