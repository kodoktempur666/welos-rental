"use client"

import { toast } from "@/hooks/use-toast";
import { createKendaraan } from "@/lib/actions/kendaraan";
import { createKendaraanSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";


interface Props extends Partial<CreateKendaraan> {
    type?: "create" | "update";
}

const KendaraanForm = ({ type, ...kendaraan}: Props) => {
    
    const form = useForm<z.infer<typeof createKendaraanSchema>>({
        resolver: zodResolver(createKendaraanSchema),
        defaultValues: {
            merk: "",
            deskripsi: "",
            gambar: "",
            harga: 0,
            tipe: "",
        }

    })

    const onSubmit = async (values: z.infer<typeof createKendaraanSchema>) => {
        const result = await createKendaraan(values)

        if (result.success) {
            toast({
                title: "Sukses",
                description: "Kendaraan berhasil ditambahkan",
            })

        } else {
            toast({
                title: "Gagal",
                description: "Kendaraan gagal ditambahkan",
                variant: "destructive",
            })
        }
    }

    return (
        <Form {...form}>
             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name={"merk"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel className="text-base font-normal text-dark-500">
                                Merk kendaraan
                            </FormLabel>
                            <FormControl>
                                <Input
                                    required
                                    placeholder="Merk kendaraan"
                                    {...field}
                                    className="book-form_input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name={"tipe"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel className="text-base font-normal text-dark-500">
                                Tipe kendaraan
                            </FormLabel>
                            <FormControl>
                                <Input
                                    required
                                    placeholder="Tipe kendaraan"
                                    {...field}
                                    className="book-form_input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"gambar"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel className="text-base font-normal text-dark-500">
                                Gambar kendaraan
                            </FormLabel>
                            <FormControl>
                                <Input
                                    required
                                    placeholder="Gambar kendaraan"
                                    {...field}
                                    className="book-form_input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> 
                <FormField
                    control={form.control}
                    name={"harga"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel className="text-base font-normal text-dark-500">
                                Harga Sewa
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                            
                                    placeholder="Harga sewa"
                                    {...field}
                                    className="book-form_input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> 
                <FormField
                    control={form.control}
                    name={"deskripsi"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel className="text-base font-normal text-dark-500">
                                Deskripsi kendaraan
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Deskripsi kendaraan"
                                    {...field}
                                    rows={10}
                                    className="book-form_input"
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

               

                <Button type="submit" className="book-form_btn text-white">
                    Add Book to Library
                </Button>
            </form>
        </Form>
    )
}

export default KendaraanForm