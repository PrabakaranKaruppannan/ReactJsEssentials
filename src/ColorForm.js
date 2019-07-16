import React from "react";

class ColorForm extends React.Component{

    state = {
        value: ''
    };

    newColor = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    submit = (e) => {
        console.log(this.state.value);
        e.preventDefault()
    };

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    Color:
                    <input type="color" onChange={this.newColor}/>
                </label>

                <button>Submit</button>
            </form>
        )
    }
}

export default ColorForm;