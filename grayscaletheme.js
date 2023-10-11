function addCss(filename) {
  const style = document.createElement('link')
  style.href = filename
  style.type = 'text/css'
  style.rel = 'stylesheet'
  document.body.append(style)
}

window.onload = () => {
  // External CDN for css hosting.
  addCss("https://rawcdn.githack.com/rviid/league-grayscale-theme/35070af63f5d589e21d622a149989134168b9607/grayscaletheme.css");
}
