import React from "react"
import { Row, Col } from "reactstrap"
import SimpleTable from "./SimpleTable"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import "react-table/react-table.css"
import "../../../assets/scss/plugins/extensions/react-tables.scss"

class ReactTables extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs />
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
