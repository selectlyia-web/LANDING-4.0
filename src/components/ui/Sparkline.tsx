import { useId } from 'react';

interface SparklineProps {
  readonly values: readonly number[];
  readonly positiveIsDown?: boolean;
  readonly width?: number;
  readonly height?: number;
}

/**
 * Mini-gráfico de linha em SVG puro (sem dependência de chart lib no MVP).
 * Verde quando a tendência favorece o comprador (preço caindo), vermelho quando não.
 */
export function Sparkline({
  values,
  positiveIsDown = true,
  width = 120,
  height = 36,
}: SparklineProps): React.JSX.Element {
  const titleId = useId();
  const first = values[0] ?? 0;
  const last = values[values.length - 1] ?? 0;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = width / Math.max(values.length - 1, 1);

  const points = values
    .map((value, index) => {
      const x = index * stepX;
      const y = height - ((value - min) / range) * (height - 4) - 2;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  const isFavorable = positiveIsDown ? last <= first : last >= first;
  const stroke = isFavorable ? '#22C55E' : '#EF4444';

  return (
    <svg
      role="img"
      aria-labelledby={titleId}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className="shrink-0"
    >
      <title id={titleId}>Histórico de preço</title>
      <polyline points={points} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
