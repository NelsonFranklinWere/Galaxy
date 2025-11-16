import { test, expect } from "@playwright/test";

test("home page has hero ctas", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Drive Luxury/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /View Fleet/i })).toBeVisible();
});

test("fleet filters render", async ({ page }) => {
  await page.goto("/fleet");
  await expect(page.getByText(/Full Fleet/i)).toBeVisible();
  await expect(page.getByRole("button", { name: /SUV/i })).toBeVisible();
});

