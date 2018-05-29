import React from 'react'
import lighthouseImage from '../images/lighthouse.png'
import datadogImage1 from '../images/datadog.1.png'
import datadogImage2 from '../images/datadog.2.png'
import datadogImage3 from '../images/datadog.3.png'
import datadogImage4 from '../images/datadog.4.png'
import datadogImage5 from '../images/datadog.5.png'
import datadogImage6 from '../images/datadog.6.png'

export const SyntheticMonitoring = () => (
  <section>
    <section>
      <h2>Synthetic monitoring</h2>
      <p className="fragment fade-up">
        <small>
          (also known as <strong>lab data</strong>)
        </small>
      </p>

      <p className="fragment fade-up">
        A method to monitor your applications by simulating users.
      </p>

      <aside className="notes">
        <p>about instrumenting a website to gather performance metrics</p>
        <p>a lot like feature/e2e testing</p>
        <p>helps you analyze and optimize your website speed and performance</p>
        <p>can be scripted/automated</p>
        <p>predictive</p>
        <p>controlled environment</p>
      </aside>
    </section>

    <section>
      <p>Lighthouse</p>
      <img src={lighthouseImage} alt="Lighthouse results for glossier.com" />

      <aside className="notes">
        <p>Performs audits for:</p>
        <ul>
          <li>performance</li>
          <li>accessibility</li>
          <li>progressive web app</li>
          <li>SEO</li>
          <li>and more!</li>
        </ul>

        <p>
          Open source tool to improve the quality of web pages, can write own
          audit
        </p>

        <p>Can run on</p>
        <ul>
          <li>Chrome dev tools (Audits tab)</li>
          <li>CLI</li>
          <li>node module</li>
        </ul>

        <p>
          <strong>can be completely automated</strong>
        </p>

        <p>
          <strong>sitespeed.io, </strong>
        </p>
      </aside>
    </section>

    <section>
      <h3>Synthetic monitoring strengths</h3>
      <ul>
        <li className="fragment fade-up">it's easy to use</li>
        <li className="fragment fade-up">
          can be used to spot check performance in a development environment
        </li>
        <li className="fragment fade-up">
          can be used to easily measure effect of code changes on performance
        </li>
      </ul>

      <aside className="notes">
        <p>Right there in the browser</p>
        <p>Manual or automated, like Glossier is doing</p>
      </aside>
    </section>

    <section data-transition="fade-in">
      <img src={datadogImage1} />
    </section>

    <section data-transition="fade-in">
      <img src={datadogImage2} />
    </section>

    <section data-transition="fade-in">
      <img src={datadogImage3} />
    </section>

    <section data-transition="fade-in">
      <img src={datadogImage4} />
    </section>

    <section data-transition="fade-in">
      <img src={datadogImage5} />
    </section>

    <section data-transition="fade-in">
      <img src={datadogImage6} />
    </section>

    <section>
      <img src={datadogImage1} />

      <aside className="notes">
        <p>Record Lighthouse results every 15/30 minutes</p>
        <p>
          Allows us to analyze those overtime, correlating to deploys and ...
        </p>
      </aside>
    </section>

    <section>
      <h3>Synthetic monitoring limitations</h3>
      <ul>
        <li className="fragment fade-up">
          does not reflect what your users are experiencing
        </li>
      </ul>

      <aside className="notes">
        <p>real world is messy</p>
        <ul>
          <li>network configurations</li>
          <li>cache conditions</li>
        </ul>
      </aside>
    </section>
  </section>
)
