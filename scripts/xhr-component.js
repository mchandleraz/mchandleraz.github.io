var proto = Object.create(HTMLElement.prototype);
var Element;
var element;

proto.createdCallback = function () {
    var request = new XMLHttpRequest();
    
    request.open('GET', 'https://e1.pncie.com/api/v2/customers/QA2MDMUBITESTAZSS9613/policies/summary', true);
    request.onreadystatechange = function () {
        if (request.readyState != 4 || request.status != 200) {
            return;
        }
        console.log(JSON.parse(request.response), request);
    }
    
    request.send();
}

Element = document.registerElement('x-test', {
    prototype: proto
});

element = new Element();
element.innerHTML = '<h1>Web Component Test</h1>';

document.body.appendChild(element);
