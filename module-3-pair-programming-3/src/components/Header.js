import React, {Component} from 'react';

class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){ 
        return ( 
            <div id="header-grid">
                <header>
                    <img alt="TE Pops!" src="./images/te-pops.png" />
                    <h1>Tech Elevator Popsicles</h1>
                </header>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="#">Store</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;