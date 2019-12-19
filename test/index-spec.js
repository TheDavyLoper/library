/* eslint-disable no-undef */
const { expect } = require('chai');
require('../app');

describe('test', () => {
  it('listen on port 3000', () => {
    expect(port).to.equal(3000);
  });
});
