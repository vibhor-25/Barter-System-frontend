const receivedRequests = [
  {
    id: 1,
    sellerProduct: {
      id: 101,
      title: "Vintage Record Player",
      desc: "Fully functional turntable with wooden base and built-in preamp.",
      img: "https://picsum.photos/id/1060/600/400",
      condition: "Used - Good",
      seller: {
        name: "Aisha Gomez",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4.7,
        location: "Brooklyn, NY"
      }
    },
    buyerProduct: {
      id: 201,
      title: "Portable Espresso Maker",
      desc: "Handheld espresso maker, compact for travel.",
      img: "https://picsum.photos/id/1080/600/400"
    }
  },

  {
    id: 2,
    sellerProduct: {
      id: 102,
      title: "Mountain Bike Helmet",
      desc: "Lightweight helmet with MIPS protection, size M.",
      img: "https://picsum.photos/id/1018/600/400",
      condition: "Like New",
      seller: {
        name: "Marcus Lee",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        rating: 4.2,
        location: "Portland, OR"
      }
    },
    buyerProduct: {
      id: 202,
      title: "Indoor Plant (Monstera)",
      desc: "Healthy medium Monstera in 6\" pot.",
      img: "https://picsum.photos/id/1025/600/400"
    }
  },

  {
    id: 3,
    sellerProduct: {
      id: 103,
      title: "Leather Messenger Bag",
      desc: "Handmade leather bag fits 13\" laptop, a few light scratches.",
      img: "https://picsum.photos/id/1005/600/400",
      condition: "Used - Very Good",
      seller: {
        name: "Priya Patel",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 4.9,
        location: "Austin, TX"
      }
    },
    buyerProduct: {
      id: 203,
      title: "Acoustic Guitar",
      desc: "Full-size acoustic guitar with case, recently restrung.",
      img: "https://picsum.photos/id/1020/600/400"
    }
  }
];

export default receivedRequests;
