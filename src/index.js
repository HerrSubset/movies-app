import "materialize-css/dist/css/materialize.css";
import "./styles.css"
import "jquery/dist/jquery.js";
import angular from 'angular';
import "materialize-css/dist/js/materialize.js"

// materialize hackery
window.jQuery = require('jquery');
require('materialize-css');
window.Vel = require('materialize-css/js/velocity.min');







import appModule from "./app/app.module"
angular.bootstrap(document, [appModule]);
