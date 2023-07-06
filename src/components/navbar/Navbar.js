import React, { Component } from "react";
import { NavbarToggler, Collapse } from "reactstrap"

class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen 
        })
    }
   render(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <NavbarToggler onClick={this.navToggle} />
        <a class="navbar-brand" href="#">Navbar</a>

          <Collapse isOpen={this.state.isNavOpen} navbar>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Sign up</a>
              </li>
            </ul>
          </Collapse>
          </div>
        {/* </div> */}
      </nav>
    )
   }
}
export default Navigation