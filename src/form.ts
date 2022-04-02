const sendForm = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll("input")

  let values: Record<string, string> = {}

  inputs.forEach((input: HTMLInputElement) => {
    values[input.id] = input.value
  })

  console.log(values)
}

export default sendForm
