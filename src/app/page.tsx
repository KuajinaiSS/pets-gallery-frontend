import { Button, Card } from "flowbite-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 bg-gray-50">
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Carta de Ejemplo con Flowbite
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Este es un ejemplo de componente Flowbite funcionando correctamente.
        </p>
      </Card>
    </main>
  );
}
