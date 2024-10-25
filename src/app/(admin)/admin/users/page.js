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

const users = [
  { 
    id: 1,
    name: "John Doe", 
    email: "john@example.com",
    events: 5,
    // lastLogin: "2022-01-01",
    profileImage: 'https://img.freepik.com/premium-photo/male-worker-wearing-green-yellow-color-kit-isolated-white-background_1029679-144270.jpg?w=740',
    location: 'Karachi'
  },
  { 
    id: 2,
    name: "Kevin Smith", 
    email: "smith@example.com",
    events: 5,
    // lastLogin: "2022-01-01",
    profileImage: 'https://img.freepik.com/premium-photo/male-barber-blue-color-kit-isolated-white-background_1029679-133749.jpg?w=740',
    location: 'Lahore'
  },
  { 
    id: 3,
    name: "Kane William", 
    email: "william@example.com",
    events: 5,
    // lastLogin: "2022-01-01",
    profileImage: 'https://img.freepik.com/free-photo/portrait-beautiful-woman_144627-7888.jpg?t=st=1729799895~exp=1729803495~hmac=57d123a6521a5107966d077b70eedb18e491f71ae4384ae03dd509c4daeb0531&w=740',
    location: 'Islamabad'
  },
];

export default function Users() {
  return (
    <div className="min-h-screen px-10">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold text-gray-900">Users</h1>
      </div>
      <Table>
      <TableCaption>A list of your recent Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Profile Image</TableHead>
          <TableHead className="w-[100px]">Full Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-right">Events</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => {
          const {id, name, email, events, location, profileImage} = user
          return (
          <TableRow key={name}>
            <TableCell className="text-right">
              {/* <Image src={profileImage} hanging={40} width={40} className="rounded-md" /> */}
              <img src={profileImage} hanging={30} width={30} className="rounded-md"/> </TableCell>
            <TableCell className="font-medium">{name}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{location}</TableCell>
            <TableCell>{events}</TableCell>
          </TableRow>
          )

})}
      </TableBody>
    </Table>
    </div>
  );
}
