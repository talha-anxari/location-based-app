import { AddSubCategory } from "@/components/AddSubCategory/AddSubCategory";
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

const subcategories = [
  { 
    id: 1,
    title: "Football", 
    category: 'Sports',
    description: "Birthday memorable event",
    // lastLogin: "2022-01-01",
    thumbnail: 'https://img.freepik.com/premium-photo/baby-with-birthday-hat-happy-birthday-hat_1268068-995.jpg?w=740',
  },
  { 
    id: 1,
    title: "Cricket", 
    category: 'Sports',
    description: "Birthday memorable event",
    // lastLogin: "2022-01-01",
    thumbnail: 'https://img.freepik.com/premium-photo/baby-with-birthday-hat-happy-birthday-hat_1268068-995.jpg?w=740',
  },
  { 
    id: 1,
    title: "Tennis",
    category: 'Sports', 
    description: "Birthday memorable event",
    // lastLogin: "2022-01-01",
    thumbnail: 'https://img.freepik.com/premium-photo/baby-with-birthday-hat-happy-birthday-hat_1268068-995.jpg?w=740',
  },

]

export default function SubCategories() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold text-gray-900">Sub Categories</h1>
        <AddSubCategory />
      </div>
      <Table>
      <TableCaption>A list of your recent Sub Categories</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Thumbnail</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subcategories.map((subcategory) => {
          const {id, title, description, category, date, location, thumbnail} = subcategory;
          return (
          <TableRow key={id}>
            <TableCell className="text-right">
              {/* <Image src={profileImage} hanging={40} width={40} className="rounded-md" /> */}
              <img src={thumbnail} hanging={30} width={30} className="rounded-md"/> </TableCell>
            <TableCell className="font-medium">{category}</TableCell>
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
