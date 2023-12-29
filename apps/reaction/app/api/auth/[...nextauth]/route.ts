import NextAuth from 'next-auth/next'

import { authOption } from '../../../../libs/next-auth/auth-option'

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }
