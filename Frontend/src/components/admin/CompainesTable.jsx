import React from 'react'
import { Table, TableCell, TableHead, TableHeader, TableBody } from '../ui/table'

const CompainesTable = () => {
  return (
    <div>
        <Table>
            <TableHeader>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Action</TableHead>
            </TableHeader>
            <TableBody>
                <TableCell>Google</TableCell>
                <TableCell>07-10-2024</TableCell>
            </TableBody>
        </Table>
    </div>
  )
}

export default CompainesTable