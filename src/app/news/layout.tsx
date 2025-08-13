export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-7xl w-11/12 mx-auto py-12">
    
      {children}
    </section>
  );
}
