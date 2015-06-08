describe("A suite", function() {
  console.log(document.body.innerHTML);
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
    console.log('hello');
  });
});