import loadLandscape from "../utils/loadLandscape.js";

function injectTitle() {
  const landscape = loadLandscape();

  const title = landscape.title || "Landscape";

  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html.replace("%APP_TITLE%", title);
    },
  };
}

export default injectTitle;
