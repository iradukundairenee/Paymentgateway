import React from "react"
import CreateApi from './createApi'
import '../../../src/style.css'

class Settings extends React.Component{
  render(){
    return <>
    <center>
    <CreateApi />
  <h3>Your API keys</h3>
   <table id="rwd-table" style={{width:"100%",height:"200px"}} className="table" border="3">
  <thead>
    <tr>
      <th>Key</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
      <td><input type="radio"/></td>
      <td>Paid</td>
    </tr>
    <tr>
      <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
      <td><input type="radio"/></td>
      <td>Due</td>
    </tr>
    <tr>
      <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
      <td><input type="radio"/></td>
      <td>canceled</td>
    </tr>
  </tbody>
</table>
   </center>
    </>
  }
}

export default Settings