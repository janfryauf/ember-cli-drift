import { moduleFor, test } from 'ember-qunit';
import td from 'testdouble';

moduleFor('service:drift', 'Unit | Service | drift', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('proxy identify method to global drift object', function(assert) {
  const identify = td.function();
  td.when(identify('foo')).thenReturn('bar');

  let service = this.subject({
    driftObject: {
      identify: identify
    }
  });

  const result = service.identify('foo');

  assert.equal(result, 'bar', 'called `identify` with the correct arguments');
});

test('test for no errors when driftObject undefined', function(assert) {
  let service = this.subject({
    driftObject: undefined,
    console: undefined
  });

  service.identify();
  assert.ok(true);
});

test('test that console.warn is called without driftObject', function(assert) {
  const warnStub = td.function();

  let service = this.subject({
    console: {
      warn: warnStub
    }
  });

  service.identify();

  assert.equal(td.verify(warnStub('Drift is not initialized!')), undefined);
});