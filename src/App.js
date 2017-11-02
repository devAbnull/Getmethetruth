import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Form, FormGroup, FormControl, Button, Grid, Row, Col, Well, Collapse, Image} from 'react-bootstrap';

const searchTag = function(props) {
  console.log(props);
  debugger;
}

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Get me the truth</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Form className="search-form" onSubmit={searchTag}>
        <FormGroup>
          <FormControl type="text" placeholder="Search" className="search-txt"/>
        </FormGroup>
        {' '}
        <Button className="search-btn" type="submit">Submit</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

class QuestionShow extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onYesClick() {

  }

  onNoClick() {

  }

  render(){
    const props= this.props;
    return (
      <div>
        <Well bsSize="small" onClick={() => this.setState({ open: !this.state.open })}>
        {props.title}
        </Well>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <div>
                {props.ques}
              </div>
              <div>
                <Button className="yes-btn">Yes</Button>
                <Button className="no-btn">No</Button>
              </div>
            </Well>
          </div>
          
        </Collapse>
      </div>);
  }
}

const Qlist = (props)=> {
  const questions = props.list;
  const listItems = questions.map((q)=> 
    <QuestionShow key={q.toString()} ques={q.ques} title={q.title}/>
    )
  return (
    <div>
      {listItems}
    </div>
    )
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  addNewQuestion (props){
    
    console.log(props.target.title.value);
    // debugger;
  }

  addNewRender() {
    return (
      <div>
      <Button className="add-new" onClick={() => this.setState({ open: !this.state.open })}>
          Add New
        </Button>
        <Collapse in={this.state.open}>
        <Well>
          <form onSubmit={this.addNewQuestion}>
            <FormGroup controlId="formControlsTextarea">
              <label>Title:</label>
                <FormControl id="title" type="text" placeholder="text" />
              <label>Question:</label>
               <FormControl id="question" componentClass="textarea" placeholder="textarea" />
            </FormGroup>
            <Button type="submit">
              Add
            </Button>
          </form>
        </Well>
        </Collapse>
        </div>
        );
  }

  render() {
    const l = [
    {"id": 1, "title":"How u doing??", "ques":"La lu ci .. mfkjfjsakfsasakdbsaghdashjdasnbdvasghdsabkdb adbasjhbdasdsad"}, 
    {"id": 2, "title":"How u doing 2??", "ques":"La lu ci .. mfkjfjsakfsasakdbsaghdashjdasnbdvasghdsabkdb adbasjhbdasdsad"}, 
    {"id": 3, "title":"How u doing 3??", "ques":"La lu ci .. mfkjfjsakfsasakdbsaghdashjdasnbdvasghdsabkdb adbasjhbdasdsad"}
    ];
    return (
      <div>
      {navbarInstance}
      <Grid className= "grid-css">
      <Row className="show-grid">
        <Col md={4}>
          <div className="txt-point img-bg" circle>253</div>
        </Col>
        <Col className="border-left" md={8}>
        {this.addNewRender()}
          <div className="q-list">
            <Qlist list={l} />
          </div>
        </Col>
      </Row>
    </Grid>
      </div>
    );
  }
}

export default App;
