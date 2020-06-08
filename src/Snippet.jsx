import React from 'react'

class Snippet extends React.Component {

    constructor(props){
        super(props)
        console.log("Constructor fired")
    }

    componentWillUnmount = () => {
        console.log("Component removed")
    }

    render() {
        return(
            <p>
                Snippet component, the title is {this.props.title}
            </p>
        )
    }


}

export default Snippet