import m from 'mithril';
import Nav from './components/Nav'
import Home from './pages/Home/index'
import About from './pages/About/index'

m.route.mode = "hash";

m.route(document.body, "/", {
  "/": Home,
  "/about": About
})
