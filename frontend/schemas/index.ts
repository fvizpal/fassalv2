import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const PasswordResetConfirmSchema = z.object({
  new_password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
  re_new_password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const RegisterSchema = z.object({
  first_name: z.string().min(1, {
    message: "Name is required",
  }),
  last_name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  re_password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});


export const PasswordResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});