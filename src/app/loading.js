import Image from "next/image";

export default function Loading() {
    // Or a custom loading skeleton component
    return <div >
        <Image src="/Spinner.svg" width={200} height={200} alt="Loading"/>
    </div>
  }