import React from "react"
import { Row, Col } from "reactstrap"
import SimpleTable from './SimpleTable'
import "react-table/react-table.css"
import "../../../assets/scss/plugins/extensions/react-tables.scss"
import {connect } from 'react-redux'
import {getAllTransactions} from '../../../redux/actions/auth/tansactionAction'

class ReactTables extends React.Component {
  componentDidMount(){
    this.props.dispatch(getAllTransactions());
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <SimpleTable transactions={this.props.state.auth.getAllTransactions}/>
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
