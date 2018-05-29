import React from 'react'
import Reveal from 'reveal.js'
import notesPluginUrl from 'reveal.js/plugin/notes/notes'
import 'reveal.js/lib/js/head.min.js'
import 'reveal.js/plugin/notes/notes.html'

import { Intro } from './slides/01-intro'
import { SyntheticMonitoring } from './slides/02-synthetic-monitoring'
import { RUM } from './slides/03-rum'
import { HowToRUM } from './slides/04-how-to-rum'
import { ThankYou } from './slides/xx-thank-you'

import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/serif.css'
import './main.css'

class Slideshow extends React.Component {
  componentDidMount() {
    window.Reveal = Reveal
    Reveal.initialize({
      controlsTutorial: false,
      history: true,
      overview: false,
      transitionSpeed: 'fast',
      dependencies: [{ src: notesPluginUrl, async: true }],
      keyboard: {
        72: 'prev',
        74: 'down',
        75: 'up',
        76: 'next'
      }
    })

    Reveal.addEventListener('ready', event => {
      document.querySelector('.navigate-left').innerHTML = 'h'
      document.querySelector('.navigate-down').innerHTML = 'j'
      document.querySelector('.navigate-up').innerHTML = 'k'
      document.querySelector('.navigate-right').innerHTML = 'l'
    })
  }

  render() {
    return (
      <div className="reveal">
        <div className="slides">
          <Intro />
          <SyntheticMonitoring />
          <RUM />
          <HowToRUM />
          <ThankYou />
        </div>
      </div>
    )
  }
}

export { Slideshow }
