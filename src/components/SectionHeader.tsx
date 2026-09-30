type SectionHeaderProps = {
  id: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ id, title, subtitle }: SectionHeaderProps) {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <p className="mb-2 font-mono text-sm text-accent">/{id}</p>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>
      )}
    </div>
  );
}
