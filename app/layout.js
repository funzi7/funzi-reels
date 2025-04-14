export const metadata = {
  title: 'Funzi Reels',
  description: 'Instagram-style content site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
