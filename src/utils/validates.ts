import { ModelDTO, ProjectDTO, RequestError } from './types'

/**
 * Function to transform a object to a new project instance
 * @param object An Object with the data to transform
 * @returns {ProjectDTO} Return a new project instance
 */
export const toNewProject = (object: any): ProjectDTO => {
  return {
    name: isString(object.name),
    description: isString(object.description)
  }
}

/**
 * Function to transform a object to a new model instance
 * @param object An Object with the data to transform
 * @returns {ModelDTO} Return a new model instance
 */
export const toNewModel = (object: any): ModelDTO => {
  return {
    name: isString(object.name),
    description: isString(object.description),
    modelFile: isString(object.modelFile)
  }
}

/**
 * Function to validate the param is a string and is not empty
 * @param {any} text param to validate
 * @returns {string} Returns the string when is know is valid
 */
const isString = (text: any): string => {
  if (!(typeof text === 'string' && text !== '')) {
    throw new RequestError({
      message: 'Incorrect type or missing field',
      status: 400
    })
  }

  return text
}
