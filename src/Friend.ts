import moment from "moment";

export type Friend = {
  name: string;
  id: string;
  lastSeen: string;
  daysPerContact: number;
};

export const periodsElapsed = (friend: Friend) => {
  return (
    moment.duration(moment().diff(friend.lastSeen)).asDays() /
    friend.daysPerContact
  );
};

const chars =
  "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789";

export const makeFriendId = () => {
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += chars[Math.floor(Math.random() * 62)];
  }
  return id;
};

export const mockData = [
  {
    name: "Rand al'Thor",
    id: makeFriendId(),
    lastSeen: moment().subtract(6, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Egwene al'Vere",
    id: makeFriendId(),
    lastSeen: moment().subtract(8, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Perrin Aybara",
    id: makeFriendId(),
    lastSeen: moment().subtract(6, "days").toISOString(),
    daysPerContact: 8,
  },
  {
    name: "Nynaeve al'Maera",
    id: makeFriendId(),
    lastSeen: moment().subtract(2, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Mat Cauthon",
    id: makeFriendId(),
    lastSeen: moment().subtract(5, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Min Farshaw",
    id: makeFriendId(),
    lastSeen: moment().subtract(7, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Elayne Trakand",
    id: makeFriendId(),
    lastSeen: moment().subtract(4, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Aviendha of the Nine Valleys sept of the Taardad Aiel",
    id: makeFriendId(),
    lastSeen: moment().subtract(1, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Thom Merrilin",
    id: makeFriendId(),
    lastSeen: moment().subtract(17, "days").toISOString(),
    daysPerContact: 8,
  },
  {
    name: "Faile Bashere",
    id: makeFriendId(),
    lastSeen: moment().subtract(12, "days").toISOString(),
    daysPerContact: 16,
  },
  {
    name: "Moiraine Damodred",
    id: makeFriendId(),
    lastSeen: moment().subtract(12, "days").toISOString(),
    daysPerContact: 8,
  },
  {
    name: "al'Lan Mandragoran",
    id: makeFriendId(),
    lastSeen: moment().subtract(4, "days").toISOString(),
    daysPerContact: 8,
  },
  {
    name: "Siuan Sanche",
    id: makeFriendId(),
    lastSeen: moment().subtract(11, "days").toISOString(),
    daysPerContact: 8,
  },
  {
    name: "Loial son of Arent son of Halan",
    id: makeFriendId(),
    lastSeen: moment().subtract(180, "days").toISOString(),
    daysPerContact: 365,
  },
];
