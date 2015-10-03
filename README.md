[![Build Status](https://travis-ci.org/bsalex/angular-loading-overlay.svg?branch=master)](https://travis-ci.org/bsalex/angular-loading-overlay)

#Angular loading overlay

A service and directive to show "Loading..." overlays on async operations.

##Installation
`bower install --save angular-loading-overlay`

##Docs & Examples
[http://bsalex.github.io/angular-loading-overlay/_site/](http://bsalex.github.io/angular-loading-overlay/_site/)

##Usage

###In javascript
````javascript
angular.module("your nodule name", [
  "bsLoadingOverlay"
]);


angular.module("your nodule name")
  .controller(function ($timeout, bsLoadingOverlayService) {

    bsLoadingOverlayService.start();

    $timeout(bsLoadingOverlayService.stop, 5000);

  });
````
###In html
````html
<div bs-loading-overlay>
  loaded data usage here
</div>
````
