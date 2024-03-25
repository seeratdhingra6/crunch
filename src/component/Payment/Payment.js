import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row,Col } from "react-bootstrap";
import "./style/payment.css";

const Payment = () => {
  return (
    <div className="payment__container">
      <div className="payment__place">
        <p className="payment__maiHeading">place your secure order</p>
        <div className="payment__method">
          <button>paypal</button>
          <button>paypal</button>
          <button>paypal</button>
          <button>paypal</button>
          <select>
            <option value="">Sample</option>
          </select>
        </div>
        {/* <div className="payment__form">
          <div className="payment__license">
            <input type="radio" />
            <span>Person</span>
            <input type="radio" />
            <span>Company</span>
          </div>
          <div className="payment__formField">
            <div className="payment__formRow">
              <div className="payment__formControl">
                <p>Full Name</p>
                <input type="text" />
              </div>
              <div className="payment__formControl">
                <p>Card Number</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div> */}

        <div className="payment__form">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>FULLNAME</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>CARD NUMBER</Form.Label>
                <Form.Control type="Number"/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email"/>
              </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>CARD EXPIRATION</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>YEAR</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>COUNTRY</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>SECURITY CODE</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
