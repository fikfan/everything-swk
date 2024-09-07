// stores/businesses.js
import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

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
    }
  },
  actions: {
    // Fetch all businesses from Firestore
    async fetchBusinesses() {
      const { $firestore } = useNuxtApp();
      this.loading = true;

      try {
        const querySnapshot = await getDocs(collection($firestore, 'businesses'));
        const businesses = [];

        querySnapshot.forEach(doc => {
          businesses.push({ id: doc.id, ...doc.data() });
        });

        this.businesses = businesses;
      } catch (error) {
        console.error("Error fetching businesses: ", error);
      } finally {
        this.loading = false;
      }
    },

    // Set the selected category for filtering
    setSelectedCategory(category) {
      this.selectedCategory = category;
    },

    // Fetch a specific business by ID from Firestore
    async getBusinessById(id) {
      const { $firestore } = useNuxtApp();

      try {
        const businessDoc = doc($firestore, 'businesses', id);
        const businessSnap = await getDoc(businessDoc);

        if (businessSnap.exists()) {
          return { id: businessSnap.id, ...businessSnap.data() };
        } else {
          console.error("Business not found");
          return null;
        }
      } catch (error) {
        console.error("Error fetching business: ", error);
        return null;
      }
    }
  }
});
