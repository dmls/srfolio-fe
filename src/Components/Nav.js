import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    getItemElements() {
        return (
            <>
                {this.props.items.map(function(item, index) {
                    return (
                        <a href={item.url || '/'} className="fpsNavItem" key={index}>
                            <div className="fpsNavItem-textContainer center-vertical">
                                <div className="fpsNavItem-text center-vertical">{item.label}</div>
                            </div>
                        </a> 
                    )
                })}
            </>
        )
    }

    render() {
        let elements = this.getItemElements();
        return (
            <>
                {/* desktop */}
                <div className={'fpsNav fpsNav-desktop' + (this.props.active ? ' active' : '')}>
                    {elements}
                </div>

                {/* mobile */}
                <div className={'fpsNav fpsNav-mobile' + (this.props.active ? ' active' : '')}>
                    {elements}
                </div>
            </>
        );
    }
}

export default Nav