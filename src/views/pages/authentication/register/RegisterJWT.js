import React from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
// import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
// import { Check } from "react-feather"
import { connect } from "react-redux"
import { signupWithJWT } from "../../../../redux/actions/auth/registerActions"
// import { history } from "../../../../history"
// import {Link} from 'react-router-dom'

class RegisterJWT extends React.Component {
  state = {
    names:"",
    username:"",
    email: "",
    password: ""
    // confirmPass: ""
  }

  handleRegister = e => {
    e.preventDefault()
    this.props.signupWithJWT(
      this.state.names,
      this.state.username,
      this.state.email,
      this.state.password
    )
  }

  render() {
    return (
      <Form action="/Dashboard" onSubmit={this.handleRegister}>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Name"
            required
            value={this.state.names}
            onChange={e => this.setState({ names: e.target.value })}
          />
          <Label>Names</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Username"
            required
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <Label>Username</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Email</Label>
        </FormGroup>
         <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Label>Password</Label>
        </FormGroup> 
        {/* <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Confirm Password"
            required
            value={this.state.confirmPass}
            onChange={e => this.setState({ confirmPass: e.target.value })}
          />
          <Label>Confirm Password</Label>
        </FormGroup> */}
        {/* <FormGroup>
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label=" I accept the terms & conditions."
            defaultChecked={true}
          />
        </FormGroup> */}
        {/* <div className="d-flex justify-content-between" style={{marginLeft:'-10%'}}> */}
        <div>
          {/* <Button
            color="primary"
            outline>
              <Link to="/">
              Login
              </Link>
          </Button>
          &nbsp; */}
          <Button color="primary" type="submit">
            save
          </Button>
        </div>
      </Form>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.register
  }
}
export default connect(mapStateToProps, { signupWithJWT })(RegisterJWT)
