import React, { Component } from 'react'
import { string, func } from 'prop-types'

class IframeWeb extends Component {

  componentDidMount() {
    this.iframe.addEventListener('load', this.props.onLoaded)
  }

  render() {
    const { src, className, frameBorder } = this.props
    return (
      <iframe ref={(c) => { this.iframe = c }} src={src} className={className} frameBorder={frameBorder} />
    )
  }
}

IframeWeb.propTypes = {
  onLoaded: func,
  src: string,
  className: string,
  frameBorder: string,
}

export default IframeWeb