var mainApplicationModuleName = 'RedSocial';

var mainApplicationModuleName = angular.module(mainApplicationModuleName, ['example']);


angular.element(document).ready(function(){
	angular.boostrap(document, [mainApplicationModuleName]);
});