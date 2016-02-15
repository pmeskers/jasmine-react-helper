var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var ReactHelper = {
  setup: function setup() {
    this._el = document.createElement('div');
    this._el.setAttribute('id', 'specHelper');
    document.body.appendChild(this._el);

    this._mockedComponents = {};
  },

  teardown: function teardown() {
    document.body.removeChild(this._el);

    _.each(this._mockedComponents, function(mock) {
      mock.component.prototype.render = mock.renderFn;
    });
  },

  render: function render(jsx) {
    ReactDOM.render(
      jsx,
      this._el
    );
    return this._el.firstChild;
  },

  mockComponent: function mockComponent(component) {
    this._mockedComponents[component.name] = {
      component: component,
      renderFn: component.prototype.render
    };

    component.prototype.render = function mockRender() {
      return React.createElement('div');
    };
  }
};

module.exports = ReactHelper;
