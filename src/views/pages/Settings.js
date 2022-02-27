import React from "react"
import CreateApi from './createApi'
import '../../../src/style.css'
import {Link} from 'react-router-dom'

class Settings extends React.Component{
  render(){
    return <>
    <center>
    <CreateApi />
    <Link to="/PaymentMethod">PaymentMethod</Link>
  <h3>Your API keys</h3>
   <table id="rwd-table" style={{width:"100%",height:"200px"}} className="table" border="3">
  <thead>
    <tr>
      <th>Key</th>
      <th>Status</th>
      <th>created At</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**********************</td>
      <td>enabled</td>
      <td>31/Mars/2021</td>
    </tr>
    <tr>
    <td>**********************</td>
      <td>Disabled</td>
      <td>31/Mars/2021</td>
    </tr>
    <tr>
    <td>**********************</td>
      <td>enabled</td>
      <td>31/Mars/2021</td>
    </tr>
  </tbody>
</table>
   </center>
    </>
  }
}

export default Settings