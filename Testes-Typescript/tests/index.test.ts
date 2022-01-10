
import { createToken } from "typescript"
import { connection, isEven } from "../src"

describe("index.ts", () => {

    test("isEven", () => {
        const result = isEven(2)
        expect(result).toBe(true)

        expect(isEven(3)).toBe(false)
        expect(isEven(3.7)).toBe(false)
    })

    test("Demosntrando sintaxes", () => {

        expect(3 + 5).toEqual(8)
        expect("").toBe("")
        // expect({}).toBe({}) //falha
        expect({}).toEqual({}) //funciona

        expect(["a", "b", "c"]).toContain("c")
        // expect([{}, {}, {}]).toContain({})//falha
        expect([{}, {}, {}]).toContainEqual({})
    })

    test("Testando a conexão com o banco ", async () => {

        try {
            const result = await connection.raw("SELECT 'hello' as message ")

            expect(result[0][0]).toEqual({ message: "Hello" })
        } catch (error) {
            console.log(error)
        } finally {
            expect.assertions(1)
        }
    })

    test("Erros intencionais",  async ()=> {
        try {
            throw new Error("algo de errado não está certo")
        } catch (error: any) {
            expect(error.message).toEqual("algo de errado não está certo")
        }finally{
            expect.assertions(1)
        }
    })

    afterAll(() => {
        connection.destroy()
    })
})

