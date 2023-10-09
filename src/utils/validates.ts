import { ModelDTO, ProjectDTO, RequestError } from './types'

export const toNewProject = (object: any): ProjectDTO => {
  return {
    name: isString(object.name),
    description: isString(object.description)
  }
}

export const toNewModel = (object: any): ModelDTO => {
  return {
    name: isString(object.name),
    description: isString(object.description),
    modelFile: isString(object.modelFile)
  }
}

const isString = (text: any): string => {
  if (!(typeof text === 'string' && text !== '')) {
    throw new RequestError({
      message: 'Incorrect type or missing field',
      status: 400
    })
  }

  return text
}
