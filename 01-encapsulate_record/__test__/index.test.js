import {render} from "../index";

describe('encapsulate record', function () {
  test('should be html', function () {
    expect(render()).toBe('<h1>Acme Gooseberries</h1>')
  });
});
