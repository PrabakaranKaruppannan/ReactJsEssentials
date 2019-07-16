import React from "react";

class Message extends React.Component{
    render() {
        return (
            <div>
                <h1>Hello Everyone</h1>
                <h2 style={{color: this.props.color}}>{this.props.msg}</h2>
                <h3>I'll call you {this.props.min} minutes</h3>
            </div>
        )
    }
}

export default Message;