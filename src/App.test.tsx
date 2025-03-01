import { HelmetProvider } from "react-helmet-async";

import { MemoryRouter, type MemoryRouterProps } from "react-router-dom";

import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import ThemeProvider from "@providers/ThemeProvider";

import App from "./App";

describe("상단 네비게이션", () => {
  test("1. FAQ", async () => {
    renderWithProvider(<App />, { initialEntries: ["/"] });

    await userEvent.click(screen.getByRole("button", { name: /FAQ/ }));
    expect(
      await screen.findByText(/If your iCloud Contacts, Calendars, or Reminders won’t sync/i)
    ).toBeInTheDocument();
  });

  test("2. Guide", async () => {
    renderWithProvider(<App />, { initialEntries: ["/"] });

    await userEvent.click(screen.getByRole("button", { name: /Guide/ }));
    expect(await screen.findByText(/Coming Soon/i)).toBeInTheDocument();
  });

  test("3. Language Option", async () => {
    renderWithProvider(<App />, { initialEntries: ["/"] });

    const languageButton = await screen.findByTestId("language-button");
    expect(languageButton).toBeInTheDocument();
    await userEvent.click(languageButton);
    expect(await screen.findByTestId(/language-option-korean/)).toBeInTheDocument();
    expect(await screen.findByTestId(/language-option-english/)).toBeInTheDocument();

    if (languageButton.getAttribute("aria-label") === "한국어") {
      await userEvent.click(screen.getByTestId("language-option-english"));
      await waitFor(async () => {
        const languageButton = await screen.findByTestId("language-button");
        expect(languageButton.getAttribute("aria-label")).equal("English");
      });
    } else {
      await userEvent.click(screen.getByTestId("language-option-korean"));
      await waitFor(async () => {
        const languageButton = await screen.findByTestId("language-button");
        expect(languageButton.getAttribute("aria-label")).equal("한국어");
        await userEvent.click(languageButton);
        await userEvent.click(screen.getByTestId("language-option-english"));
      });
    }
  });

  test("3. Theme Mode", async () => {
    renderWithProvider(<App />, { initialEntries: ["/"] });

    const themeButton = await screen.findByTestId("theme-button");
    expect(themeButton).toBeInTheDocument();

    if (themeButton.getAttribute("aria-label") === "light") {
      await userEvent.click(themeButton);
      expect(themeButton.getAttribute("aria-label")).equal("dark");
    } else {
      await userEvent.click(themeButton);
      expect(themeButton.getAttribute("name")).equal("light");
    }
  });
});

describe("하단 네비게이션", () => {
  test("1. Terms of Use", async () => {
    renderWithProvider(<App />, { initialEntries: ["/"] });

    await userEvent.click(screen.getByRole("button", { name: /Terms of Use/ }));
    expect(
      await screen.findByText(
        'We will explain the "terms of use" (hereinafter referred to as the "terms") for the the service and application "Plandy" (hereinafter referred to as "service") provided by Danah Kim (hereinafter referred to as the "service provider").'
      )
    ).toBeInTheDocument();
  });

  test("2. Privacy policy", async () => {
    renderWithProvider(<App />, { initialEntries: ["/"] });

    await userEvent.click(screen.getByRole("button", { name: /Privacy Policy/ }));
    expect(
      await screen.findByText(
        'This privacy policy explains the privacy policy for the service and application "Plandy" (hereinafter referred to as "the Service") provided by Danah Kim (hereinafter referred to as "the Service Provider").'
      )
    ).toBeInTheDocument();
  });
});

const renderWithProvider = (
  Component: React.ReactNode,
  { initialEntries }: { initialEntries: MemoryRouterProps["initialEntries"] }
) => {
  return render(
    <HelmetProvider>
      <ThemeProvider>
        <MemoryRouter initialEntries={initialEntries}>{Component}</MemoryRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};
