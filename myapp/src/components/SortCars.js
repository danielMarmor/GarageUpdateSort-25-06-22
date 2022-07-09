import React, { Component } from "react";


class SortCars extends Component {
    render(){
        return (
            <div>
            <h2>Sort cars</h2>
            <p>
              Sort By:
              <select
                name="sort"           
                onChange={(e)=>{this.props.sortCars(e.target.value)}}
                value={this.props.sortBy}
                >
                <option value="brand">brand</option>
                <option value="model">model</option>
                <option value="year">year</option>
                <option value="color">color</option>
              </select>
            </p>
            </div>
        )
    }
}

export default SortCars;