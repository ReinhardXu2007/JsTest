describe("A spec", function() {
  var foo;

  beforeAll(function() {
    console.log("before all");
  });

  afterAll(function() {
    console.log("after all");
  });

  beforeEach(function() {
    console.log("before each");
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    console.log("after each");
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });

  describe("nested inside a second describe", function() {
    var bar;

    beforeEach(function() {
      console.log("before inner each");
      bar = 1;
    });

  beforeAll(function() {
    console.log("before inner all");
  });

  afterAll(function() {
    console.log("after inner all");
  });

  afterEach(function() {
    console.log("after inner each");
  });

    it("can reference both scopes as needed", function() {
      expect(foo).toEqual(bar);
    });
  });
});