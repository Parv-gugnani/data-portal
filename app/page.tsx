import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Proto Data Portal
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Acquire labeled datasets, HD maps, raw imagery, 3D scenes, and point
          clouds.
          <br />
          Create tasks for custom data collection, labeling, and scene creation.
        </p>
        <Link
          href="/signup"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Sign Up
        </Link>
      </header>
    </div>
  );
}
