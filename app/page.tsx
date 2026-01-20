import { PageClient } from "@/components/PageClient";
import { getPageContent } from "@/lib/content";

export default function Page() {
  const contentEn = getPageContent("en");
  const contentUk = getPageContent("uk");

  return <PageClient contentEn={contentEn} contentUk={contentUk} />;
}
