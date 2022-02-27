import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import ReactTable from "react-table"
import {Link} from 'react-router-dom'
// import {makeData} from './TableData'

class SimpleTable extends React.Component {

  
  // state = {
  //   myData: makeData()
  // }
  
  render() {
     

    const data=this.props.resellers.values

    return (
      <Card>
        <CardHeader>
          <CardTitle>List of Reselles</CardTitle>
          <Link to="register">Add new reseller</Link>
        </CardHeader>
        <CardBody>
          <ReactTable
            data={data}
        
            columns={[
              {
                columns: [
                  {
                    Header: "Names",
                    accessor: "names"
                  },
                  {
                  Header: "Email",
                  accessor: "email"
                },
                {
                  Header: "UserName",
                  accessor: "username"
                }
                ]
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </CardBody>
      </Card>
    )
  }
}
export default SimpleTable
