module.exports = function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      if (attrs.formioInputMask) {
        element.mask(attrs.formioInputMask, {
            completed: function() {
                ngModel.$setViewValue(element.val());
            },
            cleared: function() {
                ngModel.$setViewValue('');
            }
        });
      }
    }
  };
};
