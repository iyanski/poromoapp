const Button = ({
  primary,
  block,
  children,
  onClick
}) => {
  const classes = [
    'btn'
  ]
  if (primary) classes.push('btn-primary')
  if (block) classes.push('w-full')
  return (
    <button onClick={onClick} className={classes.join(" ")}>{children}</button>
  )
}

export default Button
