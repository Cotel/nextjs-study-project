import { getAllManufacturers } from '../../config/di/container'

export async function GET(): Promise<Response> {
  const manufacturers = await getAllManufacturers.execute()

  return Response.json(manufacturers)
}
