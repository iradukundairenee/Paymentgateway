import React from "react"
import "../../../assets/scss/components/app-loader.scss"
class SpinnerComponent extends React.Component {
  render() {
    return (
      <div className="fallback-spinner vh-100">
        <div className="loading">
          <div className="effect-1 effects"></div>
          <div className="effect-2 effects"></div>
          <div className="effect-3 effects"></div>
        </div>
      </div>
    )
  }
}

export default SpinnerComponent
