

import React from "react"
import KendaraanForm from "@/components/admin/KendaraanForm"
import { Button } from "@/components/ui/button"
import { signOut } from "@/auth"



const Page = () => {

  return (
    <>
    <form
        action={async () => {
          'use server'
          await signOut()
        }}
        className="flex justify-end"
      >
        <Button type="submit" variant="destructive">
          Logout
        </Button>
      </form>
      <h1 className="text-2xl font-bold text-center mb-10">Tambah dsdsd Kendaraan</h1>
      <section className="w-full max-w-2xl">
        <KendaraanForm />
        </section>
    </>
  )
}

export default Page
