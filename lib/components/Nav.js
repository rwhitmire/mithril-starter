import m from 'mithril'

const Nav = {
  view() {
    return m('nav', [
      m("a[href='/']", {config: m.route}, 'home'),
      m("a[href='/about']", {config: m.route}, 'about')
    ])
  }
}

export default Nav
