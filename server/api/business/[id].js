import { doc, getDoc } from 'firebase/firestore';
import { useNuxtApp } from '#app';

export default defineEventHandler(async (event) => {
  const { firestore } = useNuxtApp();
  const id = event.context.params.id;

  // Reference to the business document in Firestore
  const businessRef = doc(firestore, 'businesses', id);

  try {
    const businessSnap = await getDoc(businessRef);

    if (businessSnap.exists()) {
      const business = businessSnap.data();
      return { id: businessSnap.id, ...business };
    } else {
      throw createError({
        statusCode: 404,
        statusMessage: 'Business not found',
      });
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching business data',
    });
  }
});
