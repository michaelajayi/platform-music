import Header from "@/components/header";
import MediaGallery from "@/components/media-gallery";
import PlatformRecords from "@/components/platform-records";

export default function Home() {
  return (
    <main className="w-screen h-full overflow-y-hidden overflow-x-hidden">
      <Header />
      <PlatformRecords />
      <MediaGallery />
    </main>
  );
}
