import {
  ModelToCreateDTO,
  ModelToUpdateDTO,
  ProjectToCreateDTO,
  ProjectToUpdateDTO,
  RequestError
} from './types'

/**
 * Function to transform a object to a new project instance to create
 * @param object An Object with the data to transform
 * @returns {ProjectToCreateDTO} Return a new project instance
 */
export const toNewProjectToCreate = (object: any): ProjectToCreateDTO => {
  return {
    name: isString(object.name),
    description: isString(object.description)
  }
}

/**
 * Function to transform a object to a new project instance to update
 * @param object An Object with the data to transform
 * @returns {ProjectToUpdateDTO} Return a new project instance
 */
export const toNewProjectToUpdate = (object: any): ProjectToUpdateDTO => {
  const newProjectToUpdate: ProjectToUpdateDTO = {}

  if ('name' in object) {
    isString(object.name)
    newProjectToUpdate.name = object.name
  }

  if ('description' in object) {
    isString(object.description)
    newProjectToUpdate.description = object.description
  }

  return newProjectToUpdate
}

/**
 * Function to transform a object to a new model instance to create
 * @param object An Object with the data to transform
 * @returns {ModelToCreateDTO} Return a new model instance
 */
export const toNewModelToCreate = (object: any): ModelToCreateDTO => {
  return {
    name: isString(object.name),
    description: isString(object.description),
    modelFile: isString(object.modelFile)
  }
}

/**
 * Function to transform a object to a new model instance to update
 * @param object An Object with the data to transform
 * @returns {ModelToUpdateDTO} Return a new model instance
 */
export const toNewModelToUpdate = (object: any): ModelToUpdateDTO => {
  const newModelToUpdate: ModelToUpdateDTO = {}

  if ('name' in object) {
    isString(object.name)
    newModelToUpdate.name = object.name
  }

  if ('description' in object) {
    isString(object.description)
    newModelToUpdate.description = object.description
  }

  if ('modelFile' in object) {
    isString(object.modelFile)
    newModelToUpdate.modelFile = object.modelFile
  }

  return newModelToUpdate
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
