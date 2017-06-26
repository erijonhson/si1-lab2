'use strict';
 
angular.
  module('modal').
  component('modal', {
    templateUrl: 'modal/modal.template.html',
    controller: [
      function modalController() {

        var ctrl = this;

        var teste = angular.element(document.getElementById('myModal')).myModal.modal('show');

        // myModal.modal('show');

/*        $(document).ready(function() {
   $('#myModal').modal('show');
}); 


 $('#myModal').modal('show');

*/

    }],
    bindings: {
    }
  });