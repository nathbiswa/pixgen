"use client";

import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignUpPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => { console.log(data, "Data") }


    return (
        <div className="border mt-20 w-96 mx-auto shadow-2xl rounded-xl">
            <div className="flex justify-center py-3">
                <h2 className="text-3xl font-bold">Registation Form</h2>
            </div>

            <Form className="flex  p-6 flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    isRequired

                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input
                        placeholder="John Doe"
                        {...register("name")}
                    />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" {...register("email")} />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired type="text"
                >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter image url" {...register("image")} />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" {...register("password")} />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
                <div className="flex gap-3 items-center my-3">
                    <p>Already have an Account</p>
                    <Link href={`/signin`}> <button>Register</button></Link>

                </div>
            </Form>
        </div>

    );
}