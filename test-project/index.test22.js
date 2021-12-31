// part 1



const appCode = require('./index')

describe("Write Test to throw error", () => {
    it("Should throw error", () => {
        expect(() => {
            appCode.handleRequest();
        }).toThrow(new Error("username is undefined"));
    });
    });


    part 2






