import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar,NavItem,NavbarBrand,NavbarToggler,Collapse,Nav}  from 'reactstrap'

class Header extends Component{
    constructor(props){
        super(props)
            this.state={
                isOpen:false
            
        }
        this.toggler=this.toggler.bind(this)
    }
    toggler(){
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
    render(){
        const PaddingSpace={
            paddingLeft:"20px"
        }
        return(
        <>
            
            <Navbar light expand="md" className="nav-content">
                    <NavbarToggler onClick={this.toggler} />
                    <NavbarBrand className="mr-auto" href="https://sivaraman3.github.io/portfolio">
                        <h4><strong>&nbsp;Sivaraman</strong></h4>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" onClick={this.toggler} to="/home"><span style={PaddingSpace} className="fa fa-home fa-lg">Home</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={this.toggler} to="/Education"><span style={PaddingSpace} className="fas fa-user-graduate fa-lg">{" "}Education</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={this.toggler} to="/Skills"><span style={PaddingSpace} className="fas fa-award fa-lg">{" "}Skills</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={this.toggler} to="/Projects"><span style={PaddingSpace} className="fas fa-laptop-code fa-lg">{" "}Projects</span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={this.toggler} to="/Feedback"><span style={PaddingSpace} className="fas fa-comment-alt fa-lg">{" "}Send Feedback</span></NavLink>
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
            </Navbar>
           
                
            
            
        </>
        )
    
    }
}

export default Header