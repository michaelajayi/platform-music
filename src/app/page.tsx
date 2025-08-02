import HeaderWrapper from "@/components/header-wrapper";
import MediaGallery from "@/components/media-gallery";
import PlatformRecords from "@/components/platform-records";

export default function Home() {
  return (
    <main className="w-full flex-1">
      <HeaderWrapper />
      <PlatformRecords />
      <MediaGallery />
    </main>
  );
}
