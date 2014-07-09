angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('ProvidersCtrl', function($scope, Providers) {
  $scope.providers = Providers.all();
})

.controller('ProviderDetailCtrl', function($scope, $stateParams, Providers) {
  $scope.provider = Providers.get($stateParams.providerId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('MapCtrl', function($scope) {
});


