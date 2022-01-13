import { validateEmptyProperties } from "../src/validateEmptyProperties"

describe("Testing validateEmptyProperties", () => {
    test("Shoul return inValid FAlse  on Empaty string proparty", () => {
        const result = validateEmptyProperties({ name: "" })
        expect(result.isValid).toBe(false)
        expect(result.isValid).toBe(1)
        expect(result.errors[0]).toEqual({ key: "name", value: "" })
    })
    test("Shoul return inValid FAlse  on Empaty string proparty 0", () => {
        const result = validateEmptyProperties({ email: 0, name: "Astrodev" })
        expect(result.isValid).toBe(false)
        expect(result.errors.length).toBe(1)
        expect(result.errors[0]).toEqual({ key: "email", value: "0" })

    })

    test("Shoul return inValid FAlse  on Empaty string proparty 0", () => {
        const result = validateEmptyProperties({ age: 18, occupation: undefined })
        expect(result.isValid).toBe(false)
        expect(result.errors).toContain({ key: "ocuupation", value: undefined })

    })
    test("Shoul return inValid FAlse  on Empaty string proparty 0", () => {
        const result = validateEmptyProperties({ age: null })
        expect(result.isValid).toBe(false)
        expect(result.errors).toContainEqual({ key: "age", value: null })
    })

    test("Shoul return inValid FAlse  on Empaty string proparty 0", () => {
        const result = validateEmptyProperties({
            name: "Astrodev",
            age: 0,
            email: undefined,
            occupation: null,
            height: ""
        })
        expect(result.isValid).toBe(false)
        expect(result.errors.length).toBe(4)

    })

    test("Shoul return inValid FAlse  on Empaty string proparty 0", () => {
        const result = validateEmptyProperties({ 
            name: "Astrodev",
            email: "astro@gmail.com",
            age: 55,
            occupation: "Dev"
         })
        expect(result.isValid).toBe(true)
        expect(result.errors).toBe(0)
    })



})
