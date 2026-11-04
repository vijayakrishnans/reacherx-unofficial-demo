import { Suspense, type ReactNode } from "react";
import { AppEntry } from "../runtime/AppEntry";
import { geistSans, geistMono, geistPixelSquare } from "@/app/fonts";
import "./experiment.css";
import MediaChromeYTTemplate from "@/shared/ui/components/MediaChromeYTTemplate";

const SOURCE_URL = "https://github.com/vijayakrishnans/reacherx-unofficial-demo";

export const metadata = {
  title: "Unofficial demo of ReacherX",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${geistPixelSquare.variable}`}
      suppressHydrationWarning
    >
      <body>
        <MediaChromeYTTemplate />
        <Suspense fallback={null}>
          <AppEntry>{children}</AppEntry>
        </Suspense>
        <aside
          role="note"
          aria-label="Unofficial demo notice"
          style={{
            position: "fixed",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2147483647,
            maxWidth: "calc(100vw - 24px)",
            padding: "6px 14px",
            borderRadius: 999,
            background: "#b45309",
            color: "#fff",
            font: "500 13px/1.4 system-ui, sans-serif",
            textAlign: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,.25)",
          }}
        >
          Unofficial demo. Not run by or affiliated with ReacherX. All data is
          fictional.{" "}
          <a
            href={SOURCE_URL}
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            Source (AGPL-3.0)
          </a>
        </aside>
      </body>
    </html>
  );
}
