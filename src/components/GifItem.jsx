export const GifItem= ({title, url, id}) => {
  return (
    <>
      <h3>{title}</h3>
      <img src={ url } alt={ title }/>
    </>
    )
}