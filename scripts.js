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
    data: '12/04/2021'
  },
  {
    id: 1,
    description: 'Website',
    amount: 50000,
    data: '12/04/2021'
  },
  {
    id: 1,
    description: 'Agua',
    amount: -5000,
    data: '12/04/2021'
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
  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    
  },
  innerHTMLTransaction() {
    const html = `
    <tr>
      <td class="description">Programação</td>
      <td class='income'>R$ 5.000,00</td>
      <td class="date">23/01/2021</td>
      <td>
        <img src="./assets/minus.svg" alt="Romer transação">
      </td>
    </tr>
    `

  }
}