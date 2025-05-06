import { auth } from '@/auth'
import { db } from '@/database/drizzle'
import { users } from '@/database/schema'
import { eq } from 'drizzle-orm'
import { SessionProvider } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth()
    const userId = session?.user?.id
    console.log(userId, 'userId')

    if (!session?.user?.id) redirect('/sign-in')

    const isAdmin = await db
        .select({ isAdmin: users.role })
        .from(users)
        .where(eq(users.id, session.user.id))
        .then((res) => res[0].isAdmin === 'ADMIN')

    if (!isAdmin) redirect('/sign-in')

    return (
        <SessionProvider session={session}>
            <div>{children}</div>
        </SessionProvider>

    )
}

export default layout