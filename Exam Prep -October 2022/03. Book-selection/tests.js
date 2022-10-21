let bookSelection = require('./bookSelection');
let { assert } = require('chai')
let { expect } = require('chai')


describe("BookSelection Class", function () {
    describe("isGenreSuitable Function", () => {
        it("Test if return correct message if the book is not suitable", function () {
            let actual = bookSelection.isGenreSuitable("Thriller", 11);
            let expected = `Books with Thriller genre are not suitable for kids at 11 age`
            assert.equal(actual, expected)
            assert.equal(bookSelection.isGenreSuitable('Horror', 10), `Books with Horror genre are not suitable for kids at 10 age`)
        })
        it("Test if return correct message when suitable data is provided", function () {
            let expected = `Those books are suitable`;

            assert.equal(bookSelection.isGenreSuitable('Horror', 15), expected)
            assert.equal(bookSelection.isGenreSuitable('Romantic', 15), expected)
        })

    })
    describe("isItAffordable Function", function () {
        it("Test when invalid input is provided throw an error", function () {

            assert.throw(() => { bookSelection.isItAffordable("10", 10) }, 'Invalid input');
            assert.throw(() => { bookSelection.isItAffordable(10, "10") }, 'Invalid input');
            assert.throw(() => { bookSelection.isItAffordable("10", "10") }, 'Invalid input');

        })
        it("Test when valid data is given but the money are not enough", function () {
            assert.equal(bookSelection.isItAffordable(12, 10), "You don't have enough money")
        })

        it("Test when valid data is given and you have enough money", function () {
            assert.equal(bookSelection.isItAffordable(10, 12), `Book bought. You have 2$ left`)
        })

        describe("suitableTitles Function", function () {
            it(" Test if error is thrown when invalid data is given", function () {
                assert.throw(() => { bookSelection.suitableTitles(10, "String") }, "Invalid input")
                assert.throw(() => { bookSelection.suitableTitles([], 10) }, "Invalid input")
                assert.throw(() => { bookSelection.suitableTitles(10, 10) }, "Invalid input")
            })

            it("Test if it returns valid data, when valid input is given", function () {
                let testArr = [{ title: "Pod Igoto", genre: "Classic" }
                    , { title: "Harry Potter", genre: "Kids" }
                    , { title: "Monastery", genre: "Thriller" }]

                let testGenre = "Kids"

                expect(bookSelection.suitableTitles(testArr, testGenre)[0]).to.be.equal('Harry Potter')

            })

        })

    })

})