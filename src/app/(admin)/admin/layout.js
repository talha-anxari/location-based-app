import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import AreaChart from "./dashboard/page";
import Dashboard from "./dashboard/page";

export default function Layout({children}) {
  return (
    <html>
        <body>
    <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className='flex justify-center'>
        <Link href={'dashboard'}>
            <TabsTrigger value="dashboard">
                Dashboard
            </TabsTrigger>
        </Link>
        <Link href={'users'}>
            <TabsTrigger value="users">Users</TabsTrigger>
        </Link>
        <Link href={'events'}>
            <TabsTrigger value="events">Events</TabsTrigger>
        </Link>
        <Link href={'categories'}>
            <TabsTrigger value="categories">Categories</TabsTrigger>
        </Link>
        <Link href={'subcategories'}>
            <TabsTrigger value="subcategories">Sub Categories</TabsTrigger>
        </Link>
        </TabsList>
        <TabsContent value="dashboard">{children}</TabsContent>
        <TabsContent value="users">{children}</TabsContent>
        <TabsContent value="events">{children}</TabsContent>
        <TabsContent value="categories">{children}</TabsContent>
        <TabsContent value="subcategories">{children}</TabsContent>
    </Tabs>
        </body>
    </html>
  );
}