import {expect} from 'chai';
import * as helpers from '../../app/helpers';

describe('Helpers', () => {

    describe('#upSomeCommas', () => {
        [
            [100, '100'],
            [1000, '1,000'],
            [10000, '10,000'],
            [10000.00, '10,000'],
            [10000.50, '10,000.50'],
            [10000.500, '10,000.50']
        ].forEach(test => {
            let [input, expected] = test;

            it(`Should return ${expected} for ${input}`, () => {
                expect(
                    helpers.upSomeCommas(input)
                ).to.equal(expected);
            });
        });
    });

});
