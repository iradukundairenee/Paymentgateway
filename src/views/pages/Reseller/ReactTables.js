import React from "react"
import { Row, Col } from "reactstrap"
import SimpleTable from "./SimpleTable"
import "react-table/react-table.css"
import "../../../assets/scss/plugins/extensions/react-tables.scss"
import {connect } from 'react-redux'
import {getAllUser} from '../../../redux/actions/auth/ResellersAction'


class ReactTables extends React.Component {
  componentDidMount(){
    this.props.dispatch(getAllUser())
;
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <SimpleTable resellers={this.props.state.auth.reseller}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
   state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactTables)
