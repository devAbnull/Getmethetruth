import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Form, FormGroup, FormControl, Label, Button, Grid, Row, Col, Well, Collapse, Image, Glyphicon} from 'react-bootstrap';

const searchTag = function(props) {
  console.log(props);
  debugger;
}

const navbarInstance = (
  <Navbar >
  <Row className="nav-container">
  <Col md={2}>
    <Navbar.Header>

      <Navbar.Brand>
        <a href="#" className="gmtt">Get me the truth</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    </Col>
    <Col md={10}>
    <Navbar.Collapse>
      <Form className="search-form" onSubmit={searchTag}>
        <FormGroup>
          <FormControl type="text" className="search-txt"/>
        </FormGroup>
        {' '}
        <Button className="search-btn" type="submit"><Glyphicon  glyph="glyphicon glyphicon-search"/></Button>
      </Form>
    </Navbar.Collapse>
    </Col>
    </Row>
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
        <div className="qtitle">{props.title}</div>
        <div className="qstate">{(props.resolved)?((props.isFake)?<Label bsStyle="danger">Rumour</Label>:<Label bsStyle="success">Real</Label>):<Label bsStyle="default">Unanswered</Label>}</div>
        <Collapse className="question-txt" in={this.state.open}>
          <div className="qcontent">
            
              <div>
                {props.ques}
              </div>
              {(!props.resolved)?(
                
                <div className="ans-block">
                  Is it true??<br />
                <Button bsStyle="success" className="ans-btn">Yes</Button>
                    <Button bsStyle="danger" className="ans-btn">No</Button>
                
                </div>
                ):(
              <div></div>)
              }
          </div>
          
        </Collapse>
        </Well>
      </div>);
  }
}

const Qlist = (props)=> {
  const questions = props.list;
  const listItems = questions.map((q)=> 
    <QuestionShow key={q.toString()} ques={q.ques} title={q.title} resolved={q.resolved} isFake={q.isFake}/>
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
          <Glyphicon  glyph="glyphicon glyphicon-plus"/>
        </Button>
        <Collapse in={this.state.open}>
        <Well>
        
          <form onSubmit={this.addNewQuestion}>
          
            <FormGroup controlId="formControlsTextarea">
            <Row className="margin-bottom">
            <Col className="align-right" md={2}>
              <label>Title:</label>
            </Col>
            <Col md={7}>
                <FormControl id="title" type="text" placeholder="text" />
                </Col>
                </Row>
                <Row>
              <Col className="align-right" md={2}>
              <label>Question:</label>
              </Col>
              <Col md={7}>
               <FormControl id="question" componentClass="textarea" placeholder="textarea" />
               </Col>
               </Row>
            </FormGroup>
            <Row>
            <Col md={2}></Col>
            <Col md={7}>
            <Button className="add-submit" type="submit">
              Add
            </Button>
            </Col>
            </Row>
          </form>
          
        </Well>
        </Collapse>
        </div>
        );
  }

  render() {
    const l = [
    {"id": 1, "title":"How u doing??", "ques":"La lu ci .. mfkjfjsakfsasakdbsaghdashjdasnbdvasghdsabkdb adbasjhbdasdsad", "resolved":false}, 
    {"id": 2, "title":"How u doing 2??", "ques":"La lu ci .. mfkjfjsakfsasakdbsaghdashjdasnbdvasghdsabkdb adbasjhbdasdsad", "resolved": true, "isFake":true}, 
    {"id": 3, "title":"How u doing 3??", "ques":"La lu ci .. mfkjfjsakfsasakdbsaghdashjdasnbdvasghdsabkdb adbasjhbdasdsad", "resolved": true, "isFake":false}
    ];
    return (
      <div>
      {navbarInstance}
      
      <Row >
        <Col className="col3" md={2}>
          <div className="txt-point img-bg" circle>253 pts</div>
          <div className="links-block">
          <div className="usrname">Abhijit Patel<br /></div>
            <div className="links">
            <Button className="sidebtn">My marked questions</Button>
            <Button className="sidebtn">Questions asked by me</Button>
            </div>
          </div>
        </Col>
        <Col className="col9" md={10}>
        {this.addNewRender()}
          <div className="q-list">
            <Qlist list={l} />
          </div>
        </Col>
      </Row>
    
      </div>
    );
  }
}

export default App;
