// stores/businesses.js
import { defineStore } from 'pinia';
import { useNuxtApp, useRuntimeConfig } from '#app';
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
    },

    googleMapUrl: (state) => {
      if (!state.selectedBusiness || !state.apiKey) return ''
      return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(state.selectedBusiness.location)}`;
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

    //initialise api
    initApiKey() {
      const config = useRuntimeConfig()
      this.apiKey = config.public.googleMapsApiKey
    },

  }
});
