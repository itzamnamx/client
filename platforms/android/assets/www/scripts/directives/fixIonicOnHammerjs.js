/**
 * Created by Minh on 4/13/2014.
 */

'use strict';

angular.module('itaxiApp')
    .directive('fixHammer', function ($ionicGesture) {
        return {
            restrict: 'C',
            link: function ($scope, $element, $attr) {
                var output = angular.element(document.getElementById('output'));

                // Debug output function
                var o = function (type, d) {
                    var p = ['<div>' + type + ' event: '];
                    for (var i = 0; i < d.length; i++) {
                        p.push(d[i]);
                    }
                    p.push('</div>');
                    output.append(p.join(', '));
                    $element[0].scrollTop = $element[0].scrollHeight;
                };

                var tapFn = function (e) {
                    o('tap', [e.gesture.touches[0].pageX, e.gesture.touches[0].pageY]);
                };
                var tapGesture = $ionicGesture.on('tap', tapFn, $element);

                var releaseFn = function (e) {
                    o('release', [e.gesture.touches[0].pageX, e.gesture.touches[0].pageY]);
                };
                var releaseGesture = $ionicGesture.on('release', releaseFn, $element);

                var holdFn = function (e) {
                    o('hold', [e.gesture.touches[0].pageX, e.gesture.touches[0].pageY]);
                };
                var holdGesture = $ionicGesture.on('hold', holdFn, $element);

                var dragFn = function (e) {
                    o('drag', [e.gesture.touches[0].pageX, e.gesture.touches[0].pageY, e.gesture.deltaX, e.gesture.deltaY]);
                };
                var dragGesture = $ionicGesture.on('drag', dragFn, $element);

                var swipeFn = function (e) {
                    o('swipe', [e.gesture.touches[0].pageX, e.gesture.touches[0].pageY, e.gesture.direction]);
                };
                var swipeGesture = $ionicGesture.on('swipe', swipeFn, $element);

                var transformFn = function (e) {
                    o('transform', [e.gesture.touches[0].pageX, e.gesture.touches[0].pageY, e.gesture.direction]);
                };
                var transformGesture = $ionicGesture.on('transform', transformFn, $element);

                $scope.$on('$destroy', function () {
                    console.log('you use $destroy');
                    $ionicGesture.off(dragGesture, 'drag', dragFn);
                    /*  $ionicGesture.off(holdGesture, 'hold', holdFn);*/
                    /*    $ionicGesture.off(releaseGesture, 'release', releaseFn);*/
                    $ionicGesture.off(swipeGesture, 'swipe', swipeFn);
                    /*$ionicGesture.off(tapGesture, 'tap', tapFn);*/
                    $ionicGesture.off(transformGesture, 'transform', transformFn);
                });
            }
        };
    });
