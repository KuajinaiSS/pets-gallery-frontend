// src/app/mantenimiento/page.tsx
export default function MantenimientoPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <h1 className="text-2xl font-bold mb-4">Diseño Hackamine - Mantenimiento</h1>

            <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800"
                height="450"
                src="https://embed.figma.com/design/uzg2V6Fi5P58wZfZtloKe4/Hackamine-Mantenimiento?node-id=0-1&embed-host=share"
                allowFullScreen
            ></iframe>
        </main>
    );
}
