import { getVideogameConsoles } from '../../config/di/container'

export async function GET(): Promise<Response> {
  const data = await getVideogameConsoles.execute()

  return Response.json(data)
}
