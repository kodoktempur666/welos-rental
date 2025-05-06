import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";

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

import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

import { FIELD_NAMES, FIELD_TYPES } from "@/constant";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T
  onSubmit: (data: T) => Promise<{ success: boolean; message: string }>;
  type: 'login'
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  type,
}: Props<T>) => {
  const router = useRouter();

  const isSignIn = type === 'login'
  
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  })


  const handleSubmit: SubmitHandler<T> = async (data) => {
    try {
      const result = await onSubmit(data);

      //debugger
      console.log(result, "result");
      
      if (result.success) {
        toast({
          title: "Success",
          description: result.message || "Authentication successful",
        });
        router.push('/admin');
      } else {
        toast({
          title: "Error",
          description: result.message || "Authentication failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {Object.keys(defaultValues).map((field) => ( <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl >
                      <Input
                        required
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        {...field}
                        className="form-input"
                      />

                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
       
          
          <Button type="submit" className="w-full">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>

        </form>
      </Form>
    </div>
  )
}

export default AuthForm;