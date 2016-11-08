export function CompareToDirective($parse){
    'ngInject'

    return{
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModel){
            var mainModel = $parse(attrs.compareTo)
            var secondModel = $parse(attrs.ngModel)

            //watch for changes
            scope.$watch(attrs.ngModel, function(newValue){
                ngModel.$setValidity(attrs.name, newValue === mainModel(scope))
            })

            scope.$watch(attrs.compareTo, function(newValue){
                ngModel.$setValidity(attrs.name, newValue === secondModel(scope))
            })
        }
    }
}