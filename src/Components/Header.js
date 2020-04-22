import React from 'react';
import Nav from './Nav';
import { Slider } from 'react-burgers';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navActive: false
        }

        this.navItems = [{
            label: 'Home',
            href: '#' 
          }, {
            label: 'Services',
            href: '#'
          }, {
            label: 'About',
            href: '#'
          }, {
            label: 'Contact',
            href: '#'
        }];
    }

    render() {
        return (
            <>
                <Nav items={this.navItems} active={this.state.navActive} />

                <div className='fpsHeader'>
                    <Slider
                    className="float-right"
                    color="#fff"
                    active={this.state.navActive}
                    onClick={() => {this.setState({navActive: !this.state.navActive})}}
                    />
                </div>
            </>
        );
    }
}

export default Header