import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "MARINA — ткани и швейная экспертиза", description: "Каталог материалов и консультаций Марины Ганиевой" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="ru"><body>{children}</body></html>; }
