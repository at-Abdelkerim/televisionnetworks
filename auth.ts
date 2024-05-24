import NextAuth, { type NextAuthConfig } from 'next-auth';
import {} from 'next-auth/jwt';
import credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getUser } from './app/lib/data';

interface IUser {
  id: string;
  phoneNumber: string;
  role: string;
  firstName: string;
  middleName: string;
  lastName: string;
}
declare module 'next-auth' {
  interface User extends IUser {}
  interface Session {
    user: User;
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      if (isOnLogin) {
        if (isLoggedIn) return Response.redirect(new URL('/', nextUrl));
        return true;
      }
      if (isLoggedIn) return true;
      return false;
    },
    jwt({ token, user }) {
      if (user) {
        token = {
          ...token,
          ...user,
        };
      }
      return token;
    },
    session({
      session,
      token: { exp, iat, jti, sub, email, name, picture, ...rest } = {},
    }) {
      if (rest) {
        session.user = {
          ...session.user,
          ...rest,
        };
      }
      return session;
    },
  },
  providers: [
    credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            phoneNumber: z.string({}).length(10, 'length must be 10'),
            password: z.string(),
          })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { phoneNumber, password } = parsedCredentials.data;
          const user = await getUser(phoneNumber, password);
          if (!!user) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig);
