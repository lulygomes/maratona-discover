const Modal = {
  open() {
    document
      .querySelector('.modal-overlay')
      .classList.add('active')
  },
  close() {
    document
      .querySelector('.modal-overlay')
      .classList.remove('active')
  },
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '12/04/2021'
  },
  {
    id: 1,
    description: 'Website',
    amount: 50000,
    date: '12/04/2021'
  },
  {
    id: 1,
    description: 'Agua',
    amount: -5000,
    date: '12/04/2021'
  },
]

const Transaction = {
  incomes() {
    // somar as entradas
  },

  expenses() {
    // somar as saídas
  },

  total() {
    // entradas - saídas
  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr)

  },
  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? 'income' : 'expense'
    const html = `
    <td class="description">${transaction.description }</td>
    <td class='${CSSclass}'>${transaction.amount}</td>
    <td class="date">${transaction.date}</td>
    <td>
      <img src="./assets/minus.svg" alt="Remover transação">
    </td>
    `
    return html;

  }
}

transactions.forEach(transaction => DOM.addTransaction(transaction))