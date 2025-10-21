"use client";

import { Card } from "flowbite-react";
import Image, { StaticImageData } from "next/image";

interface SmallCardProps { title: string; text: string; img: string | StaticImageData; }

export function SmallCard({ title, text, img }: SmallCardProps) {
    return (
        <Card
            className="w-56 p-2 shadow-md hover:shadow-lg transition"
            renderImage={() => (
                <Image
                    width={240}
                    height={160}
                    src={img}
                    alt={title}
                    className="object-cover h-28 w-full rounded-t-lg"
                    priority
                />
            )}
        >
            <h5 className="text-base font-semibold text-gray-900">{title}</h5>
            <p className="text-xs text-gray-600">{text}</p>
        </Card>
    );
}
