import React from 'react'
import {Card, CardBody, CardText, CardTitle, Table} from 'reactstrap'

const Projects = () => {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 style={{padding:"10px 0px"}} className="text-center"><strong>My Projects</strong></h2>
                        <Card style={{backgroundColor:"orange"}}>
                            <CardBody>
                                <CardTitle><h4><strong>Restaurant App</strong></h4></CardTitle>
                                <CardText><span className="far fa-star"></span> A web app where users can View information
                                          about the restaurant,find available dishes and discounts,reserve
                                          tables and submit feedback to the restaurant.Various bootstrap classes such as 
                                          grid system,Cards,Media objects,Accordion,Modals,Carousel were used.
                                          <br/>
                                <b>Technologies and Languages used</b>: HTML,CSS,Javscript,Bootstrap.
                                </CardText>
                                <CardTitle><h4><strong>Playstore Analysis</strong></h4></CardTitle>
                                <CardText><span className="far fa-star"></span> By using playstore dataset which consisted of around 10k rows and 13 attributes , after cleaning the dataset 
                                          ,analysed the distribution of
                                          apps in various categories.Also average rating of each category, total price sum  
                                          of each category and reviews of each category were analyzed.
                                          <br/>
                                <b>Technologies and Languages used</b>: Python,pandas,numpy,matplotlib,seaborn.
                                </CardText>
                                <CardTitle><h4><strong>Reactjs apps</strong></h4></CardTitle>
                                <CardText><span className="far fa-star"></span> Weather Finder - User can find weather information by entering
                                            City and Country name.<br/>
                                          <span className="far fa-star"></span> BMI calculator – User can calculate his/her BMI value and their category<br/>
                                <b>Technologies and Languages used</b>: HTML,CSS,JS,Reactjs,Reactstrap
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <h2 style={{paddingTop:"30px",paddingBottom:"5px"}} className="text-center"><strong>Workshops and Hackathon</strong></h2>
                        <Card style={{backgroundColor:"orange"}}>
                            <CardBody>
                                <CardText>
                                <span className="far fa-star"></span> 
                                        Attended a workshop on 
                                        <strong> “Demystifying Information Security” </strong>
                                        organized by the Department of Computer Science and
                                        Engineering,Kumaraguru College of Technology
                                </CardText>
                                <CardText>
                                <span className="far fa-star"></span>
                                 Attended a hackathon 
                                 <strong> “Climathon” </strong> 
                                 conducted by Kumaraguru College of Technology
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    
                </div>
                <div className="row">
                        <h2 style={{padding:"20px"}}>{}</h2>
                </div>
            </div>
        )
    
}


export default Projects