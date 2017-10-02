import React, { Component } from 'react'
import { func } from 'prop-types'

class IframeWeb extends Component {

  constructor(props) {
    super(props)

    this.state = {
      properties: {}
    }
  }

  componentWillMount() {
    let newProps = {...this.props};
    delete newProps.onLoaded;
    this.setState({properties: newProps})
  }

  componentDidMount() {
    this.iframe.addEventListener('load', this.props.onLoaded)
  }

  render() {
    return (
      <iframe ref={(c) => { this.iframe = c }} {...this.state.properties} />
    )
  }
}

IframeWeb.propTypes = {
  onLoaded: func,
}

export default IframeWeb