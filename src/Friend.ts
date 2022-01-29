import moment from "moment";

export class Friend {
  name: string;
  id: string;
  lastSeen: moment.Moment;
  daysPerContact: number;

  constructor(
    name: string,
    id: string,
    lastSeen: string,
    daysPerContact: number
  ) {
    this.name = name;
    this.id = id;
    this.lastSeen = moment(new Date(lastSeen));
    this.daysPerContact = daysPerContact;
  }

  periodsElapsed() {
    return (
      moment.duration(moment().diff(this.lastSeen)).asDays() /
      this.daysPerContact
    );
  }
}

export const mockData = [
  new Friend(
    "Rand al'Thor",
    "85224541-ad37-4322-a60a-257e112b0951",
    moment().subtract(6, "days").toISOString(),
    4
  ),
  new Friend(
    "Egwene al'Vere",
    "afcdcf83-589d-488f-9cb7-babc33b2c0f8",
    moment().subtract(8, "days").toISOString(),
    4
  ),
  new Friend(
    "Perrin Aybara",
    "98cadd16-0d24-48ad-9dcf-1f8acafb709f",
    moment().subtract(6, "days").toISOString(),
    8
  ),
  new Friend(
    "Nynaeve al'Maera",
    "e4f777bc-2c4d-4a34-b89b-84f2617b9e19",
    moment().subtract(2, "days").toISOString(),
    4
  ),
  new Friend(
    "Mat Cauthon",
    "4375974f-0aa0-41ad-903a-ed013c3e7d02",
    moment().subtract(5, "days").toISOString(),
    4
  ),
  new Friend(
    "Min Farshaw",
    "ae32fee4-b5ef-4481-86dd-069719493f86",
    moment().subtract(7, "days").toISOString(),
    4
  ),
  new Friend(
    "Elayne Trakand",
    "f65a7d75-5764-45ba-87e3-425df00cf298",
    moment().subtract(4, "days").toISOString(),
    4
  ),
  new Friend(
    "Aviendha",
    "2737f305-de5f-4f8a-9da7-45721b479c00",
    moment().subtract(1, "days").toISOString(),
    4
  ),
  new Friend(
    "Thom Merrilin",
    "e84872a5-845a-453b-bae2-00ba92433dbc",
    moment().subtract(17, "days").toISOString(),
    8
  ),
];
