import { expect } from 'chai';
import fn from '../src';

describe('app', function() {
  it('tests on fn', function() {
    expect(fn()).to.eql('hello world');
  });
});
