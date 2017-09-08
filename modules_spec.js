const expect = require("chai").expect;
const reverse = require("./modules/reverse");
const findLongest = require("./modules/findLongest");
const isPalindrome = require("./modules/isPalindrome");
const groupArray = require("./modules/groupArray");

describe("Testing algorithm modules", () => {
  it("Should reverse a string", (done) => {
    expect(reverse("hello")).to.equal("olleh");
    done();
  });

  it("Should find the longest word in a string", (done) => {
    expect(findLongest("I ate Japanese food for lunch")).to.equal(8);
    done();
  });

  it("Should check if a word is a palindrome", (done) => {
    expect(isPalindrome("racecar")).to.equal(true);
    done();
  });

  it("Should group an array based on a given size", (done) => {
    expect(JSON.stringify(groupArray([1, 2, 3, 4, 5, 6], 2))).to.equal(JSON.stringify([[1, 2], [3, 4], [5, 6]]));
    done();
  });
});
