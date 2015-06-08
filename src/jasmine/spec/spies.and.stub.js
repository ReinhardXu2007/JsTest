describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        console.log("set bar as " + value);
        bar = value;
      }
    };

    spyOn(foo, 'setBar').and.callThrough();
  });

  it("can call through and then stub in the same spec", function() {
    foo.setBar(123);
    expect(bar).toEqual(123);

    foo.setBar.and.stub();
    bar = null;

    foo.setBar(1234);
    expect(bar).toBe(null);

    foo.setBar.and.callThrough();
    foo.setBar(1235);
    expect(bar).not.toBe(null);

  });
});