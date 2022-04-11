import { Button, DatePicker } from "antd";

function App() {
  return (
    <>
      <header className="w-full shadow-md h-16 flex flex-row items-center px-6 text-lg font-bold">
        🔥 vite-react-antd-tailwind
      </header>

      <main className="container mx-auto p-6">
        <div className="flex flex-row items-center gap-6 flex-wrap">
          <h1 className="border-4 border-yellow-400 p-8 rounded-xl text-3xl text-center m-0">
            Hello!
          </h1>

          <Button type="primary" size="large">
            Clicky
          </Button>

          <DatePicker size="large" />
        </div>
      </main>
    </>
  );
}

export default App;
