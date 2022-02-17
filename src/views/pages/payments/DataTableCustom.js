import React from "react"
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle
} from "reactstrap"
import DataTable from "react-data-table-component"

const CustomHeader = props => {
  return (
    <div>

    </div>
  )
}

class DataTableCustom extends React.Component {
  state = {
    columns: [
      {
        name: "Method",
        selector: "name",
        sortable: true,
        minWidth: "200px",
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.name}
                className="d-block text-bold-500 text-truncate mb-0">
                {row.name}
              </span>
              <small title={row.email}>{row.email}</small>
            </div>
          </div>
        )
      },
      {
        name: "Date Created",
        selector: "date",
        sortable: true,
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{row.date}</p>
        )
      },
      {
        name: "Amount",
        selector: "revenue",
        sortable: true,
        cell: row => <p className="text-bold-500 mb-0">{row.revenue}</p>
      }
    ],
    data: [
      {
        name: "MTN",
        date: "May 13, 2018",
        revenue: "$32,000",
      },
      {
        name: "airtel",
        date: "June 5, 2019",
        revenue: "$50,000",
    
      }
    ],
    filteredData: [],
    value: ""
  }

  handleFilter = e => {
    let value = e.target.value
    let data = this.state.data
    let filteredData = this.state.filteredData
    this.setState({ value })

    if (value.length) {
      filteredData = data.filter(item => {
        let startsWithCondition =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.date.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.revenue.toLowerCase().startsWith(value.toLowerCase()) ||
          item.status.toLowerCase().startsWith(value.toLowerCase())
        let includesCondition =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.date.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.revenue.toLowerCase().includes(value.toLowerCase()) ||
          item.status.toLowerCase().includes(value.toLowerCase())

        if (startsWithCondition) {
          return startsWithCondition
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition
        } else return null
      })
      this.setState({ filteredData })
    }
  }

  render() {
    let { data, columns, value, filteredData } = this.state
    return (
      <Card>
        <CardHeader>
          <CardTitle>PaymentMethod</CardTitle>
        </CardHeader>
        <CardBody className="rdt_Wrapper">
          <DataTable
            className="dataTable-custom"
            data={value.length ? filteredData : data}
            columns={columns}
            noHeader
            pagination
            subHeader
            subHeaderComponent={
              <CustomHeader value={value} handleFilter={this.handleFilter} />
            }
          />
        </CardBody>
      </Card>
    )
  }
}

export default DataTableCustom
