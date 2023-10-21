import NotesList from './components/notes-list'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 text-center">Hello World.</div>
      {/* @ts-ignore */}
      <NotesList />
    </main>
  )
}
