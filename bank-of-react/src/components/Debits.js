/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

const Debits = (props) => {
  const { debits, updateDebit, currentBalance, updateDebitBalance } = props;

  // Create the list of Debit items
  let debitsView = () => {
    return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    });
  }

  const addDebit = (e) => {
    e.preventDefault();
    const description = e.target.elements.description.value;
    const amount = Math.round((parseFloat(e.target.elements.amount.value) + Number.EPSILON) * 100) / 100;

    const newDebit = {
      id: Math.random(),
      description: description,
      amount: amount,
      date: new Date().toISOString(),
    };

   updateDebit(newDebit);
   updateDebitBalance(newDebit.amount)

   e.target.reset()
  };

  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>

      {debitsView()}

      <form onSubmit={addDebit}>
        <input type="text" name="description" />
        <input type="number" name="amount" step = "any"/>
        <button type="submit">Add Debit</button>
      </form>
      <br/><br/>
        <AccountBalance accountBalance={currentBalance}/>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;