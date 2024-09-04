// stores/businesses.js
import { defineStore } from 'pinia'

export const useBusinessStore = defineStore('businesses', {
  state: () => ({
    businesses: [
      {
        id: 1,
        name: "Acme Plumbing",
        description: "Professional plumbing services for residential and commercial properties.",
        website: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: "Services",
        image: "../assets/images/bocchi.jpg",
        hours: "Mon-Fri: 8am-5pm, Sat: 9am-3pm",
        phone: "+60-123 4567",
        location: "Level 1 & 2, Block 5, Saradise Edge, Lot 19844, 93350 Kuching",
        status: 'Open'
      },
      {
        id: 2,
        name: "Bloom Florist",
        description: "Locally sourced flowers and custom arrangements for all occasions.",
        website: "https://www.bloomflorist.com",
        category: "Retail",
        image: "../assets/images/bocchi.jpg",
        hours: "Mon-Fri: 8am-5pm, Sat: 9am-3pm",
        phone: "+60-123 4567",
        location: "Level 1 & 2, Block 5, Saradise Edge, Lot 19844, 93350 Kuching",
        status: "Closed"
      },
      {
        id: 3,
        name: "Cozy Cafe",
        description: "Cozy neighborhood cafe serving fresh-brewed coffee and homemade pastries.",
        website: "https://www.cozycafe.com",
        category: "Food & Drink",
        image: "../assets/images/bocchi.jpg",
        phone: "+60-123 4567",
        hours: "Mon-Fri: 8am-5pm, Sat: 9am-3pm",
        location: "Level 1 & 2, Block 5, Saradise Edge, Lot 19844, 93350 Kuching",
        status: "Open"
      },
      {
        id: 4,
        name: "Fitness Emporium",
        description: "Fully equipped gym with personal training and group fitness classes.",
        website: "https://www.fitnessemporium.com",
        category: "Services",
        image: "../assets/images/bocchi.jpg",
        phone: "+60-123 4567",
        hours: "Mon-Fri: 8am-5pm, Sat: 9am-3pm",
        location: "Level 1 & 2, Block 5, Saradise Edge, Lot 19844, 93350 Kuching",
        status: "Temporarily Closed"
      },
      {
        id: 5,
        name: "Green Thumb Nursery",
        description: "Wide selection of plants, gardening supplies, and landscaping services.",
        website: "https://www.greenthumb.com",
        category: "Retail",
        image: "../assets/images/bocchi.jpg",
        phone: "+60-123 4567",
        hours: "Mon-Fri: 8am-5pm, Sat: 9am-3pm",
        location: "Level 1 & 2, Block 5, Saradise Edge, Lot 19844, 93350 Kuching",
        status: "Open"
      },
      {
        id: 6,
        name: "Harmony Yoga Studio",
        description: "Peaceful studio offering a variety of yoga classes for all levels.",
        website: "https://www.harmonyyoga.com",
        category: "Services",
        image: "../assets/images/bocchi.jpg",
        phone: "+60-123 4567",
        hours: "Mon-Fri: 8am-5pm, Sat: 9am-3pm",
        location: "Level 1 & 2, Block 5, Saradise Edge, Lot 19844, 93350 Kuching",
        status: "Open"
      },
    ],
    categories: ['All', 'Services', 'Retail', 'Food & Drink'],
    selectedCategory: 'All'
  }),
  getters: {
    filteredBusinesses: (state) => {
      if (state.selectedCategory === 'All') {
        return state.businesses
      } else {
        return state.businesses.filter(business => business.category === state.selectedCategory)
      }
    }
  },
  actions: {
    setSelectedCategory(category) {
      this.selectedCategory = category
    },
    getBusinessById(id) {
      return this.businesses.find(business => business.id === parseInt(id))
    }
  }
})