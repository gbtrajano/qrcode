"use client";

import { useState, useRef } from "react";
import QRCode from "qrcode";

export default function QRCodeGenerator() {
  const [link, setLink] = useState("");
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQRCode = async () => {
    if (!link.trim()) {
      alert("Por favor, insira um link válido.");
      return;
    }

    try {
      const dataUrl = await QRCode.toDataURL(link, {
        width: 320,
        margin: 2,
        color: {
          dark: "#f8fafc",
          light: "#0f172a",
        },
      });
      setQrCodeDataUrl(dataUrl);
    } catch (error) {
      console.error("Erro ao gerar QR Code:", error);
      alert("Erro ao gerar QR Code. Verifique o link.");
    }
  };

  const downloadQRCode = () => {
    if (qrCodeDataUrl) {
      const link = document.createElement("a");
      link.href = qrCodeDataUrl;
      link.download = "qrcode.png";
      link.click();
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/20">
        <div className="space-y-5">
          <label
            htmlFor="link"
            className="block text-sm font-medium text-slate-300"
          >
            URL ou link
          </label>
          <input
            type="url"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://seusite.com"
            className="w-full rounded-2xl border border-orange-400/20 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
          />

          <button
            onClick={generateQRCode}
            className="inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-90"
            style={{ backgroundColor: "#f03612" }}
          >
            Gerar QR Code
          </button>
        </div>
      </div>

      {qrCodeDataUrl && (
        <div className="rounded-3xl border border-orange-400/10 bg-slate-950/90 p-6 shadow-xl shadow-orange-500/10">
          <div className="mb-4 flex flex-col items-center gap-3 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-300/80">
              QR pronto
            </p>
            <p className="text-sm text-slate-300">
              Copie, baixe ou compartilhe o QR Code criado em instantes.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-800/75 bg-slate-900/95 p-5">
            <img
              src={qrCodeDataUrl}
              alt="QR Code gerado"
              className="h-72 w-72 rounded-2xl border border-slate-800/70 bg-slate-950 p-3"
            />
            <button
              onClick={downloadQRCode}
              className="rounded-2xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Baixar QR Code
            </button>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
