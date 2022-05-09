export const rawHTML = `
<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Dillinger_0"></a>Dillinger</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="_The_Last_Markdown_Editor_Ever__1"></a><em>The Last Markdown Editor, Ever</em></h2>
<p class="has-line-data" data-line-start="3" data-line-end="4"><a href="https://nodesource.com/products/nsolid"><img src="https://cldup.com/dTxpPi9lDf.thumb.png" alt="N|Solid"></a></p>
<p class="has-line-data" data-line-start="5" data-line-end="6"><a href="https://travis-ci.org/joemccann/dillinger"><img src="https://travis-ci.org/joemccann/dillinger.svg?branch=master" alt="Build Status"></a></p>
<p class="has-line-data" data-line-start="7" data-line-end="9">Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,<br>
AngularJS-powered HTML5 Markdown editor.</p>
<ul>
<li class="has-line-data" data-line-start="10" data-line-end="11">Type some Markdown on the left</li>
<li class="has-line-data" data-line-start="11" data-line-end="12">See HTML in the right</li>
<li class="has-line-data" data-line-start="12" data-line-end="14">✨Magic ✨</li>
</ul>
<h2 class="code-line" data-line-start=14 data-line-end=15 ><a id="Features_14"></a>Features</h2>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">Import a HTML file and watch it magically convert to Markdown</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">Drag and drop images (requires your Dropbox account be linked)</li>
<li class="has-line-data" data-line-start="18" data-line-end="19">Import and save files from GitHub, Dropbox, Google Drive and One Drive</li>
<li class="has-line-data" data-line-start="19" data-line-end="20">Drag and drop markdown and HTML files into Dillinger</li>
<li class="has-line-data" data-line-start="20" data-line-end="22">Export documents as Markdown, HTML and PDF</li>
</ul>
<p class="has-line-data" data-line-start="22" data-line-end="25">Markdown is a lightweight markup language based on the formatting conventions<br>
that people naturally use in email.<br>
As [John Gruber] writes on the [Markdown site][df1]</p>
<blockquote>
<p class="has-line-data" data-line-start="26" data-line-end="33">The overriding design goal for Markdown’s<br>
formatting syntax is to make it as readable<br>
as possible. The idea is that a<br>
Markdown-formatted document should be<br>
publishable as-is, as plain text, without<br>
looking like it’s been marked up with tags<br>
or formatting instructions.</p>
</blockquote>
<p class="has-line-data" data-line-start="34" data-line-end="37">This text you see here is *actually- written in Markdown! To get a feel<br>
for Markdown’s syntax, type some text into the left window and<br>
watch the results in the right.</p>
<h2 class="code-line" data-line-start=38 data-line-end=39 ><a id="Tech_38"></a>Tech</h2>
<p class="has-line-data" data-line-start="40" data-line-end="41">Dillinger uses a number of open source projects to work properly:</p>
<ul>
<li class="has-line-data" data-line-start="42" data-line-end="43">[AngularJS] - HTML enhanced for web apps!</li>
<li class="has-line-data" data-line-start="43" data-line-end="44">[Ace Editor] - awesome web-based text editor</li>
<li class="has-line-data" data-line-start="44" data-line-end="45">[markdown-it] - Markdown parser done right. Fast and easy to extend.</li>
<li class="has-line-data" data-line-start="45" data-line-end="46">[Twitter Bootstrap] - great UI boilerplate for modern web apps</li>
<li class="has-line-data" data-line-start="46" data-line-end="47">[node.js] - evented I/O for the backend</li>
<li class="has-line-data" data-line-start="47" data-line-end="48">[Express] - fast node.js network app framework [@tjholowaychuk]</li>
<li class="has-line-data" data-line-start="48" data-line-end="49">[Gulp] - the streaming build system</li>
<li class="has-line-data" data-line-start="49" data-line-end="51"><a href="https://breakdance.github.io/breakdance/">Breakdance</a> - HTML<br>
to Markdown converter</li>
<li class="has-line-data" data-line-start="51" data-line-end="53">[jQuery] - duh</li>
</ul>
<p class="has-line-data" data-line-start="53" data-line-end="55">And of course Dillinger itself is open source with a [public repository][dill]<br>
on GitHub.</p>
<h2 class="code-line" data-line-start=56 data-line-end=57 ><a id="Installation_56"></a>Installation</h2>
<p class="has-line-data" data-line-start="58" data-line-end="59">Dillinger requires <a href="https://nodejs.org/">Node.js</a> v10+ to run.</p>
<p class="has-line-data" data-line-start="60" data-line-end="61">Install the dependencies and devDependencies and start the server.</p>
<pre><code class="has-line-data" data-line-start="63" data-line-end="67" class="language-sh"><span class="hljs-built_in">cd</span> dillinger
npm i
node app
</code></pre>
<p class="has-line-data" data-line-start="68" data-line-end="69">For production environments…</p>
<pre><code class="has-line-data" data-line-start="71" data-line-end="74" class="language-sh">npm install --production
NODE_ENV=production node app
</code></pre>
<h2 class="code-line" data-line-start=75 data-line-end=76 ><a id="Plugins_75"></a>Plugins</h2>
<p class="has-line-data" data-line-start="77" data-line-end="79">Dillinger is currently extended with the following plugins.<br>
Instructions on how to use them in your own application are linked below.</p>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Plugin</th>
<th>README</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dropbox</td>
<td>[plugins/dropbox/README.md][PlDb]</td>
</tr>
<tr>
<td>GitHub</td>
<td>[plugins/github/README.md][PlGh]</td>
</tr>
<tr>
<td>Google Drive</td>
<td>[plugins/googledrive/README.md][PlGd]</td>
</tr>
<tr>
<td>OneDrive</td>
<td>[plugins/onedrive/README.md][PlOd]</td>
</tr>
<tr>
<td>Medium</td>
<td>[plugins/medium/README.md][PlMe]</td>
</tr>
<tr>
<td>Google Analytics</td>
<td>[plugins/googleanalytics/README.md][PlGa]</td>
</tr>
</tbody>
</table>
  `;