import React from "react"
import { Row, Col } from "reactstrap"
// import SimpleTable from "./SimpleTable"
import SimpleTable from './SimpleTable'
import "react-table/react-table.css"
import "../../../assets/scss/plugins/extensions/react-tables.scss"

class ReactTables extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <SimpleTable />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ReactTables
