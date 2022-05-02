const Reader = require("../../lib/utils/reader");

describe("reader", () => {
    test("readFile", () => {
        const data = Reader.readJsonFile("test/data/test.json");
        expect(data).not.toBeUndefined();
    });
});