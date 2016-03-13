import m from 'mithril'
import renderPage from '../renderPage'

var Home = {
  controller: function() {
    console.log('Home controller')
    Home.vm.init();
  },

  vm: {
    init: function() {
      Home.vm.count = m.prop(0)
    },

    increment: function() {
      Home.vm.count(Home.vm.count() + 1)
    }
  },

  view: function() {
    return renderPage({
      title: 'Home',
      view: m('div', [
        'home',
        m('div', Home.vm.count()),
        m('button', {onclick: Home.vm.increment}, 'increment')
      ])
    })
  }
}

export default Home
