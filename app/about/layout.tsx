export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}
