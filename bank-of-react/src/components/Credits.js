/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  const { credits, currentBalance } = props;

  const addCredit = (e) =>
  {
    e.preventDefault();
    const description = e.target.elements.description.value;
    const amount = Math.round((parseFloat(e.target.elements.amount.value) + Number.EPSILON) * 100) / 100;

    const newCredit = {
      id: Math.random(),
      description: description,
      amount: amount,
      date: new Date().toISOString(),
    };

    //updatedebitlist
    //updateaccountbalance

    e.target.reset()
  }
  return (
    <div>
      <h1>Credits</h1>
      
      

      <form onSubmit={addCredit}>
        <input type="text" name="description" />
        <input type="number" name="amount" step = "any"/>
        <button type="submit">Add Credit</button>
      </form>
      <br/>
        <AccountBalance accountBalance={currentBalance}/>
      <br/>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;