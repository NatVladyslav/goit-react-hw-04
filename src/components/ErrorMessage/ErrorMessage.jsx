import css from "./ErrorMessage.module.css"
const ErrorMessage = ({error}) => {
  return (
    <div className={css.error}>
          <p>Something went wrong!</p>
          <p>{`${error}`}</p>
    </div>
  )
}

export default ErrorMessage
