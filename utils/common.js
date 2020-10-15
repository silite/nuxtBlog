export function debounce(func, wait = 50) {
  let timeout
  return () => {
    const context = this
    const args = arguments

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}
