import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown';
import Highlight from 'reveal.js/plugin/highlight';

const deck = new Reveal({
  plugins: [Markdown, Highlight],
});
deck.initialize();


