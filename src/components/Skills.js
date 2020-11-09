import React from 'react'
import {Card,CardBody,CardImg,CardTitle,CardText,CardSubtitle,Table} from 'reactstrap'


const Skills = () => {
        return(
            <>
            <div className="container">
                <div style={{paddingBottom:"20px"}}  className="row">
                    <div className="col-12">
                    <h2 style={{padding:"10px 0px"}} className="text-center"><strong>Skills and Languages</strong></h2>
                        <Card className="">
                            <CardBody className="mx-auto">
                                <CardText><strong className="topics">Area of Interest - </strong>Web development,Data structures,OOPS,Blockchain,Machine Learning</CardText>
                                <CardText><strong className="topics">Languages known - </strong>Python,C,HTML,CSS,Javascript,Structured Query Language</CardText>
                                <CardText><strong className="topics">Software Tools - </strong>VS Code,GIT,Jupyter Notebook,Code Blocks,Pycharm,GIMP</CardText>
                                <CardText><strong className="topics">Frameworks and Packages - </strong>Reactjs,Bootstrap,Nodejs,Mysql,MongoDB</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div style={{paddingBottom:"25px"}} className="col-11 col-sm-6">
                        <Card className="">
                            <CardBody className="mx-auto" >
                                <CardTitle ><h4><strong>My Strengths</strong></h4></CardTitle>
                                <CardText >
                                    <ul className="list-unstyled">
                                        <li><span className="far fa-star"></span>{" "}Self Motivated</li>
                                        <li><span className="far fa-star"></span>{" "}Hard Working</li>
                                        <li><span className="far fa-star"></span>{" "}Strong Work Ethic</li>
                                        <li><span className="far fa-star"></span>{" "}Open Minded</li>
                                        <li><span className="far fa-star"></span>{" "}Adaptability</li>
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{paddingBottom:"25px"}} className="col-11 col-sm-6">
                        <Card className="">
                            <CardBody className="mx-auto" >
                                <CardTitle ><h4><strong>Personal Interests</strong></h4></CardTitle>
                                <CardText >
                                    <ul className="list-unstyled">  
                                        <li><span className="far fa-star"></span>{" "}Coding</li>
                                        <li><span className="far fa-star"></span>{" "}App Development</li>
                                        <li><span className="far fa-star"></span>{" "}Surfing Internet</li>
                                        <li><span className="far fa-star"></span>{" "}Tech Enthusiast</li>
                                        <li><span className="far fa-star"></span>{" "}Fitness</li>
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>
        )
    
}

export default Skills