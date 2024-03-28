// import "../../index.css";
// import { ClientOnly } from "../client";
import "../index.css";
import { ClientOnly } from "./client";

export async function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <ClientOnly />;
}
