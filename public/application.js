var mainApplicationModuleName = 'example';

var mainApplicationModuleName = angular.module(mainApplicationModuleName, ['example']);


angular.element(document).ready(function(){
	//angular.bootstrap(document, [mainApplicationModuleName]);
	angular.bootstrap(document, ['example']);
});