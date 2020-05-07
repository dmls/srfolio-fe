import React from 'react';
import { Slider } from 'react-burgers';
import Nav from './Nav';
import API from '../Util/API';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navActive: false,
            navItems: []
        }
    }

    componentDidMount() {
        this.initNavItems();
    }

    initNavItems() {
        let self = this;
        let api = new API();
        let navItemsReq = api.getNavLinks();
        navItemsReq.then(function(items) {
            self.setState({navItems: items});
        });
    }

    render() {
        return (
            <>
                <Nav items={this.state.navItems} active={this.state.navActive} />

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