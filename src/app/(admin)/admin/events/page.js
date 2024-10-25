import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Image } from "lucide-react";

const events = [
  { 
    id: 1,
    title: "Wedding Event", 
    description: "wedding memorable event",
    date: new Date().toLocaleDateString(),
    // lastLogin: "2022-01-01",
    thumbnail: 'https://img.freepik.com/premium-photo/wedding-ceremony-with-flowers-candles-lights_1271836-4580.jpg?w=740',
    location: 'Karachi'
  },
  { 
    id: 2,
    title: "Birthday Event",
    description: "birthday memorable event",
    date: new Date().toLocaleDateString(),
    // lastLogin: "2022-01-01",
    thumbnail: 'https://img.freepik.com/free-vector/cute-happy-birthday-neon-balloons_1017-30921.jpg?t=st=1729801244~exp=1729804844~hmac=5b80a19243e62fd93f90cc41e1682627a07e02429ae5511befe46281b85e92cf&w=996',
    location: 'Sialkot'
  },
  { 
    id: 3,
    title: "Sports Events", 
    description: "sports memorable event",
    date: new Date().toLocaleDateString(),
    // lastLogin: "2022-01-01",
    thumbnail: 'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1729801276~exp=1729804876~hmac=291a51645c14e1f59d6351f097880fb0a738d0749e9a327480a370ad04b6a753&w=996',
    location: 'Multan'
  },
]

export default function Events() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold text-gray-900">Events</h1>
      </div>
      <Table>
      <TableCaption>A list of your Events</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Thumbnail</TableHead>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => {
          const {id, title, description, date, location, thumbnail} = event;
          return (
          <TableRow key={id}>
            <TableCell className="text-right">
              {/* <Image src={profileImage} hanging={40} width={40} className="rounded-md" /> */}
              <img src={thumbnail} hanging={30} width={30} className="rounded-md"/> </TableCell>
            <TableCell className="font-medium">{title}</TableCell>
            <TableCell>{description}</TableCell>
            <TableCell>{location}</TableCell>
            <TableCell>{date}</TableCell>
          </TableRow>
          )

})}
      </TableBody>
    </Table>
    </div>
  );
}
