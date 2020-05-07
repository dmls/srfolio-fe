import React from 'react';
import Header from './Header';

import General_Banner from './General/Banner';
import General_Cardgallery from './General/Cardgallery';
import General_Textarea from './General/Textarea';
import General_Widecard from './General/Widecard';

const componentsByName = {
    'General_Banner': General_Banner,
    'General_Cardgallery': General_Cardgallery,
    'General_Textarea': General_Textarea,
    'General_Widecard': General_Widecard
}

class Page extends React.Component {
    render() {
        let self = this;
        let components = self.props.data.Components !== undefined ? self.props.data.Components : [];

        return (
            <>
                <Header />

                <>
                    {components.map(function(component, index) {
                        // Convert path from CMS to class name, ex: foo.bar => Foo_Bar
                        var className = component.__component.replace(/\./g, ' ');
                        className = className.toLowerCase()
                            .split(' ')
                            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                            .join('_');

                        let ReactComponent = componentsByName[className];

                        return (
                            <ReactComponent data={component} key={index} />
                        )
                    })}
                </>
            </>
        )
    }
}

export default Page