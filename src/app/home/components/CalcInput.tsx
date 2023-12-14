import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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

  data?: number;
}

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const CalcInput = ({ type, data }: CalcInputProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
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
                    <Input className="ps-[30px]" {...field} />
                    {type === "people" && (
                      <UserRound
                        fill="#A0B9BD"
                        className="h-5 w-5 absolute top-2.5 left-2 text-[#A0B9BD]"
                      />
                    )}

                    {type === "bill" && (
                      <DollarSign className="h-5 w-5 absolute top-2.5 left-2 text-[#A0B9BD]" />
                    )}

                    {type === "percent" && (
                      <Percent className="h-5 w-5 absolute top-2.5 left-2 text-[#A0B9BD]" />
                    )}
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CalcInput;
