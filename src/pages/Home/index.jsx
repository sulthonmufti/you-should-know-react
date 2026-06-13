import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import ProgressBar from '../../components/ui/ProgressBar'

export default function Home() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h1>Area Uji Coba Komponen UI</h1>
      <Card>
        <h2>Profil Materi</h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Badge level="Dasar" />
          <Badge level="Menengah" />
          <Badge level="Lanjutan" />
        </div>
        <p>Progres Belajar:</p>
        <ProgressBar progress={45} />
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button variant="primary">Mulai Belajar</Button>
          <Button variant="ghost">Lihat Silabus</Button>
          <Button variant="danger">Reset Progress</Button>
        </div>
      </Card>
    </div>
  )
}