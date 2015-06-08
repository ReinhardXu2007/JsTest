describe("A spec using beforeEach and afterEach", function() {
  var foo = 0;

  beforeEach(function() {
    console.log("before each");
    foo += 1;
  });

  afterEach(function() {
    console.log("after each");
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    console.log("lt1");
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    console.log("lt2");
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});