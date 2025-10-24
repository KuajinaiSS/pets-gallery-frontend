import Link from "next/link";
import { User, Flag, Timer, CheckCircle } from "lucide-react";

export default function FinalizadoPage() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-gray-800 text-white">
            <header className="w-full bg-orange-600 flex justify-between items-center px-4 py-3 text-white font-bold text-2xl">
                <span>BHP</span>
                <Link
                    href="/"
                    className="bg-white text-orange-600 rounded-full w-10 h-10 flex items-center justify-center hover:scale-105 transition-transform"
                >
                    <User className="w-6 h-6" />
                </Link>
            </header>

            <main className="flex flex-col items-center justify-center text-center flex-grow">
                <h1 className="text-2xl font-bold mb-6">Actividad Finalizada</h1>

                <Link href="/bhp/iniciar">
                    <button className="bg-green-400 text-black font-semibold py-2 px-6 rounded-md">
                        Regresar al Menú
                    </button>
                </Link>
            </main>

            <footer className="w-full bg-orange-600 flex justify-around py-2 text-white">

                <div className="text-center opacity-60">
                    <Flag className="w-6 h-6 mx-auto" />
                    <p>Iniciar</p>
                </div>

                <div className="text-center opacity-60">
                    <Timer className="w-6 h-6 mx-auto" />
                    <p>En progreso</p>
                </div>

                <div className="text-center">
                    <CheckCircle className="w-6 h-6 mx-auto" />
                    <p>Finalizado</p>
                </div>

            </footer>
        </div>
    );
}
