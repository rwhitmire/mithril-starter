import m from 'mithril'
import render from './render'

const Home = {
  controller() {
    console.log('Home controller')
    Home.vm.init();
  },

  vm: {
    init() {
      Home.vm.count = m.prop(0)
    },

    increment() {
      Home.vm.count(Home.vm.count() + 1)
    }
  },

  view() {
    return render({
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
