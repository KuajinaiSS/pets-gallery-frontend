import Image from "next/image";
import Link from "next/link";

export default function EnProgresoPage() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-white">
            <header className="w-full bg-orange-600 flex justify-between items-center px-4 py-3 text-white font-bold text-2xl">
                <span>BHP</span>
                <div className="bg-white text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    👤
                </div>
            </header>

            <main className="flex flex-col items-center text-center p-4">
                <h1 className="text-xl font-bold mb-2">Mantenimiento Programado</h1>
                <h2 className="text-lg font-semibold">PLS S/N</h2>
                <p className="text-lg font-medium mb-4">19-11-2025</p>

                <div className="relative w-[400px] h-[250px]">
                    <Image
                        src="/images/diagramaflujomantenimiento.png"
                        alt="Diagrama flujo mantenimiento"
                        width={400}
                        height={300}
                        className="rounded-lg object-contain"
                    />
                </div>

                <p className="text-lg font-semibold">Tiempo de Mantenimiento</p>
                <p className="text-md mb-6">4 días: 29 minutos: 55 segundos</p>

                <p className="text-lg font-semibold">Porcentaje de llenado Total</p>
                <p className="text-3xl font-bold mb-6">1%</p>

                <Link href="/bhp/finalizado">
                    <button className="bg-green-400 text-black font-semibold py-2 px-6 rounded-md">
                        Terminar Actividad
                    </button>
                </Link>
            </main>

            <footer className="w-full bg-orange-600 flex justify-around py-2 text-white">
                <div className="text-center opacity-60">
                    <p>🏁</p>
                    <p>Iniciar</p>
                </div>
                <div className="text-center">
                    <p>⏱️</p>
                    <p>En progreso</p>
                </div>
                <div className="text-center opacity-60">
                    <p>✔️</p>
                    <p>Finalizado</p>
                </div>
            </footer>
        </div>
    );
}
