import React, { Component } from 'react';

class CashRegisterKeyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [0],
            showValue: 0
        }
    }
    erase() {

    }
    addValue(num) {
        switch (num) {
            case "C":
                this.setState({ value: [0] });
                break;
            default:
                if (this.state.value === 0) {
                    this.setState({ value: num });

                } else {
                    var arrayvar = this.state.value;
                    arrayvar.push(num);
                    this.setState({
                        value: arrayvar
                    });
                }
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">{this.state.value.join('')}</div>
                <button className="col-md-4" onClick={() => this.addValue(7)}>
                    7
                </button>
                <button className="col-md-4" onClick={() => this.addValue(8)}>
                    8
                </button>
                <button className="col-md-4" onClick={() => this.addValue(9)}>
                    9
                </button>
                <button className="col-md-4" onClick={() => this.addValue(4)}>
                    4
                </button>
                <button className="col-md-4" onClick={() => this.addValue(5)}>
                    5
                </button>
                <button className="col-md-4" onClick={() => this.addValue(6)}>
                    6
                </button>
                <button className="col-md-4" onClick={() => this.addValue(1)}>
                    1
                </button>
                <button className="col-md-4" onClick={() => this.addValue(2)}>
                    2
                </button>
                <button className="col-md-4" onClick={() => this.addValue(3)}>
                    3
                </button>
                <button className="col-md-4" onClick={() => this.addValue(".")}>
                    .
                </button>
                <button className="col-md-4" onClick={() => this.addValue(0)}>
                    0
                </button>
                <button className="col-md-4" onClick={() => this.addValue("C")}>
                    C
                </button>
            </div>
        );
    }
}

export default CashRegisterKeyboard;