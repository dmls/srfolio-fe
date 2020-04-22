import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }

        this.itemElements = this.getItemElements();
    }

    getItemElements() {
        return (
            <>
                {this.props.items.map(function(item, index) {
                    return (
                        <a href={item.href} className="fpsNavItem" key={index}>
                            <div className="fpsNavItem-textContainer center-vertical">
                                <div className="fpsNavItem-text center-vertical">{item.label}</div>
                            </div>
                        </a> 
                    )
                })}
            </>
        )
    }

    getDesktopItemElements() {
        return 
    }

    render() {
        return (
            <>
                {/* desktop */}
                <div className={'fpsNav fpsNav-desktop' + (this.props.active ? ' active' : '')}>
                    {this.itemElements}
                </div>

                {/* mobile */}
                <div className={'fpsNav fpsNav-mobile' + (this.props.active ? ' active' : '')}>
                    {this.itemElements}
                </div>
            </>
        );
    }
}

export default Nav