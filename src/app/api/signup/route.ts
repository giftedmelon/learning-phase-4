import { NextResponse } from 'next/server'

import { supabase } from '../../../../lib/supabaseClient'

// GET /api/pets
export async function POST(request: Request) {
  const requestURL = new URL(request.url)
  const data = await request.json()
  const email= String(data.email)
  const password= String(data.password)

  const authResponse= await supabase.auth.signUp({
    email,
    password,
    options:{
      emailRedirectTo: `${requestURL.origin}/auth/callback`,
    },
  })
  return NextResponse.json({ authResponse })
}
