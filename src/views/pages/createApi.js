import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button
} from "reactstrap"


class createApi extends React.Component {
    state = {
        GenerateKey: "",
        passphrase: "",
        isValid: null
      }
    
      handleSubmit = e => {
        e.preventDefault()
        if (this.state.GenerateKey.length > 0) {
          this.setState({ isValid: true })
        } else if (this.state.GenerateKey.length === 0) {
          this.setState({ isValid: false })
        }
        if (this.state.passphrase.length > 0) {
          this.setState({ isValid: true })
        } else if (this.state.passphrase.length === 0) {
          this.setState({ isValid: false })
        }
      }
    
      render() {
        return (
          <Card>
              <center>
              <CardHeader>
                  <CardTitle>Create Api key</CardTitle>
            </CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <Row>
                  <Col md="12" sm="12" className="mb-2">
                    <FormGroup>
                      <Label for="GenerateKey">GenerateKey</Label>
                      <Input
                        type="text"
                        onChange={e => this.setState({ GenerateKey: e.target.value })}
                        value={this.state.firstName}
                        id="GenerateKey"
                        name="GenerateKey"
                        valid={this.state.isValid === true}
                        invalid={this.state.isValid === false}
                      />
                      {this.state.isValid ? (
                        <span className="valid-tooltip">Looks Good!</span>
                      ) : this.state.isValid === false ? (
                        <span className="invalid-tooltip" style={{marginLeft:'15px'}}>
                          Please enter Key
                        </span>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Button.Ripple color="primary" onClick={this.handleSubmit}>
                  create
                </Button.Ripple>
              </Form>
            </CardBody>
              </center>
          </Card>
        )
      }
    }
export default createApi
