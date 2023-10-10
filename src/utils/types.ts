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
  status: number
  constructor({ message, status }: { message: string; status: number }) {
    super(message)
    this.status = status
  }
}

export type ModelToCreateDTO = Omit<Model, 'id' | 'projectId'>
export type ProjectToCreateDTO = Omit<Project, 'id'>

export type ProjectToUpdateDTO = Partial<ProjectToCreateDTO>
export type ModelToUpdateDTO = Partial<ModelToCreateDTO>
