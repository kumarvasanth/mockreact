import React from "react";
import { Modal,Button } from 'react-bootstrap';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css'
import { render } from "@testing-library/react";

class  MyVerticallyCenteredModal extends React.Component {
  state={
    today: new Date()
  }
  onChange = datec => this.setState({ today :datec})
  
  render(){
    const {activity_periods}=this.props.userr;
    {
      var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
       
     var date =  (month[this.state.today.getMonth() + 1]) + ' ' + this.state.today.getDate()+ ' ' + this.state.today.getFullYear();
      
    }
    return (
     
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Activity Records
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <h4>{this.props.userr.real_name}</h4>
          {
            activity_periods.map((activity)=>{
             
              if(activity.start_date ===date ){
                return (
                  <div>
                    <div>
                   <h5>Start Time:{activity.start_date} {activity.start_time},
                  End Time:{activity.end_time}</h5>
                  </div> 
                  
                  </div>
                  
                  
                )

              }
            })
          }
          <Calendar
          onChange={this.onChange}
          value={this.state.today}></Calendar>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      
     
      
    );
    
  }
    
  }export default MyVerticallyCenteredModal;
  