require ('./css/app.css')

import {boardCtrl} from "./controllers/ctrls"
import {soloCtrl}  from "./controllers/ctrls"

angular.module('myApp', ['ngAnimate', 'ui.router'])
    .controller('boardCtrl', boardCtrl)
    .controller('soloCtrl', soloCtrl)

angular.module('myApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('')
        $stateProvider
            .state('board', {
                url: '',
                views: {
                    board: {template: require('./templates/board.html')}
                }
            })
            .state('solo', {
                url: '/charactor/:name',
                views: {
                    solo: {template: require('./templates/solo.html')}
                }
            })
    }])
