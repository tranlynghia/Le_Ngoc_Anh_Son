export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  caption?: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773714430134-Sw7CMmCWrCVgRXEXyTbZXMhPJtUQ1q.jpeg",
    alt: "Elevator selfie in denim",
    category: "Elevator",
    caption: "Denim mood"
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773714430123-I8liSkJUxhKeRfC83VAxNQ3BaSgKXA.jpeg",
    alt: "Mirror selfie with mask",
    category: "Elevator",
    caption: "Urban vibes"
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773714430109-WjHjg5gd3SNp1nf4YHdf8gAKLkvLUD.jpeg",
    alt: "Walking in the park",
    category: "Street",
    caption: "Park walks"
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773714430138-pszkH5LNARYqmXR4rreYC2U1yc4eDo.jpeg",
    alt: "Night at the beach",
    category: "Night",
    caption: "Beach night"
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773714430149-tCoCti3k7QEgqjrHW7GKX8mYb9O5gp.jpeg",
    alt: "Waiting for elevator",
    category: "Daily Fit",
    caption: "Casual day"
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773714430143-p413gUbBtdKJvMKnVFriP4hvjIgy9W.jpeg",
    alt: "Elevator mirror shot",
    category: "Elevator",
    caption: "Reflection"
  },
  {
    id: 7,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773714430129-tpNSqSfsphEn8pBr92HtkKWW5smF8s.jpeg",
    alt: "Playing billiard with friend",
    category: "Friends",
    caption: "Game time"
  },
  {
    id: 8,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773714430118-jsrhtOlcBsgmHAtM5je13ZWbREcniI.jpeg",
    alt: "Gym session",
    category: "Daily Fit",
    caption: "Gym day"
  },
  {
    id: 9,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773714430114-KrlYYv5gtkmf2yewkpL8tC8L7OvtSP.jpeg",
    alt: "Barcelona jersey selfie",
    category: "Daily Fit",
    caption: "Match day"
  }
]

export const categories = ["All", "Elevator", "Street", "Daily Fit", "Friends", "Night"]
