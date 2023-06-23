import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import { SideNav } from "~/components/SideNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Tweetera</title>
        <meta name="name" content="Tweetera"/>
        <meta
          name="description"
          content=" Introducing Tweetera, the exciting new social media platform that brings people together in real-time conversations. Share your thoughts, connect with friends, and discover trending topics—all in a user-friendly interface. Experience the power of Tweetera as it revolutionizes the way we interact and engage in the digital world. Join the conversation today!"
        />
        <meta
          name="keywords"
          content="Social Media, Tweetera, Twitter, Twitter Clone, Tweets, Chat"
        />
        <meta name="author" content="Arjun Vijay Prakash" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex items-start sm:pr-4 md:w-[60%]">
        <SideNav />
        <div className="min-h-screen flex-grow border-x">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
