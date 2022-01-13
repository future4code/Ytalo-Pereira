import {
  validateEmptyProperties,
  ValidateEmptyPropertiesOutput,
} from "./validateEmptyProperties";


interface CalculateEmployeeSalaryInput {
  employeeName: string;
  baseSalary: number;
  benefits: number[];
  extraHours: number;
}

export const calculateEmployeeSalary = (
  input: CalculateEmployeeSalaryInput,
  validator: (input: any) => ValidateEmptyPropertiesOutput
) => {
  const validationResult: ValidateEmptyPropertiesOutput = validator(input);

  if (!validationResult.isValid) {
    throw new Error("Missing Properties");
  }

  if (input.baseSalary < 0) {
    throw new Error("Invalid BaseSalary");
  }

  let fullSalary = input.baseSalary;

  for (const benefit of input.benefits) {
    if (benefit < 0) {
      throw new Error("Invalid Benefit");
    }
    fullSalary += benefit;
  }

  if (input.extraHours < 0) {
    throw new Error("Invalid ExtraHours");
  }

  fullSalary += input.extraHours;

  return fullSalary;
};

// calculateEmployeeSalary({
//   employeeName: "Ytalo",
//   baseSalary: 100000,
//   benefits: [500, 696, 555],
//   extraHours:2000
// }, ({}) => {
//   return{
//     isValid: false,
//     errors: [{key:"employeeName", value: ""}]
//   }
// })
