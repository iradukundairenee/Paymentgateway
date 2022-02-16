import React from "react"
import '../../../src/style.css'

class Payment extends React.Component{
  render(){
    return  <>
    <center>
  <h3>Payments</h3>
   <table id="rwd-table" style={{height:"200px"}} className="table" border="3">
  <thead>
    <tr>
      <th><input type="checkbox" /></th>
      <th>Service</th>
      <th>Amount</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th><input type="checkbox" /></th>
      <td>Data Col 1a</td>
      <td>2000rwf</td>
      <td>Paid</td>
    </tr>
    <tr>
    <th><input type="checkbox" /></th>
      <td>Data Col 1b</td>
      <td>3000rwf</td>
      <td>Due</td>
    </tr>
    <tr>
    <th><input type="checkbox" /></th>
      <td>Data Col 1c</td>
      <td>4000rwf</td>
      <td>canceled</td>
    </tr>
  </tbody>
</table>
   </center>
    </>
  }
}

export default Payment