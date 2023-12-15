import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { DollarSign, Percent, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
interface CalcInputProps {
  type?: "bill" | "percent" | "people";
  label?: string;
  data?: number;
}

const formSchema = z.object({
  username: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number()
      .gte(0, "Cant be less than 0")
      .max(50, { message: "cannot be bigger than 50" })
  ),
});

const CalcInput = ({ type, data, label }: CalcInputProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="input-group relative">
                    <div className="">
                      {type !== "percent" && (
                        <div className="flex">
                          <FormLabel className="text-[#6A7878]">
                            {label}
                          </FormLabel>
                          <FormMessage className="text-[#ff6857] text-xs" />
                        </div>
                      )}
                    </div>
                    <div>
                      <Input type="number" className="ps-[30px]" {...field} />
                      {type === "people" && (
                        <UserRound
                          fill="#A0B9BD"
                          className="h-5 w-5 absolute top-9 left-2 text-[#A0B9BD]"
                        />
                      )}

                      {type === "bill" && (
                        <DollarSign className="h-5 w-5 absolute top-9 left-2 text-[#A0B9BD]" />
                      )}

                      {type === "percent" && (
                        <Percent className="h-5 w-5 absolute top-3 left-2 text-[#A0B9BD]" />
                      )}
                    </div>
                  </div>
                </FormControl>
                {type === "percent" && (
                  <div>
                    <FormMessage className="text-[#ff6857] text-xs" />
                  </div>
                )}
              </FormItem>
            )}
          />
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </div>
  );
};

export default CalcInput;
