var XFoo = document.registerElement('x-foo', {
    prototype: Object.create(HTMLElement.prototype, {
      createdCallback: function () {
        console.log('boom goes the dynamite.');
      }
    })
});

document.body.appendChild(new XFoo());
