import { i18n } from '../boot/i18n'

export default function (schema) {
  return value => {
    const { error } = schema.validate(value)

    return error === undefined ? true : i18n.t(`validate.${error.details[0].type}`)
  }
}
