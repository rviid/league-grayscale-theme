function addCss(filename) {
  const style = document.createElement('link')
  style.href = filename
  style.type = 'text/css'
  style.rel = 'stylesheet'
  document.body.append(style)
}

window.onload = () => {
  // External CDN for css hosting.
  addCss("https://raw.githack.com/rviid/league-color-theme/main/themebw.css");
}