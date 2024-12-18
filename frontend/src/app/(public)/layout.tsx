import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen w-full justify-center px-8 py-4">
        <main className="w-full max-w-screen-lg">{children}</main>
      </div>

      <Footer />
    </>
  );
}
