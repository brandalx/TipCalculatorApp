import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getFormSchema } from "@/lib/formSchema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { DollarSign, Percent, UserRound } from "lucide-react";
import { useEffect } from "react";
import { useForm, useFormState } from "react-hook-form";
import z from "zod";

//main input reusable component for bill, tip percentage, amount of people
interface CalcInputProps {
  handleChange: () => void;
  type: "bill" | "percent" | "people";
  label?: string;
  data?: number;
  setData: (value: number) => void;
}

const CalcInput = ({
  type,
  data,
  label,
  setData,
  handleChange,
}: CalcInputProps) => {
  // usage of form schema for different input
  const formSchema = getFormSchema(type);
  //defining of form with zod, zodresolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: data,
    },
  });

  const { errors } = useFormState({ control: form.control });

  //on reset

  useEffect(() => {
    form.reset({ value: data });
  }, [data, form.reset]);

  //on submit calculation
  function onSubmit(values: z.infer<typeof formSchema>) {
    setData(values.value);
    handleChange();
  }
  //reusable form input
  return (
    <div>
      <Form {...form}>
        <form onChange={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="input-group ">
                    <div className="">
                      {type !== "percent" && (
                        <div className="flex justify-between my-2">
                          <FormLabel className="text-[#6A7878] text-sm">
                            {label}
                          </FormLabel>
                          <FormMessage className="text-[#ff6857] text-xs" />

                          <div className="text-xs opacity-0">0</div>
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <Input
                        max={type === "percent" ? 100 : 999999999}
                        min={0}
                        step={type === "people" ? "1" : "any"}
                        type="number"
                        className={cn(
                          "text-end spinner-none text-lg px-[20px] focus-visible:ring-0 bg-[#F3F8FB] font-bold text-[#00474B] border-2 border-[#5BABA2]",
                          errors.value && "border-red-500 "
                        )}
                        {...field}
                      />

                      <div className="absolute top-2.5 left-2">
                        {type === "people" && (
                          <UserRound
                            fill="#A0B9BD"
                            className="h-5 w-5  text-[#A0B9BD]"
                          />
                        )}
                      </div>

                      {type === "bill" && (
                        <DollarSign className="h-5 w-5 absolute top-2.5 left-2 text-[#A0B9BD]" />
                      )}

                      {type === "percent" && (
                        <Percent className="h-5 w-5 absolute top-3 left-2 text-[#A0B9BD]" />
                      )}
                    </div>
                  </div>
                </FormControl>
                {type === "percent" && (
                  <div>
                    <FormMessage className="text-[#ff6857] text-xs p-2 " />
                  </div>
                )}
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default CalcInput;
