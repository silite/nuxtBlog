global.mixin = {
  layout: getLayout('banner')
}

function getLayout(name) {
  return function layout() {
    return `${name}`
  }
}
