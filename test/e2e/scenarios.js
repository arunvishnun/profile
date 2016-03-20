'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('phonecatApp', function() {

 it("Should create 3 phones", function() {
   var $scope = {},
       ctrl = new PhoneListCtrl($scope);

   expect(scope.phones.length).toBe(3);

 })

});
