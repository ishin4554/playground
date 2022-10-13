import assert from 'assert';
import { Province } from '../src/Province.mjs';
import sampleProvinceData from "../src/index.mjs";
describe('province', function () {
  it('should get shortfall', function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});
