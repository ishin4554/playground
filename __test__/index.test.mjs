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
  it('should change production', function() {
    // The Four-Phase Test Pattern a.k.a setup-exercise-verify, giver-when-then, arrange-act-assert
    // 1. 先建立標準的 fixture
    // 2. 接著在測試使用 fixture 進行操作跟調整
    // 3. 驗證是否如同預期
    // 4. 隱藏階段：拆解 (teardown) 移除共用的 fixture，避免不同測試間互相影響。
    asia.producers[0].production = 20;

    // 盡可能讓一個 it 只有一個驗證陳述驗證陳述式，避免第一個失敗後，後面沒有執行
    // 不過作者認為此處的測試關聯性夠緊密。
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  })

  // 邊緣案例：0
  it('zero demand', function() {
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  })

  // 邊緣案例：負數
  it('negative demand', function() {
    asia.demand = -1;
    expect(asia.shortfall).equal(-26);
    expect(asia.profit).equal(-10);
  })

  // TODO: 但對於商業邏輯來說，profit < 0 合理嗎？若不合理，應怎麼避免負數出現
});

// 邊緣案例：沒有空陣列
describe('no producers', function () {
  let noProducers;
  beforeEach(function() {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20
    }
    noProducers = new Province(data);
  })
  it('should get shortfall', function() {
    expect(noProducers.shortfall).equal(30)
  })
  it('should get profit', function() {
    expect(noProducers.profit).equal(0)
  })
});
