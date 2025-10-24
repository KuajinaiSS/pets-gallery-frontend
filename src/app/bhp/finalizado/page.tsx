import Link from "next/link";

export default function FinalizadoPage() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-gray-800 text-white">
            <header className="w-full bg-orange-600 flex justify-between items-center px-4 py-3 font-bold text-2xl">
                <span>BHP</span>
                <div className="bg-white text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    👤
                </div>
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
                    <p>🏁</p>
                    <p>Iniciar</p>
                </div>
                <div className="text-center opacity-60">
                    <p>⏱️</p>
                    <p>En progreso</p>
                </div>
                <div className="text-center">
                    <p>✔️</p>
                    <p>Finalizado</p>
                </div>
            </footer>
        </div>
    );
}
