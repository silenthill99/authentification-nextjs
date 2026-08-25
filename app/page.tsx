import prisma from "@/lib/prisma";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";


export default async function Home() {
    const posts = await prisma.post.findMany({
        include: {
            author: true
        }
    })
  return (
      <main className={"container mx-auto"}>
          <h1>Page d&#39;accueil</h1>
          <Table>
              <TableHeader>
                  <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Ecrit par</TableHead>
                      <TableHead>Actions</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                  {posts.map((post) => (
                      <TableRow key={post.id}>
                          <TableCell>{post.id}</TableCell>
                          <TableCell>{post.author.name}</TableCell>
                          <TableCell>
                              <Link href={`/posts/${post.id}`} className={buttonVariants({variant: "link"})}>Voir</Link>
                          </TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </main>
  );
}
