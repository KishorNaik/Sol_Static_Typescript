class StaticDemo {

    // Static Variable
    static numValue: number;

    // Static Method
    static display(): void {
        console.log(this.numValue);
    }

}

function UiMiddleware() {
    StaticDemo.numValue = 11;
    StaticDemo.display();
}

UiMiddleware();