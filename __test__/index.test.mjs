import { expect } from 'chai';
import { Province } from '../src/Province.mjs';
import sampleProvinceData from "../src/index.mjs";
describe('province', function () {
  it('should get shortfall', function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });
  it('should get profit', function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).equal(230);
  });
});
