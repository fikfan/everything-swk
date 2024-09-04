export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  // fetch business data from database
  // replace with actual data fetching logic
  const business = await fetchBusinessById(id)
  if (!business) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Business not found'
    })
  }
  return business
})