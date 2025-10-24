import Link from "next/link";

export default function IniciarPage() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-white">
            {/* Header */}
            <header className="w-full bg-orange-600 flex justify-between items-center px-4 py-3 text-white font-bold text-2xl">
                <span>BHP</span>
                <div className="bg-white text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    👤
                </div>
            </header>

            {/* Contenido principal */}
            <main className="flex flex-col items-center text-center p-4">
                <h1 className="text-xl font-bold mb-2">Mantenimiento Programado</h1>
                <h2 className="text-lg font-semibold">PLS S/N</h2>
                <p className="text-lg font-medium mb-4">19-11-2025</p>

                {/* Imagen del diagrama */}
                <div className="w-full flex justify-center mb-4">
                    <img
                        src="/images/diagramaflujomantenimiento.png"
                        alt="Diagrama PLS"
                        className="max-w-sm w-full h-auto"
                    />
                </div>

                <p className="text-lg font-semibold">Tiempo de Mantenimiento</p>
                <p className="text-md mb-6">5 días: 30 min: 0 segundos</p>

                <p className="text-lg font-semibold">Porcentaje de llenado Total</p>
                <p className="text-3xl font-bold mb-6">0%</p>

                {/* Botón */}
                <Link href="/bhp/en-progreso">
                    <button className="bg-green-400 text-black font-semibold py-2 px-6 rounded-md">
                        Iniciar Actividad
                    </button>
                </Link>
            </main>

            {/* Footer */}
            <footer className="w-full bg-orange-600 flex justify-around py-2 text-white">
                <div className="text-center">
                    <p className="text-sm font-semibold">🏁</p>
                    <p>Iniciar</p>
                </div>
                <div className="text-center opacity-60">
                    <p className="text-sm">⏱️</p>
                    <p>En progreso</p>
                </div>
                <div className="text-center opacity-60">
                    <p className="text-sm">✔️</p>
                    <p>Finalizado</p>
                </div>
            </footer>
        </div>
    );
}
