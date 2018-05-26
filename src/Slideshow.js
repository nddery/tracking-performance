import React from 'react'
import Reveal from 'reveal.js'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/serif.css'
import './main.css'

class Slideshow extends React.Component {
  componentDidMount() {
    Reveal.initialize({
      controlsTutorial: false,
      history: true,
      overview: false,
      transitionSpeed: 'fast',
    })
  }

  render() {
    return (
      <div className="reveal">
        <div className="slides">
        </div>
      </div>
    )
  }
}

export { Slideshow }
