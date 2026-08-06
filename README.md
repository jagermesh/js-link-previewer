# Link Previewer

Simple, lightweight pure JavaScript component that adds a link preview functionality.

## Demo

https://jagermesh.github.io/js-link-previewer/

Or open `demo.html` from this repo directly in your browser (no build step required) to see it in action.

## Installation

### As an ES module / npm package

~~~
npm install js-link-previewer
~~~

~~~js
import LinkPreviewer from 'js-link-previewer';

const linkPreviewer = new LinkPreviewer();

linkPreviewer.attach('a');
~~~

### As a plain `<script>` tag

~~~html
<script src="https://unpkg.com/js-link-previewer/dist/link-previewer.min.js"></script>
~~~

~~~js
const linkPreviewer = new window.LinkPreviewer();

linkPreviewer.attach('a');
~~~

## Usage

1) Create a Link Previewer instance:

~~~js
const linkPreviewer = new LinkPreviewer();
~~~

2) Attach it to a selector:

~~~js
linkPreviewer.attach('a');
~~~

`attach` also accepts an optional settings object:

~~~js
linkPreviewer.attach('a', {
  bgColor: 'white',
  fgColor: 'black',
  beautify: function(overlayElement, linkElement) {
    // customize the preview overlay before it is shown
  },
});
~~~

That's all.

Have fun. Send PR if you find any glitches or want to make improvements.

:)
