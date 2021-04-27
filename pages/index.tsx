import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/next-server/server/router";
import Head from "next/head";
import { useEffect } from "react";
import Route from "../src/enums/Route";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push(Route.Home);
  });
  return <div />;
}
