import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import ReactTable from "react-table"
import matchSorter from "match-sorter"
import { makeData } from "./TableData"

class FilterTable extends React.Component {
  state = {
    data: makeData()
  }
  render() {
    const { data } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardBody>
          <ReactTable
            data={data}
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value
            }
            columns={[
              {
                columns: [
                  {
                    Header: "Service",
                    id: "service",
                    accessor: d => d.service,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["service"] }),
                    filterAll: true
                  }
                ]
              },
              {
                columns: [
                  {
                    Header: "Amount",
                    accessor: "amount"
                  },
                  {
                    accessor: "amount",
                    id: "over",
                    Cell: ({ value }) => (value >= 21 ? "Yes" : "No"),
                    filterMethod: (filter, row) => {
                      if (filter.value === "all") {
                        return true
                      }
                      if (filter.value === "true") {
                        return row[filter.id] >= 21
                      }
                      return row[filter.id] < 21
                    },
                    Filter: ({ filter, onChange }) => (
                      <select
                        onChange={event => onChange(event.target.value)}
                        style={{ width: "100%" }}
                        value={filter ? filter.value : "all"}
                      >
                        <option value="all">Show All</option>
                        <option value="true">Paid</option>
                        <option value="false">not Paid</option>
                      </select>
                    )
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
export default FilterTable
