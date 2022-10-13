import { expect } from 'chai';
import { Province } from '../src/Province.mjs';
import sampleProvinceData from "../src/index.mjs";
describe('province', function () {
  // 不要這樣做：共用的 fixture 會讓不同測試間相互影響
  // const asia = new Province(sampleProvinceData());
  let asia;
  beforeEach(function() {
    asia = new Province(sampleProvinceData());
  })
  it('should get shortfall', function () {
    expect(asia.shortfall).equal(5);
  });
  it('should get profit', function () {
    expect(asia.profit).equal(230);
  });
});
