import {render} from "../ex1";

describe('encapsulate record', function () {
  test('should be html', function () {
    expect(render()).toBe('<h1>Acme Gooseberries</h1>')
  });
});
