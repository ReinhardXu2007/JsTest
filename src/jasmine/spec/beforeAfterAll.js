describe("A spec using beforeAll and afterAll", function() {
  var foo;

  beforeAll(function() {
    console.log("before all");
    foo = 1;
  });

  afterAll(function() {
    console.log("after all");
    foo = 0;
  });

  it("sets the initial value of foo before specs run", function() {
    console.log("lt1");
        expect(foo).toEqual(1);
    foo += 1;
  });

  it("does not reset foo between specs", function() {
    console.log("lt2");
    expect(foo).toEqual(2);
  });
});