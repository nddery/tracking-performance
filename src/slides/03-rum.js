import React from 'react'

export const RUM = () => (
  <section>
    <section>
      <h2>Real User Monitoring</h2>
      <p className="fragment fade-up">
        <small>
          (mostly known as <strong>RUM</strong> 🥃)
        </small>
      </p>

      <p className="fragment fade-up">
        Measure page load time and performance timings/metrics experienced by
        real users.
      </p>

      <aside className="notes">
        <ul>
          <li>first paint</li>
          <li>first contentful paint</li>
          <li>time to interactive</li>
        </ul>
      </aside>
    </section>

    <section>
      <h3>RUM limitations</h3>
      <ul>
        <li className="fragment fade-up">not as convenient</li>
        <li className="fragment fade-up">it's a LOT of data</li>
        <li className="fragment fade-up">restricted set of metrics</li>
      </ul>
    </section>

    <section>
      <h3>The observer effect</h3>
      <p>
        The theory that simply observing a situation or phenomenon necessarily
        changes that phenomenon. This is often the result of instruments that,
        by necessity, alter the state of what they measure in some manner.
      </p>

      <p>
        <a href="https://nicj.net/an-audit-of-boomerangs-performance/">
          Boomerang performance audit
        </a>
      </p>

      <aside className="notes">
        <p>We want to avoid the observer effect, or limit it.</p>
        <p>At the very least, we want to understand it and acount for it.</p>
      </aside>
    </section>

    <section>
      <h3>RUM strengths</h3>
      <ul>
        <li className="fragment fade-up">
          it's a window into your users experience
        </li>
        <li className="fragment fade-up">
          can be correlated to business KPI's
        </li>
      </ul>
    </section>
  </section>
)
