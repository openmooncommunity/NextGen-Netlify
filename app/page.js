import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome on another OpenMoon Project
        </h1>
        <p className="text-xl text-gray-700">
          To start editing go to <code>pages/index.js</code>
        </p>
      </div>
      <footer className="absolute text-center text-sm text-gray-500 min-h-screen flex items-end p-12">
        Made with ❤️ by SpaceHub Technology
      </footer>
    </div>
  );
}
