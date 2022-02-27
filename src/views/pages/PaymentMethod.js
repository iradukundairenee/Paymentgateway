import React from "react"
import '../../../src/style.css'
import DataTables from './payments/DataTables'
import {Link} from 'react-router-dom'

class PaymentMethod extends React.Component{
  render(){
    return <>
    <Link to="/Settings">createApikey</Link>
   <DataTables />

  </>
  }
}

export default PaymentMethod