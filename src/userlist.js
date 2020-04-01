import React from "react";
import MyVerticallyCenteredModal from "./Modal";
import { Button } from 'react-bootstrap';


function  UserList(props) {
    const [modalShow, setModalShow] = React.useState(false); 
    const {user}=props;
    return (
        <div className="use"> 
          <Button variant="primary" onClick={() => setModalShow(true)}>
            {props.user.real_name}
          </Button>
    
          <MyVerticallyCenteredModal
            userr={user}
            show={modalShow}
            onHide={() => setModalShow(false)}    
          />
        </div>
      );
}export default UserList