/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  const { credits, updateCredit, currentBalance } = props; //will need to add updateaccountbalance here

  let creditsView = () => {
    return credits.map((credit) => {  // Extract "id", "amount", "description" and "date" properties of each credits JSON array element
      let date = credit.date.slice(0,10);
      return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    });
  }

  const addCredit = (e) =>
  {
    //gets values from fields
    e.preventDefault();
    const description = e.target.elements.description.value;
    const amount = Math.round((parseFloat(e.target.elements.amount.value) + Number.EPSILON) * 100) / 100;

    //creates credit var 
    const newCredit = {
      id: Math.random(),
      description: description,
      amount: amount,
      date: new Date().toISOString(),
    };

    updateCredit(newCredit);
    //updateaccountbalance

    e.target.reset() //resets field
  }
  return (
    <div>
      <h1>Credits</h1>
      
      {creditsView()}

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