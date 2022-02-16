import React from "react"
import '../../../src/style.css'

class PaymentMethod extends React.Component{
  render(){
    return <>
      <center>
  <h3>Payments Method</h3>
   <table id="rwd-table" style={{height:"200px"}} className="table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Total Amount</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MTN</td>
      <td>2000rwf</td>
      <td><div style={{backgroundColor:'blue',color:'white',borderRadius:'5px' ,width:'50%',cursor:"pointer"}}>manage</div></td>
    </tr>
    <tr>
      <td>Air tel</td>
      <td>3000rwf</td>
      <td><div style={{backgroundColor:'blue',color:'white',borderRadius:'5px' ,width:'50%',cursor:"pointer"}}>manage</div></td>
    </tr>
    <tr>
      <td>bank of kigali</td>
      <td>4000rwf</td>
      <td><div style={{backgroundColor:'blue',color:'white',borderRadius:'5px' ,width:'50%',cursor:"pointer"}}>manage</div></td>
    </tr>
  </tbody>
</table>
   </center>
   
   
  </>
  }
}

export default PaymentMethod