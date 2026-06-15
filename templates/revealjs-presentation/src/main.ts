import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown";
import Highlight from "reveal.js/plugin/highlight";

const deck = new Reveal({
  plugins: [Markdown, Highlight],
});

deck.on("pdf-ready", function () {
  const tag = document.createElement("style");
  tag.appendChild(document.createTextNode("@page {size: a4 landscape;}"));
  document.head.appendChild(tag);
});

deck.initialize();
