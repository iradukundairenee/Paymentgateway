import React from "react"
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap"
import { Mail, Lock, Check} from "react-feather"
import { history } from "../../../../history"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import googleSvg from "../../../../assets/img/svg/google.svg"

import loginImg from "../../../../assets/img/pages/login.png"
import "../../../../assets/scss/pages/authentication.scss"


class Register extends React.Component {
  state = {
    activeTab: "1",
    firstname:"",
    lastname:"",
    email : "",
    password: ""
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  render() {
    return (
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                <img src={loginImg} alt="loginImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2">
                      <CardBody>
                        <h4>Register</h4>
                        <Form onSubmit={e => e.preventDefault()}>
                        <FormGroup className="form-label-group position-relative has-icon-left">
                            <Input
                              type="firstname"
                              required=""
                              placeholder="firstname"
                              value={this.state.firstname}
                              onChange={e => this.setState({ firstname: e.target.value })}
                            />
                            <div className="form-control-position">
                              <Mail size={15} />
                            </div>
                            <Label>firstname</Label>
                          </FormGroup>
                          <FormGroup className="form-label-group position-relative has-icon-left">
                            <Input
                              type="lastname"
                              required=""
                              placeholder="lastname"
                              value={this.state.lastname}
                              onChange={e => this.setState({ firstname: e.target.value })}
                            />
                            <div className="form-control-position">
                              <Mail size={15} />
                            </div>
                            <Label>lastname</Label>
                          </FormGroup>
                          <FormGroup className="form-label-group position-relative has-icon-left">
                            <Input
                              type="email"
                              required=""
                              placeholder="Email"
                              value={this.state.email}
                              onChange={e => this.setState({ email: e.target.value })}
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
                              required=""
                              value={this.state.password}
                              onChange={e => this.setState({ password: e.target.value })}
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
                            />
                            <div className="float-right">
                              Forgot Password?
                            </div>
                          </FormGroup>
                          <div className="d-flex justify-content-between">
                            <Button.Ripple color="primary" outline>
                             Login                         
                            </Button.Ripple>
                            <Button.Ripple color="primary" type="submit" onClick={() => history.push("/admin")}>
                                Register
                            </Button.Ripple>
                          </div>
                        </Form>
                      </CardBody>
                      <div className="auth-footer">
                        <div className="divider">
                          <div className="divider-text">OR</div>
                        </div>
                        <div className="footer-btn">
                          <Button.Ripple className="btn-google" color="">
                            <img src={googleSvg} alt="google" height="15" width="15" />
                          </Button.Ripple>
                        </div>
                      </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default Register