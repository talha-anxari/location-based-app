import { AddCategory } from "@/components/AddCategory/AddCategory";
import { Button } from "@/components/ui/button";
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

const categories = [
  { 
    id: 1,
    title: "Birthday", 
    description: "Birthday memorable event",
    // lastLogin: "2022-01-01",
    thumbnail: 'https://img.freepik.com/premium-photo/baby-with-birthday-hat-happy-birthday-hat_1268068-995.jpg?w=740',
  },
  { 
    id: 1,
    title: "Sports", 
    description: "Birthday memorable event",
    // lastLogin: "2022-01-01",
    thumbnail: 'https://img.freepik.com/premium-photo/baby-with-birthday-hat-happy-birthday-hat_1268068-995.jpg?w=740',
  },
  { 
    id: 1,
    title: "Indoor Sports", 
    description: "Birthday memorable event",
    // lastLogin: "2022-01-01",
    thumbnail: 'https://img.freepik.com/premium-photo/baby-with-birthday-hat-happy-birthday-hat_1268068-995.jpg?w=740',
  },

]

export default function Categories() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
        <AddCategory />
      </div>
      <Table>
      <TableCaption>A list of your recent Categories</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Thumbnail</TableHead>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => {
          const {id, title, description, date, location, thumbnail} = category;
          return (
          <TableRow key={id}>
            <TableCell className="text-right">
              {/* <Image src={profileImage} hanging={40} width={40} className="rounded-md" /> */}
              <img src={thumbnail} hanging={30} width={30} className="rounded-md"/> </TableCell>
            <TableCell className="font-medium">{title}</TableCell>
            <TableCell>{description}</TableCell>
          </TableRow>
          )

})}
      </TableBody>
    </Table>
    </div>
  );
}
