import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
    const PaddingSpace={
        paddingLeft:"20px"
    }
        return(
            <div className="foot-content">
                <div className="container">
                    <div className="row align-self-center">
                        <div className="col-10 col-sm-1 offset-2">
                            <h3 style={{paddingTop:10}}><b>Links</b></h3>
                            <ul  className="list-unstyled">
                                <li><Link to="/home" ><strong>Home</strong></Link></li>
                                <li><Link to="/Education" ><strong>Education</strong></Link></li>
                                <li><Link to="/Skills" ><strong>Skills</strong></Link></li>
                                <li><Link to="/Projects" ><strong>Projects</strong></Link></li>
                                <li><Link to="/Feedback" ><strong>Feedback</strong></Link></li>
                            </ul>                      
                        </div>
                        <div className="col-12 col-sm-9 align-self-center">
                            <div className="text-center">
                                <h3>Sivaraman</h3>
                                <a className="" href="https://www.linkedin.com/in/sivaraman3/"><span  style={PaddingSpace} className="fab fa-linkedin fa-lg">{" "}<strong>Linkedin</strong></span></a>
                                <a className="" href="https://github.com/sivaraman-s"><span style={PaddingSpace} className="fab fa-github fa-lg">{" "}<strong>Github</strong></span></a>
                                <a className="" href="mailto:sivaramanselvam27@gmail.com"><span style={PaddingSpace} className="fa fa-envelope fa-lg">{" "}<strong>Mail</strong></span></a>
                            </div>
                        </div> 

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <h5 style={{padding:20}}><span className="far fa-copyright fa-sm"></span> Made with <span className="fa fa-heart fa-xs"></span>{" "}by Sivaraman</h5>
                        </div>

                    </div>
                </div>
            </div>
        )
    
}

export default Footer