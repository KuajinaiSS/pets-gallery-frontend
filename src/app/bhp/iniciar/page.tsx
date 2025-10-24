import Link from "next/link";
import { User, Flag, Timer, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function IniciarPage() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-white">
            <header className="w-full bg-orange-600 flex justify-between items-center px-4 py-3 text-white font-bold text-2xl">
                <span>BHP</span>
                <Link
                    href="/"
                    className="bg-white text-orange-600 rounded-full w-10 h-10 flex items-center justify-center hover:scale-105 transition-transform"
                >
                    <User className="w-6 h-6" />
                </Link>
            </header>

            {/* Contenido principal */}
            <main className="flex flex-col items-center text-center p-4">
                <h1 className="text-xl font-bold mb-2">Mantenimiento Programado</h1>
                <h2 className="text-lg font-semibold">PLS S/N</h2>
                <p className="text-lg font-medium mb-4">19-11-2025</p>

                {/* Imagen del diagrama */}
                <div className="w-full flex justify-top mb-4">
                    <Image
                        src="/images/diagramaflujomantenimiento.png"
                        alt="Diagrama PLS"
                        width={400}
                        height={300}
                        className="max-w-sm w-full h-auto"
                    />
                </div>

                <p className="text-lg font-semibold">Tiempo de Mantenimiento</p>
                <p className="text-md mb-6">3 días: 45 min: 0 segundos</p>

                <p className="text-lg font-semibold">Porcentaje de llenado Total</p>
                <p className="text-3xl font-bold mb-6">0%</p>

                {/* Botón */}
                <Link href="/bhp/en-progreso">
                    <button className="bg-green-400 text-black font-semibold py-2 px-6 rounded-md">
                        Iniciar Actividad
                    </button>
                </Link>
            </main>

            <footer className="w-full bg-orange-600 flex justify-around py-2 text-white">

                <div className="text-center">
                    <Flag className="w-6 h-6 mx-auto" />
                    <p>Iniciar</p>
                </div>

                <div className="text-center opacity-60">
                    <Timer className="w-6 h-6 mx-auto" />
                    <p>En progreso</p>
                </div>

                <div className="text-center opacity-60">
                    <CheckCircle className="w-6 h-6 mx-auto" />
                    <p>Finalizado</p>
                </div>

            </footer>

        </div>
    );
}
