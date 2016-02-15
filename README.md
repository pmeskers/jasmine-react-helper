# jasmine-react-helper

This is a work-in-progress helper for testing React components using Jasmine.

Requiring `spec/helpers/react-helper.js` provides you with a singleton `reactHelper` instance which can be used to render JSX into the DOM for testing, and can also replace components with mocked ones. 

```js
var reactHelper = require('../helpers/react-helper');
```

**render(jsx)**

Render a provided JSX element. Returns a reference to the rendered DOM node. 

```js
this.el = reactHelper.render(<h1>JSX!</h1>);
...
expect(this.el.textContent).toEqual('JSX!');
```

**mockComponent(Component)**

Any subequent rendering of the provided component will render a blank `div` instead of executing its real `render` function.

```js
ReactHelper.mockComponent(DummyComponent);
this.el = ReactHelper.render(
  <DummyComponent />
); // this will render an empty div
```

*Note: This differs from the React's Test Utilities `mockComponent` function by choosing not to render any children of mocked components.*

**setup()**

This function should be called before any other ReactHelper methods are. In this scaffold, it is done globally in `spec/helpers/spec_helper.js`.

**teardown()**

This function should be called after any tests have been run in order to clean up the DOM and restore any mocked components. In this scaffold, it is done globally in `spec/helpers/spec_helper.js`.

### todo

* this should place nicely with React's test utils
