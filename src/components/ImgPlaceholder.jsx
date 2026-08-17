/**
 * ImgPlaceholder — Shows a labeled placeholder box until the real image is added.
 * Drop the image file at `src` path and it auto-loads. No code changes needed.
 */
import styles from './ImgPlaceholder.module.css'

export default function ImgPlaceholder({
  src,
  alt = '',
  width,
  height,
  style = {},
  className = '',
  label,
  fill = false,      // if true, fills parent container
  contain = false,   // object-fit: contain instead of cover
  accentColor = '#3aa0ff',
}) {
  const filename = label || src.split('/').pop()

  const handleError = (e) => {
    e.target.style.opacity = '0'
    e.target.nextSibling.style.display = 'flex'
  }

  const handleLoad = (e) => {
    e.target.style.opacity = '1'
    e.target.nextSibling.style.display = 'none'
  }

  return (
    <div
      className={`${styles.wrap} ${fill ? styles.fill : ''} ${className}`}
      style={{ width, height, '--accent': accentColor, ...style }}
      data-placeholder={filename}
    >
      <img
        src={src}
        alt={alt}
        className={`${styles.img} ${contain ? styles.contain : ''}`}
        onError={handleError}
        onLoad={handleLoad}
        style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
        loading="lazy"
      />
      {/* Fallback shown when image is missing */}
      <div className={styles.fallback} aria-hidden="true">
        <div className={styles.fallbackIcon}>🖼️</div>
        <div className={styles.fallbackName}>{filename}</div>
        <div className={styles.fallbackHint}>Add to /public/images/</div>
      </div>
    </div>
  )
}
