"use server";

import { signIn } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

export const signInWithCredentials = async (params: AuthCredentials) => {
  const { email, password } = params;

       //debugger
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2));

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error) {
    console.log(error, "Signin error");
    return { success: false, error: "Signin error" };
  }
};
