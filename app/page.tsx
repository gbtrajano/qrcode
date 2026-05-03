import QRCodeGenerator from "./components/QRCodeGenerator";

export default function Home() {
  return (
    <main
      className="min-h-screen text-slate-100"
      style={{
        background: "linear-gradient(180deg, #080a16 0%, #111827 100%)",
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-4xl border border-slate-800/80 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <span className="pointer-events-none absolute right-6 top-6 text-[11px] uppercase tracking-[0.35em] text-slate-400/40">
            SupplySistemas
          </span>
          <div className="mb-8 flex items-center justify-between gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/90 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300/80">
                Gerador
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-white">
                Crie seu QR Code agora
              </h1>
            </div>
            <p className="text-sm text-slate-400">
              Insira um link, gere o código e baixe direto para uso.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/95 p-8 shadow-xl shadow-slate-950/20">
            <div className="mb-6 rounded-3xl bg-slate-950/90 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300/80">
                Criar QR Code
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Simples, direto e funcional
              </h2>
            </div>

            <QRCodeGenerator />
          </div>
        </div>
      </div>
    </main>
  );
}
