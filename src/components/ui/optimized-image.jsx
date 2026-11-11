export function OptimizedImage({
  src,
  optimized,
  alt = '',
  width,
  height,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  ...props
}) {
  return (
    <picture>
      {optimized?.srcSet && <source type="image/webp" srcSet={optimized.srcSet} sizes={sizes} />}
      <img
        src={src}
        alt={alt}
        width={width || optimized?.width}
        height={height || optimized?.height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        className={className}
        {...props}
      />
    </picture>
  );
}
