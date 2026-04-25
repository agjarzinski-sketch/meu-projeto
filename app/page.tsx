export default function Home() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const configured = Boolean(
    supabaseUrl && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">Meu Projeto</h1>
      <p className="mt-4 text-lg">Next.js + Supabase</p>
      <p className="mt-2 text-sm text-gray-600">
        Supabase: {configured ? "configurado" : "nao configurado"}
      </p>
      {supabaseUrl && (
        <p className="mt-1 text-xs text-gray-500">{supabaseUrl}</p>
      )}
    </main>
  );
}
