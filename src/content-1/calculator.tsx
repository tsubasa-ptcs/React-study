import React from 'react'

class Calculator extends React.Component<{}, { valueA: any; valueB: any }> {
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state = {
      valueA: 0,
      valueB: 0,
    }
  }

  render() {
    const { valueA, valueB } = this.state
    const sum = parseInt(valueA) + parseInt(valueB)
    return (
      <div className="clc-area">
        <input
          type="text"
          className="clc-text"
          defaultValue={valueA}
          onInput={e => {
            this.setState({
              valueA: e.currentTarget.value,
            })
          }}
        />
        &nbsp;+&nbsp;
        <input
          type="text"
          className="clc-text"
          defaultValue={valueB}
          onInput={e => {
            this.setState({
              valueB: e.currentTarget.value,
            })
          }}
        />
        &nbsp;=&nbsp;
        <input type="text" className="clc-text" value={sum} readOnly />
      </div>
    )
  }
}

export default Calculator
