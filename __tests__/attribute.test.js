const {
  $,
  TAG_NAME_DIV,
  TAG_NAME_INPUT,
  ATTR_TYPE,
  ATTR_CLASS,
  INPUT_TYPE_TEXT,
} = require('../dist/index');

test('Attribute: type', () => {
  expect(
    $(TAG_NAME_INPUT)
      .setAttributes(ATTR_TYPE, INPUT_TYPE_TEXT)
      .dom
      .getAttribute(ATTR_TYPE)
  ).toBe(INPUT_TYPE_TEXT);
});

test('Attribute: class', () => {
  expect(
    $(TAG_NAME_DIV)
      .setAttributes(ATTR_CLASS, 'test-class')
      .dom
      .getAttribute(ATTR_CLASS)
  ).toBe('test-class');
});
