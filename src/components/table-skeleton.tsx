import { Skeleton } from "@/components/ui/skeleton"

export function TableSkeleton({ rows = 8, cols = 7 }: { rows?: number; cols?: number }) {
    return (
        <div className="overflow-hidden rounded-lg border mx-5">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        {Array.from({ length: cols }).map((_, i) => (
                            <th key={i} className="px-6 py-3">
                                <Skeleton className="h-4 w-24 bg-gray-400" />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: rows }).map((_, rowIdx) => (
                        <tr key={rowIdx}>
                            {Array.from({ length: cols }).map((_, colIdx) => (
                                <td key={colIdx} className="px-6 py-4">
                                    <Skeleton className="h-4 w-full bg-gray-400" />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}