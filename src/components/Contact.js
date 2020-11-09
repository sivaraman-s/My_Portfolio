import React,{Component} from 'react'
import {FormGroup,Form,Input,Label,Col, Button}  from 'reactstrap'


 class Contact extends Component{
     constructor(props){
         super(props)
         this.state={
             firstname:"",
             lastname:"",
             phone:"",
             email:"",
             subject:"",
             message:""

         }
         this.handleChange=this.handleChange.bind(this)
         this.handleSubmit=this.handleSubmit.bind(this)
         
     }
     handleChange(event){
         let name=event.target.name
         let value=event.target.value
         this.setState({
            [name]:value
         })
     }
     handleSubmit(event){
         console.log(JSON.stringify(this.state))
         alert("Thanks for your feedback \n"+JSON.stringify(this.state))
         event.preventDefault()
         this.setState({
            firstname:"",
            lastname:"",
            phone:"",
            email:"",
            subject:"",
            message:""
         })
     }
     render(){
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7">
                        <h2 style={{padding:10,textAlign:"center"}}><strong>Send Feedback</strong></h2>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label md={2} for="firstname">First Name</Label>
                                <Col md={10}>
                                    <Input type="text" value={this.state.firstname} onChange={this.handleChange} name="firstname" id="firstname" placeholder="first name" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="lastname">Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" value={this.state.lastname} onChange={this.handleChange} name="lastname" id="lastname" placeholder="last name" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="phone">Phone No</Label>
                                <Col md={10}>
                                    <Input type="number" value={this.state.phone} onChange={this.handleChange} name="phone" id="phone" placeholder="Telephone number" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="email">Email </Label>
                                <Col md={10} >
                                    <Input type="email" value={this.state.email} onChange={this.handleChange} name="email" id="email" placeholder="email" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="subject">Subject</Label>
                                <Col md={10}>
                                    <Input type="text" value={this.state.subject} onChange={this.handleChange} name="subject" id="subject" placeholder="subject" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} for="message">Feedback</Label>
                                <Col md={10} >
                                    <Input type="textarea" value={this.state.message} rows="6" onChange={this.handleChange} name="message" id="message" placeholder="" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10,offset:2}}>
                                    <Button color="success" type="submit" >Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </div>
            </div>
        )
     }
        
    
}

export default Contact