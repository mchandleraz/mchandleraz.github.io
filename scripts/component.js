var proto = Object.create(HTMLElement.prototype);
var Element;
var element;

proto.createdCallback = function () {
    var request = new XMLHttpRequest();
    
    request.open('GET', '/api/v2/customers/QA2MDMUBITESTAZSS9613/policies/summary', true);
    request.onreadystatechange = function () {
        console.log(arguments);
        if (request.readyState != 4 || request.status != 200) {
            return;
        }
    }
}

Element = document.registerElement('x-test', {
    prototype: proto
});

element = new Element();
document.body.appendChild(element);
