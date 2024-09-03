export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  // Fetch business data from your database
  // This is a placeholder, replace with your actual data fetching logic
  const business = await fetchBusinessById(id)
  if (!business) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Business not found'
    })
  }
  return business
})