import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { DollarSign, GroupIcon, Percent, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
interface CalcInputProps {
  type?: "bill" | "percent" | "people";

  data?: number;
}

const CalcInput = ({ type, data }: CalcInputProps) => {
  const formSchema = z.object({
    content: z.string().min(10),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      content: "",
    },
    resolver: zodResolver(formSchema),
  });
  return (
    <div>
      <Form {...form}>
        <form onSubmit={() => {}}>
          <FormField
            name="content"
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
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default CalcInput;
