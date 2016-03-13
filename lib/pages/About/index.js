import m from 'mithril'
import renderPage from '../renderPage'

const About = {
  controller: function() {
    console.log('about controller')
  },

  view: function() {
    return renderPage({
      title: 'about',
      view: m('div', 'about')
    })
  }
}

export default About
