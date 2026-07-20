type Props = {
  number: string
  title: string
  description: string
  details: string[]
}

export function ProcessStep({ number, title, description, details }: Props) {
  return (
    <div className="grid lg:grid-cols-12 gap-8 py-16 border-t border-border">
      <div className="lg:col-span-2">
        <span className="font-display text-6xl leading-none text-border">{number}</span>
      </div>
      <div className="lg:col-span-5">
        <h3 className="font-display text-3xl leading-none mb-4">{title}</h3>
        <p className="text-[15px] leading-7 text-muted-foreground text-pretty">{description}</p>
      </div>
      <div className="lg:col-span-5">
        <ul className="space-y-3">
          {details.map((d) => (
            <li key={d} className="flex gap-3 text-sm">
              <span className="mt-2 w-1 h-1 rounded-full bg-terracotta shrink-0" />
              <span className="text-muted-foreground">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
