import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white px-20 py-10">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex items-end gap-1">
            <div className="">
              <Image
                width={50}
                height={50}
                alt="Trendora"
                src={"/trendora-white.svg"}
              />
            </div>
            <h4 className="font-extrabold text-2xl">Trendora</h4>
          </div>

          <div>
            <h4 className="font-bold text-lg">Address:</h4>
            <p>Jember, Indonesia</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Contact:</h4>
            <p>085959978483</p>
            <p>syahronibawafi@gmail.com</p>
          </div>
        </div>

        <div className="flex justify-end">
          <ul>
            <li>link</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center border-t border-t-white mt-8">
        <span className="pt-6">
          &copy; 2025 Syahroni Bawafi. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
