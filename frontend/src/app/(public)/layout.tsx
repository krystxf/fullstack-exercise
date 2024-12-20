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

      <div className="w-full flex justify-center py-4 px-8 min-h-screen">
        <main className="w-full max-w-screen-lg">{children}</main>
      </div>

      <Footer />
    </>
  );
}
