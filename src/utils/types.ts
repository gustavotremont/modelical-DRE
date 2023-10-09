/* eslint-disable @typescript-eslint/space-before-function-paren */
export interface Model {
  id: number
  name: string
  description: string
  modelFile: string
  projectId: number
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

export type ModelDTO = Omit<Model, 'id' | 'projectId'>
export type ProjectDTO = Omit<Project, 'id'>
