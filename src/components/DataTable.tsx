import Carousel from "./Carousel";

interface User {
  nameApt: string;
  desc: string;
  pic: string;
  pic2: string;
  pic3: string;
  pic4: string;
  pic5: string;
  pic6: string;
  pic7: string;
  pic8: string;
  id: number;
}

const users: User[] = [
  {
    nameApt: "Apartamento",
    desc: "Apartamento para uma estadia de duas pessoas, cama de casal confortável, cozinha completa e vista esplêndida para o mar.",
    pic: "/photos/ap301.jpg",
    pic2: "/photos/ap302.jpg",
    pic3: "/photos/ap303.jpg",
    pic4: "/photos/ap304.jpg",
    pic5: "/photos/ap305.jpg",
    pic6: "/photos/ap306.jpg",
    pic7: "/photos/ap307.jpg",
    pic8: "/photos/ap308.jpg",
    id: 1
  },
  {
    nameApt: "Loft 1",
    desc: "Loft para estadia de duas pessoas, ar condicionado, cozinha completa e sensação de moradia confortável.",
    pic: "/photos/ap101.jpg",
    pic2: "/photos/ap102.jpg",
    pic3: "/photos/ap103.jpg",
    pic4: "/photos/ap104.jpg",
    pic5: "/photos/ap105.jpg",
    pic6: "/photos/ap106.jpg",
    pic7: "/photos/ap107.jpg",
    pic8: "/photos/ap108.jpg",
    id: 2,
  },
  {
    nameApt: "Loft 2",
    desc: "Loft para estadia de duas pessoas, ar condicionado, cozinha completa e sensação de moradia confortável.",
    pic: "/photos/ap201.jpg",
    pic2: "/photos/ap202.jpg",
    pic3: "/photos/ap203.jpg",
    pic4: "/photos/ap204.jpg",
    pic5: "/photos/ap205.jpg",
    pic6: "/photos/ap206.jpg",
    pic7: "/photos/ap207.jpg",
    pic8: "/photos/ap208.jpg",
    id: 3
  },
];

export default function DataTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {users.map((u) => (
        <div
          key={u.id}
          className="bg-card-bg border border-sand rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <Carousel
            pic={u.pic}
            pic2={u.pic2}
            pic3={u.pic3}
            pic4={u.pic4}
            pic5={u.pic5}
            pic6={u.pic6}
            pic7={u.pic7}
            pic8={u.pic8}
            id={u.id}
          />
          <div className="p-5">
            <h3 className="font-display text-xl text-deep mb-2">{u.nameApt}</h3>
            <p className="text-fg text-sm leading-relaxed">{u.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}