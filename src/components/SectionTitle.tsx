/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface SectionTitleProps {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  id,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const isLeft = align === "left";

  return (
    <div
      id={id}
      className={`mb-12 flex flex-col ${
        isLeft ? "items-start text-start" : "items-center text-center mx-auto"
      }`}
    >
      <h2 className="opacity-0 font-sans text-3xl md:text-4xl lg:text-5xl font-black text-black border-b-4 border-black pb-3 tracking-tighter inline-block uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="opacity-0 mt-4 font-sans text-base md:text-lg text-text-muted max-w-2xl font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
