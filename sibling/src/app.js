require ('./css/app.css')

import {navCtrl, slideCtrl} from "./controllers/ctrls"

angular.module('myApp', ['ngAnimate'])
    .controller('navCtrl', navCtrl)
    .controller('slideCtrl', slideCtrl)
    
angular.module('myApp').run(['$rootScope', '$document', function($rootScope, $document) {
    $rootScope.$on('menuBTNOnNavClicked', function() {
        $rootScope.$broadcast('menuBTNOnNavClicked_Reflect')
        console.log("rootScope broadcasting meneBTNOnNavClicked_Reflect")
    })
    $document.on('click', function(){
        $rootScope.$broadcast('documentClicked') 
        console.log("rootScope broadcasting documentClicked")
    })
    $document.on('keyup', function(e){
        if (e.keyCode === 27) {
            $rootScope.$broadcast('escapePressed')
            console.log("rootScope broadcasting escapePressed")
        }
    })
}])
