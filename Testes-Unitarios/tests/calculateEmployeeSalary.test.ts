import { calculateEmployeeSalary, CalculateEmployeeSalaryInput } from "../src/calculateEmployeeSalary"
import { validateEmptyProperties } from "../src/validateEmptyProperties"

describe("Testing calculateEmployeeSalary", () => {
    test("Should return error message "), () => {

        try {
            const input: CalculateEmployeeSalaryInput = {
                employeeName: "",
                baseSalary: 100000,
                benefits: [500, 696, 555],
                extraHours: 2000
            }

            const validatorMock = jest.fn(() => {
                return {
                    isValid:  false
                }
            })

             calculateEmployeeSalary(input, validatorMock as any)
        } catch (error: any) {
                 expect(error.message).toContain("Missing Properties")
        }finally{
            expect.assertions(1)
        }
    }
})