// stores/businesses.js
import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import { collection, getDocs, doc, getDoc, getFirestore } from 'firebase/firestore';

export const useBusinessStore = defineStore('businesses', {
  state: () => ({
    businesses: [],
    categories: ['All', 'Services', 'Retail', 'Food & Drink'],
    selectedCategory: 'All',
    loading: false,
  }),
  getters: {
    filteredBusinesses: (state) => {
      if (state.selectedCategory === 'All') {
        return state.businesses;
      } else {
        return state.businesses.filter(business => business.category === state.selectedCategory);
      }
    },

    getBusinessById: (state) => (id) => {
      return state.businesses.find(business => business.id === id)
    }

  },
  actions: {
    // Fetch all businesses from Firestore
    async fetchBusinesses() {
      if (this.businesses.length > 0) return;

      this.isLoading = true
      try {
        const { $firestore } = useNuxtApp()
        if (!$firestore) {
          return
        }
        const businessesCol = collection($firestore, 'businesses')
        const businessSnapshot = await getDocs(businessesCol)
        this.businesses = businessSnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
      } catch (error) {
      } finally {
        this.isLoading = false
      }
    },
    // Set the selected category for filtering
    setSelectedCategory(category) {
      this.selectedCategory = category;
    },

    // Fetch a specific business by ID from Firestore
    // async getBusinessById(id) {
    //   const { $firestore } = useNuxtApp();

    //   try {
    //     const businessDoc = doc($firestore, 'businesses', id);
    //     const businessSnap = await getDoc(businessDoc);

    //     if (businessSnap.exists()) {
    //       return { id: businessSnap.id, ...businessSnap.data() };
    //     } else {
    //       console.error("Business not found");
    //       return null;
    //     }
    //   } catch (error) {
    //     console.error("Error fetching business: ", error);
    //     return null;
    //   }
    // }
  }
});
