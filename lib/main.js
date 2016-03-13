import m from 'mithril';
import routes from './routes'

m.route.mode = "hash";
m.route(document.body, "/", routes)
