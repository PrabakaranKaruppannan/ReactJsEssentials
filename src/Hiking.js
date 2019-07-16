import React from "react";

class Hiking extends React.Component{
    getWastedPercentage = (totalDays, usedDays) => {
        return ((totalDays - usedDays) / totalDays) * 100
    };

    render() {
        return (
            <div>
                <h1>Hiking</h1>

                <div>
                    <p>Total Days: {this.props.data.totalNoOfDays}</p>
                </div>
                <div>
                    <p>Total Hiking Days:  {this.props.data.hikingDays}</p>
                </div>
                <div>
                    <p>Remaining Days:  {this.props.data.remainingDays}</p>
                </div>
                <div>
                    <p>Wasted Days Percentage:  {this.getWastedPercentage(this.props.data.totalNoOfDays, this.props.data.hikingDays)} %</p>
                </div>
            </div>
        )
    }
}

export default Hiking;