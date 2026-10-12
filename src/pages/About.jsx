import React from 'react';

export default function About() {
  return (
    <div className="main-wrap" id="about">
      <header className="section default-header about-header">
        <div className="container medium">
          <div className="row">
            <div className="flex-col once-in">
              <h1><span>Building high-impact systems</span><span>for the modern web &amp; AI</span></h1>
            </div>
          </div>
        </div>
      </header>

      <section className="section no-padding line-globe once-in">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="stripe"></div>
              <div className="digital-ball">
                <div className="overlay"></div>
                <div className="globe">
                  <div className="globe-wrap">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle-hor"></div>
                    <div className="circle-hor-middle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-image once-in">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <div className="arrow">
                <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>arrow-up-right</title>
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-1019.000000, -279.000000)" stroke="currentColor" strokeWidth="1.5">
                      <g transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                        <polyline points="2.76923077 0 12 0 12 9.23076923"></polyline>
                        <line x1="12" y1="0" x2="0" y2="12"></line>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <p>
                I engineer robust full-stack platforms, real-time telemetry systems, and intelligent AI applications. With open-source contributions to organizations like SugarLabs and production engineering at TechGlaz Labs, I prioritize performance, data consistency, and clean code.
              </p>
              <div style={{ marginTop: '2em' }}>
                <a
                  href="/assets/Sahil_Basu_Resume.pdf"
                  download="Sahil_Basu_Resume.pdf"
                  className="btn btn-normal btn-dark"
                  style={{ display: 'inline-block', textDecoration: 'none' }}
                >
                  <div className="btn-click magnetic" data-strength="25" data-strength-text="15">
                    <div className="btn-fill"></div>
                    <span className="btn-text">
                      <span className="btn-text-inner change">Download Resume (PDF)</span>
                    </span>
                  </div>
                </a>
              </div>
              <p>
                <span style={{ opacity: 0.5, display: 'block', paddingTop: '1.5em' }}>
                  Always solving &amp; building<span className="animate-dot">.</span><span className="animate-dot">.</span><span className="animate-dot">.</span>
                </span>
              </p>
            </div>
            <div className="flex-col">
              <div className="single-about-image">
                <div
                  className="overlay overlay-image"
                  style={{
                    backgroundImage: 'url(/assets/about-portrait.jpg)',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                ></div>
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-services">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <h2>What I bring to the table <span className="animate-dot">.</span><span className="animate-dot">.</span><span className="animate-dot">.</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="flex-col">
              <h5>01</h5>
              <div className="stripe"></div>
              <h4>Full-Stack Engineering</h4>
              <p>Architecting end-to-end web applications with React 19, Node.js, Express, PostgreSQL, and MongoDB. Specialized in WebSocket telemetry streams, role-based access control, and GIS map integrations.</p>
            </div>
            <div className="flex-col">
              <h5>02</h5>
              <div className="stripe"></div>
              <h4>AI &amp; RAG Systems</h4>
              <p>Developing domain-specific AI workflows using Google Gemini LLM, ChromaDB vector retrieval, and custom NLP pipelines — including drilling intelligence radars and automated ATS resume analyzers.</p>
            </div>
            <div className="flex-col">
              <h5>03</h5>
              <div className="stripe"></div>
              <h4>Testing &amp; Open Source</h4>
              <p>Active open-source contributor to SugarLabs musicBlocks (8+ merged PRs). Dedicated to automated Jest unit testing, CI/CD pipelines, API bottleneck resolution, and reliable schema migrations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-awwwards">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="single-image">
                <div
                  className="overlay overlay-image"
                  style={{
                    backgroundImage: 'url(/assets/avatar.jpg)',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                ></div>
                <div className="overlay"></div>
              </div>
            </div>
            <div className="flex-col">
              <div className="awwwards-badge"></div>
              <h2>Experience &amp;<br />Education</h2>
              <p>Based in New Delhi, India. Passionate about software engineering, competitive algorithmic problem solving, and building scalable technological solutions.</p>
              <div className="about-credentials">
                <div className="credential-item">
                  <h5>Education</h5>
                  <h4>B.Tech in Information Technology</h4>
                  <p>Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi (2024 — 2028) · CGPA: 8.25</p>
                </div>
                <div className="credential-item">
                  <h5>Industry Experience</h5>
                  <h4>TechGlaz Labs Pvt. Ltd.</h4>
                  <p>Full Stack Developer Intern · Implemented RBAC security, resolved API bottlenecks, and delivered 30+ production features.</p>
                </div>
                <div className="credential-item">
                  <h5>Open Source</h5>
                  <h4>SugarLabs (musicBlocks)</h4>
                  <p>8+ merged PRs contributing Jest automated test suites, core bug resolutions, and GitHub CI/CD workflow enhancements.</p>
                </div>
                <div className="credential-item">
                  <h5>Problem Solving &amp; Hackathons</h5>
                  <h4>470+ Coding Problems Solved</h4>
                  <p>LeetCode, Codeforces (Max Rating: 1470), Codolio · 1st Place Winner TechSprint Hackathon · SIH 2026 College Select · 3x Hackathon Finalist.</p>
                </div>
                <div className="credential-item">
                  <h5>Technical Stack</h5>
                  <div className="credential-tags">
                    <span>JavaScript</span>
                    <span>Python</span>
                    <span>C / C++</span>
                    <span>React 19</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>PostgreSQL</span>
                    <span>MongoDB</span>
                    <span>WebSockets</span>
                    <span>Gemini API</span>
                    <span>FastAPI</span>
                    <span>Tailwind CSS</span>
                    <span>Jest</span>
                    <span>Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
