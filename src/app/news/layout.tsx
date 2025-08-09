export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    <h1>News Section</h1>
    <p>Welcome to the news section. Here you will find the latest updates and articles.</p>
    {children}
    </section>
}