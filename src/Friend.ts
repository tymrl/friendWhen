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
    name: "Aviendha",
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
];
