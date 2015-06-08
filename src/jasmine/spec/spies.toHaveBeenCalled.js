describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };
    // 用了spy, 原来的方法就不会执行了
    spyOn(foo, 'setBar');

    foo.setBar(123);
    console.log(bar);
    foo.setBar(456, 'another param');
  });

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    expect(foo.setBar).toHaveBeenCalledWith(123);
  });

  it("stops all execution on a function", function() {
    expect(foo.setBar).toHaveBeenCalled();
    expect(foo.setBar).toHaveBeenCalledWith(123);
    console.log(bar);
    console.log(foo);
    expect(bar).toBeNull();
  });
});