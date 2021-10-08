/**
 * Authorized copying of this file, via any medium.
 *
 * Proprietary and public.
 *
 * Written by Ángel Guerrero <lasantiagoguerrero@gmail.com>, 2021.
 * */

/**
 * Este archivo service implementa un interceptor para
 * para todas las peticiones vía ajax.
 *
 * La finalidad es controlar los posibles errores que pudieran llegar a ocurrir,
 * desde aquí se pueden ejecutar funciones del router o funciones del store
 * para modificar la información actual del usuario.
 */
import router from '@/router'
import store from '@/store'

const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_PROD_BASE_URL
    : process.env.VUE_APP_LOCAL_BASE_URL

// console.log('baseURL :>> ', baseURL)

/**
 * Función para cerrar sesión.
 * TODO: Guardar el token en localstorage.
 */
const closeSession = () => {
  router.push('/login')
}

const handleServiceResponse = response => response

const handleServiceError = error => {
  console.log('error :>> ', error)

  /* Si el usuario actual no está autenticado */
  if (error && error.code === 419) {
    closeSession()
  }

  return error
}

const service = async ({ method, url, headers, options = {} }) => {
  const accessToken = store.getters['authModule/getUserToken']

  return fetch(`${baseURL}/${url}`, {
    method,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      'x-access-token': accessToken
    },
    ...options
  })
    .then(response => response.json())
    .then(response => handleServiceResponse(response))
    .catch(error => handleServiceError(error))
}

export default service
