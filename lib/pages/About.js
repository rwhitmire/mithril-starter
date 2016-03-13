import m from 'mithril'
import render from './render'

const About = {
  controller() {
    console.log('About controller')
  },

  view() {
    return render({
      title: 'About',
      view: m('div', 'about')
    })
  }
}

export default About
