import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
        clientId: "570371586050-m6d7e7hrf1kl09g9r76ig20t8jfq72mc.apps.googleusercontent.com",
        clientSecret: "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",
    }),
  ],
});