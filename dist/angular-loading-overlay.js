!function(){"use strict";angular.module("angularLoadingOverlay",[])}(),function(){"use strict";angular.module("angularLoadingOverlay").directive("loadingOverlay",["$templateCache","$compile",function(a,b){return{restrict:"A",transclude:!0,scope:{loadingOverlay:"@?"},link:function(c,d,e,f,g){c.showOverlay=function(){for(var a=c.loadingOverlay.split(","),b=!1,d=0;d<a.length;d++)if(c.$parent.isLoadingOverlay(a[d].trim()||void 0)){b=!0;break}return b},d.append(b(a.get("loadingOverlay.html"))(c)),g(function(a){d.append(a)})}}}])}(),function(){"use strict";angular.module("angularLoadingOverlay").factory("LoadingOverlay",[function(){return{mixin:function(a){var b=[];a.showLoadingOverlay=function(a){b.push(a)},a.hideLoadingOverlay=function(a){var c=b.indexOf(a);-1!==c&&b.splice(c,1)},a.isLoadingOverlay=function(a){return-1!==b.indexOf(a)}}}}])}(),function(){"use strict";angular.module("angularLoadingOverlay").run(["$templateCache",function(a){var b='<div class="loading-overlay" ng-hide="!showOverlay()"></div>';a.put("loadingOverlay.html",b)}])}();