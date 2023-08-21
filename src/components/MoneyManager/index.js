import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    balance: '',
    income: '',
    expense: '',
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  listenTitle = event => {
    const {title} = this.state
    this.setState({title: event.target.value})
  }

  listenAmount = event => {
    const {amount} = this.state
    this.setState({amount: event.target.value})
  }

  listenType = event => {
    const {type} = this.state
    this.setState({type: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type, income, expense, balance} = this.state
    if (type === transactionTypeOptions[0].optionId) {
      this.setState(prevState => ({
        income: parseInt(prevState.income) + parseInt(amount),
        balance: parseInt(prevState.balance) + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        expense: parseInt(prevState.expense) + parseInt(amount),
        balance: parseInt(prevState.balance) - parseInt(amount),
      }))
    }
  }

  render() {
    const {balance, income, expense} = this.state
    return (
      <>
        <div className="top-container">
          <h1> Hi,Richard </h1>
          <p>
            {' '}
            Welcome back to your <span> Money Manager </span>
          </p>
        </div>
        <ul>
          <MoneyDetails income={income} balance={balance} expense={expense} />
        </ul>
        <div>
          <div>
            <h1> Add Transaction </h1>
            <form onSubmit={this.addTransaction}>
              <label htmlFor="title"> Title </label>
              <input
                placeholder="TITLE"
                id="title"
                onChange={this.listenTitle}
              />
              <label htmlFor="amount"> Amount </label>
              <input
                placeholder="AMOUNT"
                id="amount"
                onChange={this.listenAmount}
              />
              <label htmlFor="type"> Type </label>
              <select id="type" onChange={this.listenType}>
                {transactionTypeOptions.map(eachItem => (
                  <option> {eachItem.displayText} </option>
                ))}
              </select>
              <button type="submit"> Add </button>
            </form>
          </div>
          <div className="history-container">
            <h1> History </h1>
            <div className="row-wise-title">
              <h1> Title </h1>
              <h1> Amount </h1>
              <h1> Type </h1>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default MoneyManager
