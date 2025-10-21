import { SmallCard } from "@/components/Card";
import cat from "@/public/images/gatocomuneuropeo-97.jpg";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <SmallCard title="Dog" text="A cute dog" img={cat} />
        <SmallCard title="Cat" text="A cute cat" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
        <SmallCard title="Bird" text="A cute bird" img={cat} />
      </div>
      
    </div>
  );
}
