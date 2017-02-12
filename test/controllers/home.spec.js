import sinon from 'sinon';
import {expect} from 'chai';
import Home from '../../app/controllers/home';

describe('Home Controller', () => {

  it('Should render the "home/index"', () => {
    const render = sinon.spy();

    // Hit route
    Home.index({}, {
      render
    });

    expect(
      render.calledWith('home/index')
    ).to.be.true;
  });

});
