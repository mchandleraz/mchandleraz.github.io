var proto = Object.create(HTMLElement.prototype);
var Element;
var element;

proto.createdCallback = function () {
    window.alert('alert');
    console.log('log');
}

Element = document.registerElement('x-test', {
    prototype: proto
});

element = new Element();
document.body.appendChild(element);
