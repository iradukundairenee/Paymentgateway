import React from "react"
import { Row, Col } from "reactstrap"
import FilteringTable from "./FilteringTable"
import "react-table/react-table.css"
import "../../../assets/scss/plugins/extensions/react-tables.scss"

class ReactTables extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          {/* <Col sm="12">
            <SimpleTable />
          </Col> */}
          <Col sm="12">
            <FilteringTable />
          </Col>
          {/* <Col sm="12">
            <EditableTable />
          </Col>
          <Col sm="12">
            <NestedTable />
          </Col>
          <Col sm="12">
            <ControlledTable />
          </Col> */}
        </Row>
      </React.Fragment>
    )
  }
}

export default ReactTables
