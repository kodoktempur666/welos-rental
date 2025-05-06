import { db } from '@/database/drizzle'
import { kendaraan } from '@/database/schema'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const Home = async () => {
  const dataKendaraan = await db.select().from(kendaraan)

  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {dataKendaraan.map((item) => (
        <Card key={item.id} className="rounded-2xl shadow-lg">
          <CardHeader>
            <p>{item.gambar}</p>
            <CardTitle className="text-lg mt-2">
              {item.merk} {item.tipe}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">{item.deskripsi}</p>
            <p className="text-primary font-semibold">
              Rp{item.harga.toLocaleString('id-ID')}
            </p>
          </CardContent>
        </Card>
      ))}
    </main>
  )
}

export default Home
