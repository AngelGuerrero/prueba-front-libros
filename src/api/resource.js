/**
 * Authorized copying of this file, via any medium.
 *
 * Proprietary and public.
 *
 * Written by Ángel Guerrero <lasantiagoguerrero@gmail.com>, 2021.
 * */

import service from '@/api/service'
import store from '@/store'

export default class {
  /**
   * URL del recurso a donde se realizarán las peticiones.
   */
  resource = null

  /**
   * Nombre del módulo vuex donde se está utilizando.
   *
   * Esto para propósitos del uso de mutationes,
   * acciones o getters del propio módulo.
   */
  module = null

  withDebug = false

  constructor ({ resource, module, withDebug }) {
    this.resource = resource || ''
    this.module = module || ''
    this.withDebug = withDebug || false
  }

  async get ({ url = this.resource, mutation = null }) {
    this.debug('get', null, url)

    try {
      this.toggleLoadingState(mutation, true)

      return await service({ method: 'GET', url })
    } catch (error) {
      return {
        error: true,
        message: 'Ha ocurrido un error al realizar la petición'
      }
    } finally {
      this.toggleLoadingState(mutation, false)
    }
  }

  async post ({ url = '', payload = {}, mutation = null }) {
    this.debug('post', payload, url)

    try {
      this.toggleLoadingState(mutation, true)

      return await service({
        method: 'POST',
        url: `${this.resource}/${url}`,
        options: { body: JSON.stringify(payload) }
      })
    } catch (error) {
      return error
    } finally {
      this.toggleLoadingState(mutation, false)
    }
  }

  async update ({ id, payload, mutation = null }) {
    const url = `${this.resource}/${id}`

    this.debug('put', payload, url)

    try {
      this.toggleLoadingState(mutation, true)

      return await service({
        method: 'PUT',
        url,
        options: { body: JSON.stringify(payload) }
      })
    } catch (error) {
      return error
    } finally {
      this.toggleLoadingState(mutation, false)
    }
  }

  async delete ({ id, mutation = null }) {
    const url = `${this.resource}/${id}`

    this.debug('delete', id, url)

    try {
      this.toggleLoadingState(mutation, true)

      return await service({
        method: 'DELETE',
        url
      })
    } catch (error) {
      return error
    } finally {
      this.toggleLoadingState(mutation, false)
    }
  }

  debug (method, params = null, url = '') {
    if (!this.withDebug) return null

    const strEndpoint = `module: '${this.module}' - method: '${method}' - endpoint: '${this.resource}${url}'`
    const strParams = params

    console.group('Debug')
    console.log(strEndpoint)
    console.log(`Params: ${JSON.stringify(strParams, null, 4)}`)
    console.groupEnd()

    return { strEndpoint, strParams }
  }

  toggleLoadingState (mutation = null, value = null) {
    if (mutation === null) return

    store.commit(`${this.module}/${mutation}`, value)
  }
}
