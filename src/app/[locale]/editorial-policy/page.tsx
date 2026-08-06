import { PolicyPage } from "@/components/shared/PolicyPage";
export default function Page(props: { params: Promise<{ locale: "bn" | "en" }> }) {
  return <PolicyPage {...props} kind="editorial-policy" />;
}
