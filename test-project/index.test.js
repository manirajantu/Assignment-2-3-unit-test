// part 1



const target = require("./index");


describe("Write Test to throw error", () => {
    it("Should throw error", () => {
        expect(() => {
            appCode.handleRequest();
        }).toThrow(new Error("username is undefined"));
    });
    });


    // part 2

    describe("processRequest function", () => {
        it("should pass the test and return ok", () => {
          const mockedFunc = jest.fn(() => {
            console.log("mocked implementation");
          });
      
          target.closeConnections = jest.fn().mockReturnValue(true); 
      
          const result = target.processRequest(mockedFunc); 
      
          expect(result).toBe("ok"); 
        });
      
        it("should throw an error when closeConnections func returns false", () => {
          const mockedFunc = jest.fn(() => {
            console.log("mocked implementation");
          });
      
          target.closeConnections = jest.fn().mockReturnValue(false); 
      
          expect(() => {
            target.processRequest(mockedFunc); 
          }).toThrow("Internal server error");
        });
      });









