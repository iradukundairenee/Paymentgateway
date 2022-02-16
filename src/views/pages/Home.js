import React from "react"
import '../../../src/style.css'

class Home extends React.Component{
  render(){
    return <>
 <div className="container">
    <div>30 Users</div>
    <div>20 Transactions</div>
    <div>234 Balance</div>  
  </div>
   <center>
  <h3>Transaction History</h3>
   <table id="rwd-table" style={{width:'100%'}} border="3">
  <thead>
    <tr>
      <th>Service</th>
      <th>Amount</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Provisioned</td>
      <td>2000rwf</td>
      <td style={{cursor:'pointer'}}>Paid</td>
    </tr>
    <tr>
      <td>Billed</td>
      <td>3000rwf</td>
      <td style={{cursor:'pointer'}}>Due</td>
    </tr>
    <tr>
      <td>Dropped</td>
      <td>4000rwf</td>
      <td style={{cursor:'pointer'}}>canceled</td>
    </tr>
  </tbody>
</table>
   </center>
    </>
  }
}

export default Home