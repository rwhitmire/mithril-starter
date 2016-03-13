import m from 'mithril'
import Nav from '../components/Nav'

const render = function(data) {
  window.document.title = data.title

  return m('div', [
    Nav,
    data.view
  ])
}

export default render
