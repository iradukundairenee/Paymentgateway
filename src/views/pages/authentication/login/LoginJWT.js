import React from "react"
// import { Link } from "react-router-dom"
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check } from "react-feather"
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import { toast } from 'react-toastify';

class LoginJWT extends React.Component {
  state = {
    email: "",
    password: "",
    remember: false
  }

  handleLogin = e => {
    e.preventDefault()
    if(!this.state){
      toast("invalid user");
    }
   
     return this.props.loginWithJWT(this.state)
    
    
  }
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form action="/Dashboard" onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>Email</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
              />
            </FormGroup>
            {/* <div className="d-flex justify-content-between" style={{marginLeft:'-10%'}}> */}
            <div style={{marginLeft:'10%'}}>
              {/* <Button
                color="primary"
                outline
              >
                <Link to="/Register">
                Register
                </Link>
              </Button> */}
              &nbsp;
              <Button color="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </CardBody>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.login
  }
}
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT)
