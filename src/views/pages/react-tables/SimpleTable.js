import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import ReactTable from "react-table"

class SimpleTable extends React.Component {

 
  
  render() {
    const data=this.props.transactions.values
    console.log(data,"byakunze")
    return (
      <Card>
        <CardHeader>
          <CardTitle>List of Transaction</CardTitle>
        </CardHeader>
        <CardBody>
          <ReactTable
            data={data}
            columns={[
              {
                columns: [
                  {
                    Header: "Name",
                    accessor: "Name"
                  },
                  {
                  Header: "Service",
                  accessor: "service"
                },
                {
                  Header: "Amount",
                  accessor: "Amount"
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
