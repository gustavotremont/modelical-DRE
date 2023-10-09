export interface Model {
  id: number
  name: string
  description: string
  modelFile: string
  id_project: number
}

export interface Project {
  id: number
  name: string
  description: string
}

export class RequestError extends Error {
  constructor({ message }: { message: string }) {
    super(message)
  }
}

export type ModelDTO = Omit<Model, 'id' | 'id_project'>
export type ProjectDTO = Omit<Model, 'id'>
