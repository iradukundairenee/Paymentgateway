import React from "react"
import '../../../src/style.css'
import ReactTables from './react-tables/ReactTables'

class Home extends React.Component{
  render(){
    return <>
 <div className="container">
    <div>700 Total Balance</div>
    <div>200 Total income</div>
    <div>234 Total outcome</div>  
  </div>
  <ReactTables />
   {/* <center>
  <h3>Transaction History</h3>
   <table id="rwd-table" style={{width:'100%'}} border="3">
  <thead>
    <tr>
      <th>Date</th>
      <th>Service</th>
      <th>Amount</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jul 05, 2007</td>
      <td>Provisioned</td>
      <td>2000rwf</td>
      <td><div style={{backgroundColor:'blue',color:'white',borderRadius:'5px' ,width:'60px',cursor:"pointer"}}>Paid</div></td>
    </tr>
    <tr>
    <td>Jul 06, 2007</td>
      <td>Billed</td>
      <td>3000rwf</td>
      <td><div style={{backgroundColor:'yellow',color:'white',borderRadius:'5px' ,width:'60px',cursor:"pointer"}}>Due</div></td>
    </tr>
    <tr>
    <td>Jul 07, 2007</td>
      <td>Dropped</td>
      <td>4000rwf</td>
      <td style={{cursor:'pointer'}}><div style={{backgroundColor:'red',color:'white',borderRadius:'5px' ,width:'60px',cursor:"pointer"}}>canceled</div></td>
    </tr>
  </tbody>
</table>
   </center> */}
    </>
  }
}

export default Home