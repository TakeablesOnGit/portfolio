import { Analytics } from '@vercel/analytics/next';

export function Skills({ data }: { data: Record<string, string[]> }) {
  return (
    <div id="Skills" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">
        Skills.
      </h2>

      <ul className="flex flex-col gap-2 mt-4 font-normal text-primary/90 text-base">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="items-end grid sm:grid-cols-[170px_1fr]">
            <p>{key}:</p>
            <p className="text-muted-foreground text-sm">{value.join(", ")}</p>
            <Analytics />
          </li>
        ))}
      </ul>
    </div>
  );
}
