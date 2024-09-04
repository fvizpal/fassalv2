"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { CardWrapper } from "./card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "../shared";
import { FormSuccess } from "../shared";
import { OnboardSchema } from "@/schemas";
import { Textarea } from "../ui/textarea";

export const OnboardForm = () => {

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof OnboardSchema>>({
    resolver: zodResolver(OnboardSchema),
    defaultValues: {
      role: "",
      address: "",
    },
  });

  const onSubmit = (values: z.infer<typeof OnboardSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      // TODO: Onboard action 
    });
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen p-5 rounded-lg border bg-card  ">
      <h1 className=" font-extrabold text-5xl">Let's onboard you</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <>
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select your role</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-[500px]">
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="farmer">Farmer</SelectItem>
                          <SelectItem value="middleman">Middleman</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your full address</FormLabel>
                    <FormControl>
                      <Textarea className="w-[500px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
