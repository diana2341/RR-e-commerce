export default function RootLayout({ children }) {
  console.log({ children });
  return (
    <html lang="en">
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Web Dev Unit Ecommerce",
  description: "A cool e-commerce website",
};
