import { expect, test } from "@playwright/test";

test("homepage loads in Bangla and switches to English", async ({ page }) => {
  await page.goto("/bn");
  await expect(page.getByRole("heading", { name: /ক্ষমতা/ })).toBeVisible();
  await page.getByRole("button", { name: /Switch language/i }).click();
  await expect(page).toHaveURL(/\/en/);
});

test("search, filter, profile, case, corrections and not-found flows work", async ({ page }) => {
  await page.goto("/en/people?query=Demo%20Person%201&legalStatus=ALLEGATION_REPORTED");
  await expect(page.getByText("Demo Person 1")).toBeVisible();
  await page
    .getByRole("link", { name: /View documented profile/i })
    .first()
    .click();
  await expect(page.getByText(/Being listed/)).toBeVisible();
  await expect(page.getByRole("heading", { name: /Structured sources/i })).toBeVisible();
  await page
    .getByRole("link", { name: /View case/i })
    .first()
    .click();
  await expect(page.getByText(/People involved/)).toBeVisible();
  await page.goto("/en/corrections");
  await expect(page.getByRole("heading", { name: /Public correction log/i })).toBeVisible();
  await page.goto("/en/people/missing-profile");
  await expect(page.getByText(/Record not found/i)).toBeVisible();
});

test("mobile navigation opens", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/bn");
  await page.getByRole("button", { name: /মেনু খুলুন/ }).click();
  await expect(page.getByRole("navigation", { name: /Mobile navigation/i })).toBeVisible();
});
