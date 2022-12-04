'use client'
import { SupabaseClient, User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const ProfilePage = () => {
  const [user, setUser] = useState<User>()

  let client = new SupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_API!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON!,
    {
      auth: {
        persistSession: true,
      },
    }
  )

  useEffect(() => {
    client.auth.getUser().then((x) => {
      if (x.data.user) setUser(x.data.user)
    })
  }, [])

  return <div>{user?.email}</div>
}

export default ProfilePage
