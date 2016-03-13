import m from 'mithril'
import renderPage from '../renderPage'

const About = {
  controller: function() {
    console.log('About controller')
  },

  view: function() {
    return renderPage({
      title: 'About',
      view: m('div', 'about')
    })
  }
}

export default About
