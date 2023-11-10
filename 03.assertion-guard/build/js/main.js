"use strict";
const bodyElement = document.querySelector('body');
bodyElement.innerHTML = 'Hello';
const bodyElement1 = document.querySelector('body');
bodyElement1.innerHTML = 'Hello1';
const bodyElement2 = document.querySelector('body');
if (bodyElement2) {
    bodyElement2.innerHTML = 'Hello2';
}
function func(arg) {
    if (arg) {
        return arg.toLocaleLowerCase();
    }
}
func('hello');
func(null);
