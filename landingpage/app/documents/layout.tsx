export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-4xl w-full m-auto p-2">
      <div className="mt-20"></div>
      {children}
    </main>
  );
}
