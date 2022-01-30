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

export const mockData = [
  {
    name: "Rand al'Thor",
    id: "85224541-ad37-4322-a60a-257e112b0951",
    lastSeen: moment().subtract(6, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Egwene al'Vere",
    id: "afcdcf83-589d-488f-9cb7-babc33b2c0f8",
    lastSeen: moment().subtract(8, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Perrin Aybara",
    id: "98cadd16-0d24-48ad-9dcf-1f8acafb709f",
    lastSeen: moment().subtract(6, "days").toISOString(),
    daysPerContact: 8,
  },
  {
    name: "Nynaeve al'Maera",
    id: "e4f777bc-2c4d-4a34-b89b-84f2617b9e19",
    lastSeen: moment().subtract(2, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Mat Cauthon",
    id: "4375974f-0aa0-41ad-903a-ed013c3e7d02",
    lastSeen: moment().subtract(5, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Min Farshaw",
    id: "ae32fee4-b5ef-4481-86dd-069719493f86",
    lastSeen: moment().subtract(7, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Elayne Trakand",
    id: "f65a7d75-5764-45ba-87e3-425df00cf298",
    lastSeen: moment().subtract(4, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Aviendha",
    id: "2737f305-de5f-4f8a-9da7-45721b479c00",
    lastSeen: moment().subtract(1, "days").toISOString(),
    daysPerContact: 4,
  },
  {
    name: "Thom Merrilin",
    id: "e84872a5-845a-453b-bae2-00ba92433dbc",
    lastSeen: moment().subtract(17, "days").toISOString(),
    daysPerContact: 8,
  },
];
