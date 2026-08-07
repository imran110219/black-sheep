import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { describe, expect, it } from "vitest";
import { EditorialNotice } from "@/components/shared/Notices";
import { people } from "@/data";
import { CaseStatusBadge } from "@/features/cases/CaseStatusBadge";
import { PersonCard } from "@/features/people/PersonCard";
import en from "@/i18n/messages/en.json";

describe("components", () => {
  it("renders person cards with locale-specific labels", () => {
    const publicPerson = people.find((person) => person.slug === "sweden-aslam");
    expect(publicPerson).toBeDefined();
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <PersonCard person={publicPerson!} locale="en" />
      </NextIntlClientProvider>
    );
    expect(screen.getByText("Sweden Aslam")).toBeInTheDocument();
    expect(screen.getByText(/Explore profile/i)).toBeInTheDocument();
  });

  it("renders case status badges and editorial notices", () => {
    render(
      <>
        <CaseStatusBadge status="UNDER_INVESTIGATION" locale="en" />
        <EditorialNotice>Neutral notice</EditorialNotice>
      </>
    );
    expect(screen.getByText("Under investigation")).toBeInTheDocument();
    expect(screen.getByText("Neutral notice")).toBeInTheDocument();
  });
});
