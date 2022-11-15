import React, {Component} from "react"
import './Calculator.css'

import Finder from "./Finder"
import Buttons  from "./Buttons"

const initialState = {
    finderValue: '0',
    clearFinder: false,
    operation: null,
    values: [0, 0],
    current: 0
}

//Comonente baseado em classe
export default class Calculator extends Component {

    state = {...initialState}

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.addDigit = this.addDigit.bind(this)
        this.setOperation = this.setOperation.bind(this)
    }
    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearFinder: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch {
                values[0] = this.state.values[0]   
            }
            
            values[1] = 0

            this.setState({
                finderValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearFinder: !equals,
                values
            })
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.finderValue.includes('.')) {
            return
        }

        const clearFinder = this.state.finderValue === '0'
            || this.state.clearFinder
        const currentValue = clearFinder ? '' : this.state.finderValue
        const finderValue = currentValue + n
        this.setState({ finderValue, clearFinder: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(finderValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    render() {
        return (
            // Para adicionar classe num código jsx usamos classeName
            <div className="calculator">
                <Finder value={this.state.finderValue}/>
                <Buttons label='AC' click={this.clearMemory} triple />
                <Buttons label='/' click={this.setOperation} operation />
                <Buttons label='7' click={this.addDigit}/>
                <Buttons label='8' click={this.addDigit}/>
                <Buttons label='9' click={this.addDigit}/>
                <Buttons label='*' click={this.setOperation} operation />
                <Buttons label='4' click={this.addDigit}/>
                <Buttons label='5' click={this.addDigit}/>
                <Buttons label='6' click={this.addDigit}/>
                <Buttons label='-' click={this.setOperation} operation />
                <Buttons label='1' click={this.addDigit}/>
                <Buttons label='2' click={this.addDigit}/>
                <Buttons label='3' click={this.addDigit}/>
                <Buttons label='+' click={this.setOperation} operation />
                <Buttons label='0' click={this.addDigit} double />
                <Buttons label='.' click={this.addDigit}/>
                <Buttons label='=' click={this.setOperation} operation />
            </div>
        )
    }
}