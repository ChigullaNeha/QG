import {Component} from 'react'
import './index.css'

class ReportPage extends Component {
  render() {
    const {location} = this.props
    const {correct, wrong, tot, percentage, at, unattempt, uL} = location.state
    const wrongAns = tot - correct - 1
    const uA = tot - (at + 1)
    return (
      <div>
        <div className="result-container">
          <div className="first-result-container">
            <div className="score-container">
              <h1>
                <span className="score">{correct - 1}</span> / {tot}
              </h1>
            </div>
            <div>
              <div className="r-container">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dedvz7flb/image/upload/v1713844635/Check_1_-_16px_nhidf6.png"
                  alt="correct"
                />
                <p>{correct - 1} Correct answers</p>
              </div>
              <div className="r-container">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dedvz7flb/image/upload/v1713844706/Close_-_16px_cbmpaw.png"
                  alt="wrong"
                />
                <p>{wrong} Wrong Answers</p>
              </div>
              <div className="r-container">
                <img
                  className="img"
                  src="https://res.cloudinary.com/dedvz7flb/image/upload/v1713844803/Status_Curcle_16px_i4zn2c.png"
                  alt="unattempted"
                />
                <p>{uA - 1} Unattempted</p>
              </div>
            </div>
          </div>
          {unattempt === 0 && (
            <h1 className="score">Attempted all the questions</h1>
          )}
          {unattempt !== 0 && (
            <div>
              {uL.map(each => (
                <h1 key={each.id}>{each.questionText}</h1>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default ReportPage
