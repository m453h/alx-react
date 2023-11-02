import React from 'react';

const WithLogging = (WrappedComponent) => {
    class WithLoggingComponent extends React.Component {

        const
        componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

        componentDidMount() {
            console.log(`Component ${this.componentName} is mounted on componentDidMount()`);
        }

        componentWillUnmount() {
            console.log(`Component ${this.componentName} is going to unmount on componentWillUnmount()`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    WithLoggingComponent.displayName = `WithLogging(${this.componentName})`;

    return WithLoggingComponent;
};

export default WithLogging;
