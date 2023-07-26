import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letters: 0}

  onText = event => {
    const {letters} = this.state
    console.log(event.target.length)
    this.setState({letters: event.target.value.length})
  }

  render() {
    const {letters} = this.state
    return (
      <div className="con-1">
        <div className="con-2">
          <h1 className="head">Calculate the Letters you enter</h1>
          <label htmlFor="inputField" className="text-1">
            Enter the phrase
          </label>
          <input
            id="inputField"
            type="text"
            className="input"
            onChange={this.onText}
            placeholder="Enter the phrase"
          />

          <p className="text-2">No.of letters: {letters}</p>
        </div>
        <div className="con-4">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
