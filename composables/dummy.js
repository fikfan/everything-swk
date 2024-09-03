import { ref } from 'vue'

export const useBusinesses = () => {
  const businesses = ref([
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
  ])

  const selectedCategory = ref('all')

  const filteredBusinesses = computed(() => {
    if (selectedCategory.value === 'all') {
      return businesses.value
    } else {
      return businesses.value.filter((business) => business.category === selectedCategory.value)
    }
  })

  // Function to change the selected category
  const setSelectedCategory = (category) => {
    selectedCategory.value = category
  }

  const getBusinessById = (id) => {
    return businesses.value.find(business => business.id === parseInt(id))
  }

  return { businesses, getBusinessById, filteredBusinesses, setSelectedCategory, selectedCategory }
}