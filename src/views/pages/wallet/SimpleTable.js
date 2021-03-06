import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import ReactTable from "react-table"
import { makeData } from "./TableData"

class SimpleTable extends React.Component {
  state = {
    data: makeData()
  }
  render() {
    const { data } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
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
                    Header: "Date",
                    accessor: "date"
                  },
                ]
              },
              {
                columns: [
                  {
                    Header: "Status",
                    accessor: "status"
                  }
                ]
              }
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
