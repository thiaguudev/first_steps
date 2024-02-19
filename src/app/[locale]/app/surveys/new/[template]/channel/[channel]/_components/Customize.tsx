"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function Customize() {
  const schema = z.object({
    brand: z.string(),
    question: z.string(),
    isAnonymous: z.boolean(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const handleOnSubmit: SubmitHandler<z.infer<typeof schema>> = async (d) =>
    console.log(d);

  return (
    <div className="flex">
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="flex flex-col space-y-3"
      >
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="brand">Brand/Product name</label>
          <input id="brand" type="text" {...form.register("brand")} />
        </div>

        <div className="flex items-center justify-between gap-3">
          <label htmlFor="question">Question</label>
          <input id="question" type="text" {...form.register("question")} />
        </div>

        <div className="flex items-center justify-between gap-3">
          <label htmlFor="isAnonymous">Is Anonymous?</label>
          <input id="isAnonymous" type="checkbox" />
        </div>

        <button type="submit">Next</button>
      </form>

      <div></div>
    </div>
  );
}
