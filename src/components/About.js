import React from 'react'
import {Card,CardImg,CardTitle,CardText,CardBody,Col} from 'reactstrap'
import 'typeface-roboto'


const About = () => {
        return(
        <div style={{padding:"30px"}} className="container">
            <div className="row d-flex justify-content-center align-items-center-center">
                <div style={{paddingTop:"20px"}} className="col-xs-8 ml-4  col-sm-9 ml-sm-3 col-md-4 ml-md-0 col-xl-4 ml-xl-1">
                    <img  className="img-fluid rounded" height="100%" src="https://github.com/sivaraman3/portfolio/blob/gh-pages/images/siva1.jpg?raw=true"  alt="SIVA" />      
                </div>
                <div style={{paddingTop:"20px"}} className="col-xs-12 col-sm-12 col-md-8  col-xl-5 mr-xl-2">
                    <Card>
                        <CardBody style={{padding:"40px 40px 60px 40px"}}>
                            <CardTitle className="text-center"><h2><strong>Hello! I'm Sivaraman</strong></h2></CardTitle>
                            <CardText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="far fa-star"></span> I am a enthusiastic and self-motivated person looking for a career opportunity to expand my
                            learnings, knowledge and skills while making a significant contribution to the success of the company.</CardText>
                            <CardText >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="far fa-star"></span> I am a final year student pursuing my under graduation in Computer Science and Engineering from Kumaraguru College of Technology.</CardText>
                        </CardBody>
                    </Card>
                </div>  
            </div>
        </div>
            
        )
    
}

export default About
