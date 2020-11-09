import React from 'react'
import {Table} from 'reactstrap'

const Education = () => {
        return(
            <>
            <div className="container">
                <h1 style={{padding:"10px 0px"}} className="text-center"><strong>Education Details</strong></h1>
                <Table responsive>
                    <thead>
                        <tr>
                            <th className="text-center">Institute Name</th>
                            <th className="text-center">Board</th>
                            <th className="text-center">Percentage</th>
                            <th className="text-center">Year of passing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kumaraguru College of Technology</td>
                            <td>Anna University</td>
                            <td>79.8% (UPTO 5<sup>th</sup> Sem)</td>
                            <td>2021</td>
                        </tr>
                        <tr>
                            <td>Sri Vidya Mandir Matric Higher Secondary School</td>
                            <td>State Board</td>
                            <td>97%</td>
                            <td>2017</td>
                        </tr>
                        <tr>
                            <td>Golden Rays Matric School</td>
                            <td>State Board</td>
                            <td>98.2%</td>
                            <td>2015</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div style={{paddingBottom:"30px"}} className="container">
                <div className="row">
                <div className="col-12 col-8">
                    <h1 style={{padding:"10px 0px"}} className="text-center"><strong>Online Courses</strong></h1>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th className="text-center">Course Name</th>
                                    <th className="text-center">Offered By</th>
                                    <th className="text-center">Organization</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Blockchain Specialization</td>
                                    <td>University at Buffalo</td>
                                    <td>Coursera</td>
                                </tr>
                                <tr>
                                    <td>Front-End Web UI Frameworks and Tools:Bootstrap-4,<br/>
                                        Front-End Web Development with React
                                    </td>
                                    <td>The Hong Kong University of Science and Technology</td>
                                    <td>Coursera</td>
                                </tr>
                                <tr>
                                    <td>Programming for Everybody (Getting Started with Python)</td>
                                    <td>University of Michigan</td>
                                    <td>Coursera</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        
        </>
        )
    
}

export default Education