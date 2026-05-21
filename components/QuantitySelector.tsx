"use client";

type Props = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }: Props) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div className="inline-flex items-center gap-6 border-b border-line pb-3">
      <button
        type="button"
        onClick={dec}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="label text-bone/80 transition-colors hover:text-copper disabled:text-ash/40"
      >
        &#x2212;
      </button>
      <span className="serif w-6 text-center text-2xl text-bone" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        onClick={inc}
        disabled={value >= max}
        aria-label="Increase quantity"
        className="label text-bone/80 transition-colors hover:text-copper disabled:text-ash/40"
      >
        +
      </button>
    </div>
  );
}
