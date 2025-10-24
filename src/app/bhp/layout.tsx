// src/app/bhp/layout.tsx

import React from "react";

export const metadata = {
    title: "BHP | Hackamine",
    description: "Vista embebida de Figma para Hackamine - Mantenimiento",
};

export default function BHPLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="min-h-screen bg-white">
            {children}
        </section>
    );
}
