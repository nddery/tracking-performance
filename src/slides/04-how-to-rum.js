import React from 'react'

export const HowToRUM = () => (
  <section>
    <section>
      <h3>How to RUM</h3>

      <ul>
        <li className="fragment fade-up">
          <a href="https://github.com/SOASTA/boomerang">Boomerang (OOS)</a>
        </li>
        <li className="fragment fade-up">
          <a href="https://www.akamai.com/uk/en/products/web-performance/mpulse-real-user-monitoring.jsp">
            Akamai mPulse (paid + free)
          </a>
        </li>
        <li className="fragment fade-up">
          <a href="https://newrelic.com/products/browser-monitoring#">
            New Relic Browser (paid)
          </a>
        </li>
        <li className="fragment fade-up">
          <a href="https://raygun.com/platform/real-user-monitoring">
            Raygun (paid)
          </a>
        </li>
        <li className="fragment fade-up">and many more</li>
      </ul>

      <aside className="notes">
        <p>mPulse has a paid and free (lite) version</p>
        <p>mPulse uses boomerang under the hood</p>
      </aside>
    </section>

    <section>
      <h3>DIY RUM</h3>
      <p className="fragment fade-up">
        <small>(or moonshine ?)</small>
      </p>

      <ul>
        <li className="fragment fade-up">
          Timing API (navigation/paint/resources)
        </li>
        <li className="fragment fade-up">
          Long Tasks API (Chrome only for now)
        </li>
        <li className="fragment fade-up">
          Time To Interactive (through polyfill)
        </li>
      </ul>

      <p className="fragment fade-up">
        Eventually <strong>Speed Index</strong>,{' '}
        <strong>Perceptual Speed Index</strong>,{' '}
        <strong>Last Painted Hero</strong>,{' '}
        <strong>Estimated Queuing Time</strong>,{' '}
        <strong>First Input Delay</strong>, ...
      </p>
    </section>
  </section>
)
