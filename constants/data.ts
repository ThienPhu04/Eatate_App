import icons from "./icons";
import icon from "./icons" 
import images from "./images";  

export const cards = [  
    {  
      title: "Card 1",  
      location: "Location 1",  
      price: "$100",  
      rating: 4.8,  
      category: "house",  
      image: images.newYork,  
    },  
    {  
      title: "Card 2",  
      location: "Location 2",  
      price: "$200",  
      rating: 3,  
      category: "house",  
      image: images.japan,  
    },  
    
    // New cards  
    {  
      title: "Card 3",  
      location: "Location 3",  
      price: "$150",  
      rating: 4.5,  
      category: "house",  
      image: images.paris,  
    },  
    {  
      title: "Card 4",  
      location: "Location 4",  
      price: "$250",  
      rating: 5.0,  
      category: "apartment",  
      image: images.rome,  
    },  
    {  
      title: "Card 5",  
      location: "Location 5",  
      price: "$300",  
      rating: 4.2,  
      category: "villa",  
      image: images.bali,  
    },  
    {  
      title: "Card 6",  
      location: "Location 6",  
      price: "$175",  
      rating: 4.7,  
      category: "condo",  
      image: images.sydney,  
    },  
    {  
      title: "Card 7",  
      location: "Location 7",  
      price: "$400",  
      rating: 4.9,  
      category: "house",  
      image: images.london,  
    }  
  ];  
  export const categories = [
    {
      id: 1,
      title: "House",
      catrgory : "house",
    },
    {
      id: 2,
      title: "Apartment",
      catrgory: "apartment",
    },
    {
      id: 3,
      title: "Villa",
      catrgory: "villa",

    },
    {
      id: 4,
      title: "Condo",
      category : "condo",
  
    },
    {
      id: 5,
      title: "Cabin",
      category: "cabin",
  
    },
    {
      id: 6,
      title: "Beach House",
      category: "beach-house",
   
    }
  ];

  export const facilities = [
  {
    title: "Laundry",
    icon: icons.laundry,
  },
  {
    title: "Car Parking",
    icon: icons.carPark,
  },
  {
    title: "Sports Center",
    icon: icons.run,
  },
  {
    title: "Cutlery",
    icon: icons.cutlery,
  },
  {
    title: "Gym",
    icon: icons.dumbell,
  },
  {
    title: "Swimming pool",
    icon: icons.swim,
  },
  {
    title: "Wifi",
    icon: icons.wifi,
  },
  {
    title: "Pet Center",
    icon: icons.dog,
  },
];

  export const settings = [
    {
      icon: icon.calendar,
      title: "My Booking",
    },
    {
      icon: icon.wallet,
      title: "Payment",
    },
    {
      icon: icon.person,
      title: "Profile",
    },
    {
      icon: icon.bell,
      title: "Notifications",
    },
    {
      icon: icon.shield,
      title: "Security",
    },
    {
      icon: icon.language,
      title: "Language",
    },
    {
      icon: icon.calendar,
      title: "Help Center",
    },
    {
      icon: icon.info,
      title: "Invite Friends",
    },
  ]