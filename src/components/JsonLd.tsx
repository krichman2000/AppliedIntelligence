type Props = {
  data: Record<string, unknown>;
};

/** Renders a schema.org JSON-LD script tag, escaping "<" to prevent XSS. */
export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
