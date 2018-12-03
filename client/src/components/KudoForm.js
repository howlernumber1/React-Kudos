import React from 'react';
import {Row, Col, Form, FormGroup, Input} from 'reactstrap';

const KudoForm = (props) => (<div>
  <Form>
    <Row form>
      <Col md={6}>
        <FormGroup>
          {/* Sender Dropdown Menu */}
          <Input className="btn btn-secondary" type="select" name="sender" onChange={props.formChange}>
            <option selected="selected" disabled="disabled" value=''>Sender</option>
            {props.users.map((user, i) => <option value={user._id} key={user._id}>{user.name}</option>)}
          </Input>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Input className="btn btn-secondary" type="select" name="receiver" onChange={props.formChange}>
            <option selected="selected" disabled="disabled" value=''>Receiver</option>
            {props.users.map((user, i) => <option value={user._id} key={i}>{user.name}</option>)}
          </Input>
        </FormGroup>
      </Col>
      <Col md={12}>
        <FormGroup>
          {/* Title Input Field */}
          <Input className="messageField" type="text" name="title" placeholder="Enter a title.." onChange={props.formChange}/>
          <br/>
          {/* Second Input Field */}
          <Input className="messageField" type="textarea" name="body" placeholder="Enter a message.." onChange={props.formChange}/>
        </FormGroup>
      </Col>
    </Row>
  </Form>
</div>);

export default KudoForm;

// import React from 'react';
// import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
//
// const KudoForm = (props) => (
//   <div>
//     <Form>
//       <FormGroup>
//         {/* Sender Dropdown Menu */}
//         <Input className="btn btn-secondary" type="select" name="sender" onChange={props.formChange}>
//           <option selected disabled value=''>Sender</option>
//           {props.users.map((user, i) => <option value={user._id} key={user._id} >{user.name}</option>)}
//         </Input>
//
//         {/* Title Input Field */}
//         <Input type="text" name="title" placeholder="Enter a title.." onChange={props.formChange}/>
//
//         {/* Second Input Field */}
//         <Input type="textarea" name="body" placeholder="Enter a message.." onChange={props.formChange}/>
//
//         <Input className="btn btn-secondary" type="select" name="receiver" onChange={props.formChange}>
//           <option selected disabled value=''>Receiver</option>
//           {props.users.map((user, i) => <option value={user._id} key={i} >{user.name}</option>)}
//         </Input>
//       </FormGroup>
//     </Form>
//   </div>
// );
//
// export default KudoForm;
