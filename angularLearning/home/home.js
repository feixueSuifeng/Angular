/**
 * Created by Administrator on 2016/8/15.
 */
angular.module("Home",[])
    .directive("home",function($state,$http){
        return{
            restrict:"AE",
            scope:{},
            replace:true,
            templateUrl:"./home/home.html",
            link:function(scope){
                scope.names=["HTML","CSS","JS"];
                scope.txt="zhang";
                scope.word="san";
                scope.flags=false;
                scope.btn=function(){
                    scope.flags=!scope.flags
                };
                scope.master = {firstName: "John", lastName: "Doe"};
                scope.reset = function() {
                    scope.user = angular.copy(scope.master);
                };
                scope.reset();
//表单元素
                scope.user = 'John Doe';
                scope.email = 'john.doe@gmail.com';
//转换大小写
                scope.x1="LOWERCASE";
                scope.x2=angular.lowercase(scope.x1);
                scope.x3="uppercase";
                scope.x4=angular.uppercase(scope.x3);

//包含include用法。
                scope.fName = '';
                scope.lName = '';
                scope.passw1 = '';
                scope.passw2 = '';
                scope.users = [
                    {id:1, fName:'Hege',lName:"Pege" },
                    {id:2, fName:'Kim',lName:"Pim" },
                    {id:3, fName:'Sal',lName:"Smith" },
                    {id:4, fName:'Jack',lName:"Jones" },
                    {id:5, fName:'John',lName:"Doe" },
                    {id:6, fName:'Peter',lName:"Pan" }
                ];
                scope.edit = true;
                scope.error = false;
                scope.incomplete = false;
                scope.editUser = function(id) {
                    if (id == 'new') {
                        scope.edit = true;
                        scope.incomplete = true;
                        scope.fName = '';
                        scope.lName = '';
                    } else {
                        scope.edit = false;
                        scope.fName = scope.users[id-1].fName;
                        scope.lName = scope.users[id-1].lName;
                    }
                };
                scope.$watch('passw1',function() {scope.test();});
                scope.$watch('passw2',function() {scope.test();});
                scope.$watch('fName',function() {scope.test();});
                scope.$watch('lName',function() {scope.test();});
                scope.test = function() {
                    if (scope.passw1 !== scope.passw2) {
                        scope.error = true;
                    } else {
                        scope.error = false;
                    }
                    scope.incomplete = false;
                    if (scope.edit && (!scope.fName.length ||
                        !scope.lName.length ||
                        !scope.passw1.length || !scope.passw2.length)) {
                        scope.incomplete = true;
                    }
                };

            }
        }
    });


//value 机制实现依赖注入

