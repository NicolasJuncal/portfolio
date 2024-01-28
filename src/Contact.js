import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './main.css';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"/email",
      data:  this.state
    }).then((response)=>{
      this.resetForm()
    })
  }
  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  render() {
    return(
           
      <div className="contact-div fade-in-left">
            <div className="wrap-contact">
              <span className="reach-me">Leave me a message.</span>
              <form className="form-div" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                  
                </div>
                <div className="form-group">
                  
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                    
                </div>
                <div className="form-group">

                  <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  value={this.state.message} onChange={this.onMessageChange.bind(this)}/>

                </div>

                <div className="btn-group">
                  <Button type="submit" variant="contained">Submit</Button>
                </div>

              </form>
        </div>
      </div>
      
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Contact;