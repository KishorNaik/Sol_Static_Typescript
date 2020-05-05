var StaticDemo = /** @class */ (function () {
    function StaticDemo() {
    }
    // Static Method
    StaticDemo.display = function () {
        console.log(this.numValue);
    };
    return StaticDemo;
}());
function UiMiddleware() {
    StaticDemo.numValue = 11;
    StaticDemo.display();
}
UiMiddleware();
