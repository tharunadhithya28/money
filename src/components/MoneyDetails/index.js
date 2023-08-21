import './index.css'

const MoneyDetails = props => {
  const {balance, expense, income} = props
  return (
    <div>
      <div className="money-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <h1> Your Balance </h1>
          <p> Rs {balance} </p>
        </div>
      </div>
      <div className="money-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <h1> Your Income </h1>
          <p> Rs {income} </p>
        </div>
      </div>
      <div className="money-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <h1> Your Expenses </h1>
          <p> Rs {expense} </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
