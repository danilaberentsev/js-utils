/* global document, window */

export function copyToClipboard(text) {
  try {
    const div = document.createElement('div');
    div.innerHTML = text;
    document.body.appendChild(div);

    const range = document.createRange();
    range.selectNode(div);
    window.getSelection().addRange(range);

    document.execCommand('copy');

    window.getSelection().removeAllRanges();
    document.body.removeChild(div);
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
}
