/**
 * set page title
 * @param {string} title
 */

export function title(title) {
  document.title = title;
}

/**
 * set page description
 * @param {string} description
 */

export function description(description) {
  let metaDescriptionPage = document.getElementById("meta-description");
  metaDescriptionPage.content = description;
}
