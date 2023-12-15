import { z } from "zod";

// function for validation of data passed into the schema

export const getFormSchema = (type: string) => {
  switch (type) {
    case "bill":
      return z.object({
        value: z.preprocess((value) => {
          if (typeof value === "number") {
            value = value.toString();
          }
          return typeof value === "string" ? parseFloat(value) : value;
        }, z.number().positive("Bill must be a positive number").gte(0.01, "Bill must be greater than 0")),
      });
    case "people":
      return z.object({
        value: z.preprocess((value) => {
          if (typeof value === "number") {
            value = value.toString();
          }
          return typeof value === "string" ? parseInt(value, 10) : value;
        }, z.number().int("Number of people must be an integer").gte(1, "Can't be zero")),
      });
    case "percent":
      return z.object({
        value: z.preprocess((value) => {
          if (typeof value === "number") {
            value = value.toString();
          }
          return typeof value === "string" ? parseFloat(value) : value;
        }, z.number().gte(0, "Tip percent cannot be less than 0").lte(100, "Max is 100%")),
      });
    default:
      return z.object({
        value: z.number(),
      });
  }
};
