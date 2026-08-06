import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { describe, expect, it } from "vitest";
import { EditorialNotice } from "@/components/shared/Notices";
import { cases, people } from "@/data/fixtures/mock-data";
import { CaseStatusBadge } from "@/features/cases/CaseStatusBadge";
import { PersonCard } from "@/features/people/PersonCard";
import en from "@/i18n/messages/en.json";

describe("components", () => {
  it("renders person cards with locale-specific labels", () => {
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <PersonCard person={people[0]} cases={cases} locale="en" />
      </NextIntlClientProvider>
    );
    expect(screen.getByText("Demo Person 1")).toBeInTheDocument();
    expect(screen.getByText(/View documented profile/i)).toBeInTheDocument();
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
