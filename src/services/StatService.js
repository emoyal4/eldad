const STATS = [
  {
    _id: "D-101",
    code: "429SLN9D",
    name: "Protocol 1",
    createdAt: Date.now(),
    voltage: 31,
    cycle: [{ start: Date.now(), end: Date.now() + 5000 }],
    resistance: 34,
    isOnline: true,
    temperature: 21,
    humidity: 34,
    pH: 5.5,
    ec: 1.2,
    imageUrl:
      "https://www.politiv.co.il/wp-content/uploads/2018/11/picture-11.jpg",
  },
  {
    _id: "D-102",
    code: "037FPA9E",
    name: "Protocol 2",
    createdAt: Date.now(),
    voltage: 31,
    cycle: [{ start: Date.now(), end: Date.now() + 5000 }],
    resistance: 34,
    isOnline: true,
    temperature: 21,
    humidity: 34,
    pH: 5.5,
    ec: 1.2,
    imageUrl:
      "https://www.politiv.co.il/wp-content/uploads/2018/11/picture-11.jpg",
  },
  {
    _id: "D-103",
    code: "639JJA9P",
    name: "Protocol 3",
    createdAt: Date.now(),
    voltage: 31,
    cycle: [{ start: Date.now(), end: Date.now() + 5000 }],
    resistance: 34,
    isOnline: true,
    temperature: 21,
    humidity: 34,
    pH: 5.5,
    ec: 1.2,
    imageUrl:
      "https://www.politiv.co.il/wp-content/uploads/2018/11/picture-11.jpg",
  },
];

const query = () => {
  return STATS;
};

const getById = (id) => {
  return STATS.filter((stat) => stat._id === id);
};


export const StatService = {
    query,
    getById,
};