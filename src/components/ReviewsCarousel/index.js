// Write your code here

import './index.css'

import {Component} from 'react'

class ReviewsCarouse extends Component {
  state = {indexNo: 0}

  onDecrement = () => {
    const {indexNo} = this.state
    if (indexNo > 0) {
      this.setState(prevState => ({indexNo: prevState.indexNo - 1}))
    }
  }

  onIncrement = () => {
    const {indexNo} = this.state
    const {reviewsList} = this.props
    if (indexNo < reviewsList.length - 1) {
      this.setState(prevState => ({indexNo: prevState.indexNo + 1}))
    }
  }

  render() {
    const {indexNo} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[indexNo]
    return (
      <div className="bg-container">
        <h1 className="head">Reviews</h1>
        <div className="card">
          <button
            type="button"
            className="btn"
            onClick={this.onDecrement}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="icon"
            />
          </button>
          <div className="con">
            <img src={imgUrl} alt={username} className="img" />
            <p className="title">{username}</p>
            <p className="para">{companyName}</p>
            <p className="des">{description}</p>
          </div>
          <button
            type="button"
            className="btn"
            onClick={this.onIncrement}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="icon"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarouse
